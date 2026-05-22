"""Backend API tests for Deepesh Agrawal Portfolio backend.

Covers:
- Root /api/ welcome endpoint
- /api/contact POST validation + persistence
- /api/contact GET list (sorted desc, no _id)
- /api/status legacy POST/GET endpoints
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://deepesh-ai-architect.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_returns_welcome(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Deepesh" in data["message"]


# ---------- /api/contact ----------
class TestContact:
    def test_create_contact_valid(self, session):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_User_{unique}",
            "email": f"test_{unique}@example.com",
            "message": f"TEST_MSG_{unique} - hello from pytest",
        }
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 201, f"got {r.status_code}: {r.text}"
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data and isinstance(data["created_at"], str)
        # verify persistence via GET
        r2 = session.get(f"{API}/contact")
        assert r2.status_code == 200
        items = r2.json()
        assert any(i.get("id") == data["id"] for i in items), "created contact not found in list"

    def test_create_contact_invalid_email(self, session):
        payload = {"name": "TEST_X", "email": "not-an-email", "message": "hi"}
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_name(self, session):
        payload = {"email": "a@b.com", "message": "hi"}
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_empty_name(self, session):
        payload = {"name": "", "email": "a@b.com", "message": "hi"}
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_empty_message(self, session):
        payload = {"name": "X", "email": "a@b.com", "message": ""}
        r = session.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_list_contact_no_objectid_and_sorted(self, session):
        # ensure 2 messages in order
        u1 = uuid.uuid4().hex[:6]
        u2 = uuid.uuid4().hex[:6]
        session.post(f"{API}/contact", json={"name": f"TEST_A_{u1}", "email": f"a_{u1}@example.com", "message": "first"})
        session.post(f"{API}/contact", json={"name": f"TEST_B_{u2}", "email": f"b_{u2}@example.com", "message": "second"})
        r = session.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 2
        # no _id leakage
        for it in items:
            assert "_id" not in it
            assert "id" in it
            assert "created_at" in it
        # sorted desc by created_at
        timestamps = [it["created_at"] for it in items]
        assert timestamps == sorted(timestamps, reverse=True), "contact messages not sorted desc by created_at"


# ---------- /api/status legacy ----------
class TestStatusLegacy:
    def test_create_status(self, session):
        r = session.post(f"{API}/status", json={"client_name": "TEST_client"})
        assert r.status_code == 200
        data = r.json()
        assert data["client_name"] == "TEST_client"
        assert "id" in data
        assert "timestamp" in data

    def test_list_status(self, session):
        r = session.get(f"{API}/status")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        for it in items:
            assert "_id" not in it
