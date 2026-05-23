// Centralized portfolio data — single source of truth.

export const PROFILE = {
    name: "Deepesh Agrawal",
    title: "Senior AI Engineer | AI Architect | GenAI & Agentic AI Specialist",
    locations: ["Abu Dhabi, UAE", "Bengaluru, India"],
    tagline:
        "Building production-grade GenAI, agentic AI, multimodal AI, and scalable ML platforms.",
    email: "deepeshq@gmail.com",
    phones: ["+971-585847820", "+91-8889223772"],
    github: "https://github.com/deepeshguru",
    linkedin: "https://www.linkedin.com/in/deepesh-agrawal-b3559015b/",
    resumeUrl: "/resume.pdf",
    openToRoles:
        "Open to Senior AI Engineer, AI Architect & GenAI Platform roles",
    photoUrl:
        "https://customer-assets.emergentagent.com/job_deepesh-ai-architect/artifacts/mx0avly8_WhatsApp%20Image%202023-02-01%20at%203.55.59%20PM_magicstudio_bnw1y7cbth7%20%281%29.png",
};

export const ABOUT_TEXT = `I am an AI architect and ML engineer with 9+ years of experience designing and deploying production-grade AI systems across NLP, Computer Vision, Generative AI, Agentic AI, RAG, MLOps, and scalable inference platforms. I have worked with Presight AI, IBM Labs, Fujitsu Research, UST, AMD, and other organizations, delivering enterprise AI platforms, multilingual RAG systems, LLM agents, model optimization, and real-time AI solutions.`;

export const HIGHLIGHTS = [
    { value: "9+", label: "Years AI/ML Experience" },
    { value: "GenAI", label: "& Agentic AI Platforms" },
    { value: "RAG", label: "LLMs, VLMs, Speech AI" },
    { value: "MLOps", label: "& Scalable Inference" },
];

export const EXPERTISE = [
    {
        title: "Agentic AI & MCP",
        desc: "Tool-calling agents, MCP servers, graph workflows, and registry-driven orchestration.",
        icon: "Bot",
    },
    {
        title: "Retrieval-Augmented Generation",
        desc: "Cross-lingual RAG, hybrid retrieval, re-ranking, and grounded enterprise Q&A.",
        icon: "Database",
    },
    {
        title: "LLM / VLM Inference Serving",
        desc: "vLLM, Triton, Ray Serve for low-latency multi-tenant model serving at scale.",
        icon: "Cpu",
    },
    {
        title: "Speech AI & Diarization",
        desc: "Whisper, pyannote, VibeVoice — who spoke, when, and what was said.",
        icon: "AudioLines",
    },
    {
        title: "Computer Vision & Video",
        desc: "VLMs, signature detection, object tracking, video analytics for real workflows.",
        icon: "Eye",
    },
    {
        title: "MLOps & Observability",
        desc: "Jenkins, Kubeflow, MLflow, Grafana, canary releases on Kubernetes/OpenShift.",
        icon: "GitBranch",
    },
    {
        title: "Multilingual NLP & Semantic Search",
        desc: "BGE-M3 embeddings, vector DBs, multilingual retrieval and ranking pipelines.",
        icon: "Languages",
    },
    {
        title: "Model Optimization — CPU/GPU/Edge",
        desc: "oneDNN, ZenDNN, TensorRT, llama.cpp tuning on EPYC, aarch64, Jetson.",
        icon: "Gauge",
    },
];

export const CURRENT_ROLE = {
    company: "Presight AI",
    role: "Senior AI Engineer",
    location: "Abu Dhabi, UAE",
    dates: "May 2026 – Present",
    bullets: [
        "Built an audio analytics pipeline for Presight Synergy to identify who spoke, when, and what was said by combining pyannote.audio speaker diarization with Whisper large-v3 speech-to-text, while evaluating Microsoft VibeVoice for long-form, multi-speaker conversational audio workflows.",
        "Worked on video analysis and signature detection for Synergy use cases using Qwen-family multimodal / vision-language models, applying VLM prompting, frame-level analysis, structured detection outputs, and agentic AI workflow patterns.",
        "Used Ray Serve, NVIDIA Triton Inference Server, and vLLM for scalable model serving across LLM, VLM, speech, and multimodal workloads, supporting MCP-ready / agentic AI integration for exposing model inference and analytics workflows through conversational interfaces.",
    ],
    tech: [
        "Python",
        "Java",
        "PyTorch",
        "pyannote.audio",
        "Whisper",
        "VibeVoice",
        "Qwen VLMs",
        "Ray Serve",
        "Triton",
        "vLLM",
        "LangChain",
        "LangGraph",
        "MCP",
        "Vector DBs",
    ],
};

export const EXPERIENCE = [
    {
        company: "IBM Labs",
        role: "AI Engineer Architect",
        location: "Bengaluru, India",
        dates: "May 2025 – Apr 2026",
        icon: "Building2",
        highlights: [
            "Led post-training, alignment, evaluation, and enterprise deployment of Granite-4.0-H-Small from Granite-4.0-H-Small-Base — using SFT, reinforcement-learning-based alignment (RLA), and model merging to improve instruction-following and production readiness.",
            "Re-architected a production LLM agent platform for large-file workloads, reducing memory usage by ~3x and eliminating stability issues at enterprise load.",
            "Converted blocking data operations into async execution pipelines, lifting concurrent agent throughput across the platform.",
            "Designed context-aware, multi-step agent workflows using graph-based orchestration and vector retrieval; improved reasoning robustness with Chain-of-Thought and Tree-of-Thought prompting.",
            "Built actionable agents via MCP-based tool integration and external APIs (e.g., GitHub), with dynamic per-user CRUD over agents, OpenAPI tools, and MCP servers inside the Agentic AI Framework (ARIA).",
        ],
        tech: [
            "Python",
            "watsonx.ai",
            "OpenAI GPT-4o",
            "LangChain",
            "LangGraph",
            "MCP",
            "Kubernetes / OpenShift",
            "Kafka",
            "Redis",
            "Milvus",
            "Chroma",
            "Grafana",
            "Terraform",
            "pytest",
        ],
    },
    {
        company: "Fujitsu Research",
        role: "Senior ML Engineer",
        location: "Bengaluru, India",
        dates: "May 2023 – May 2025",
        icon: "FlaskConical",
        highlights: [
            "Shipped a cross-lingual RAG Q&A chatbot platform serving 5 languages — boosted answer F1 by ~32% vs baseline; Flask REST API delivers p95 latency <140 ms on ARM-based EC2.",
            "Improved retrieval & answer quality by fine-tuning BGE-M3 embeddings and Llama 3.1 8B with an integrated reranker for cross-lingual relevance.",
            "Built a hands-free MLOps pipeline (Jenkins → Kubeflow → MLflow) that auto-trains, quantizes, canary-deploys and monitors models — cutting release cycles from 10 days to 3 days.",
            "Optimized oneDNN operators for aarch64 CPUs, trimming end-to-end inference time by 41% and lowering AWS compute cost by ~18%.",
        ],
        tech: [
            "Python",
            "C++",
            "PyTorch",
            "LangChain",
            "Haystack",
            "LlamaIndex",
            "Jenkins",
            "MLflow",
            "Kubeflow",
            "Grafana",
            "Prometheus",
            "Airflow",
            "AWS",
            "Azure",
            "llama.cpp",
        ],
    },
    {
        company: "UST / Abzooba",
        role: "Data Scientist",
        location: "Pune, India",
        dates: "May 2021 – May 2023",
        icon: "BrainCircuit",
        highlights: [
            "Fine-tuned T5-Large for natural-language → SQL (Capital Group), reaching 91% query accuracy on production logs and powering ~12K self-serve queries/month.",
            "Automated table extraction from messy Excel reports for Swiss Re using ML + OCR — slashed manual prep time by 70% (8 hrs → 0.5 hrs per report) and boosted pipeline throughput 16x.",
            "Built a one-year diabetic-risk prediction model from two years of patient medical and insurance data, enabling proactive monitoring and early intervention.",
        ],
        tech: [
            "Python",
            "PyTorch",
            "Hugging Face Transformers",
            "Flask",
            "Docker",
            "MySQL",
            "OpenPyXL",
            "Pandas",
            "scikit-learn",
            "NLP",
        ],
    },
    {
        company: "AMD India",
        role: "ML Engineer (Contract)",
        location: "Bengaluru, India",
        dates: "Feb 2020 – May 2021",
        icon: "Cpu",
        highlights: [
            "Integrated ZenDNN (AMD's deep learning library) with PyTorch and ONNX Runtime.",
            "Benchmarked ZenDNN vs. ONNX Runtime — achieved a 25% inference speedup on AMD EPYC CPUs.",
        ],
        tech: ["Python", "PyTorch", "ONNX Runtime", "ZenDNN", "Docker", "pytest"],
    },
    {
        company: "BrainGrid Technologies",
        role: "Solution Architect, Deep Learning",
        location: "India",
        dates: "Sep 2019 – Feb 2020",
        icon: "Network",
        highlights: [
            "Optimized Daimler deep learning code in collaboration with NVIDIA engineers.",
            "Deployed YOLO object detection models on Jetson Nano for real-time video processing.",
        ],
        tech: [
            "Python",
            "CUDA",
            "PyTorch",
            "TensorRT",
            "Jetson Nano",
            "Nsight Systems",
            "OpenCV",
        ],
    },
    {
        company: "Beahead Pvt. Ltd.",
        role: "Machine Learning Engineer",
        location: "India",
        dates: "Sep 2018 – Sep 2019",
        icon: "Layers",
        highlights: [
            "Built diabetic retinopathy detection using InceptionResNetV2.",
            "Developed video analysis models for social media content moderation.",
            "Automated social media scraping and keyword extraction using RAKE.",
            "Built OCR-based document classification for pharma guidelines.",
        ],
        tech: [
            "Python",
            "TensorFlow",
            "Keras",
            "CNN",
            "RNN",
            "LSTM",
            "OpenCV",
            "Flask",
            "Docker",
            "Azure",
            "scikit-learn",
            "Selenium",
            "BeautifulSoup",
            "Tesseract",
            "OCR",
            "RAKE",
        ],
    },
    {
        company: "Iotechworld Avigation",
        role: "AI Engineer",
        location: "India",
        dates: "Feb 2018 – Jun 2018",
        icon: "Plane",
        highlights: [
            "Built gesture-controlled drone using SSD-based deep learning model on Raspberry Pi.",
            "Developed object tracking and navigation system using Mean Shift and GPS data.",
        ],
        tech: [
            "Python",
            "TensorFlow API",
            "SSD",
            "CNN",
            "Raspberry Pi",
            "OpenCV",
            "GPS",
            "Mean Shift",
        ],
    },
];

export const CASE_STUDIES = [
    {
        number: "01",
        title: "Presight Synergy Multimodal AI",
        description:
            "Audio diarization, speech-to-text, video analysis, signature detection, multimodal inference, and agentic AI integration for Synergy use cases.",
        tech: [
            "pyannote.audio",
            "Whisper",
            "VibeVoice",
            "Qwen VLMs",
            "Ray Serve",
            "Triton",
            "vLLM",
            "MCP",
        ],
        accent: "Multimodal · Agentic",
    },
    {
        number: "02",
        title: "Enterprise Agentic AI Platform — IBM",
        description:
            "Production LLM agent platform with MCP tools, OpenAPI integrations, graph workflows, vector retrieval, and registry management. Re-architected for large-file workloads — ~3x memory reduction, async pipelines for higher concurrency, and CoT/ToT prompting for robust reasoning inside the ARIA framework.",
        tech: [
            "LangChain",
            "LangGraph",
            "MCP",
            "watsonx.ai",
            "GPT-4o",
            "Kubernetes",
            "Kafka",
            "Redis",
            "Vector DBs",
        ],
        accent: "Agentic · Platform",
    },
    {
        number: "03",
        title: "Cross-Lingual RAG Platform",
        description:
            "Multilingual RAG chatbot serving 5 languages with fine-tuned BGE-M3 embeddings, Llama 3.1 8B adaptation, and reranking. Lifted answer F1 by ~32% vs baseline; Flask REST API delivers p95 latency <140 ms on ARM-based EC2.",
        tech: [
            "BGE-M3",
            "Llama 3.1 8B",
            "Flask",
            "LangChain",
            "Haystack",
            "LlamaIndex",
            "AWS",
        ],
        accent: "RAG · Multilingual",
    },
    {
        number: "04",
        title: "Hands-Free MLOps Pipeline",
        description:
            "Automated train → quantize → canary deploy → monitor pipeline that cut release cycles from 10 days to 3 days. Paired with oneDNN/aarch64 kernel tuning: −41% inference time and ~18% lower AWS compute cost.",
        tech: [
            "Jenkins",
            "Kubeflow",
            "MLflow",
            "Grafana",
            "Prometheus",
            "Kubernetes",
        ],
        accent: "MLOps · Release",
    },
    {
        number: "05",
        title: "Edge AI & Computer Vision",
        description:
            "YOLO object detection on Jetson Nano, drone gesture control, diabetic retinopathy detection, and video moderation systems.",
        tech: [
            "YOLO",
            "TensorRT",
            "Jetson Nano",
            "OpenCV",
            "TensorFlow",
            "PyTorch",
        ],
        accent: "CV · Edge",
    },
];

export const SKILLS = [
    {
        group: "GenAI / Agentic AI",
        items: [
            "RAG",
            "LLM Agents",
            "MCP",
            "LangChain",
            "LangGraph",
            "LlamaIndex",
            "Prompt Engineering",
            "Tool Calling",
            "Vector Retrieval",
        ],
    },
    {
        group: "AI / ML",
        items: [
            "PyTorch",
            "TensorFlow",
            "Hugging Face Transformers",
            "Scikit-learn",
            "CNN",
            "RNN",
            "LSTM",
            "NLP",
            "Computer Vision",
            "Speech AI",
        ],
    },
    {
        group: "Inference & Optimization",
        items: [
            "vLLM",
            "NVIDIA Triton",
            "Ray Serve",
            "TensorRT",
            "ONNX Runtime",
            "oneDNN",
            "ZenDNN",
            "llama.cpp",
        ],
    },
    {
        group: "MLOps & DevOps",
        items: [
            "MLflow",
            "Kubeflow",
            "Airflow",
            "Jenkins",
            "Docker",
            "Kubernetes",
            "OpenShift",
            "Grafana",
            "Prometheus",
            "Terraform",
        ],
    },
    {
        group: "Cloud & Databases",
        items: [
            "AWS",
            "Azure",
            "Google Cloud",
            "MySQL",
            "PostgreSQL",
            "Cassandra",
            "FAISS",
            "ChromaDB",
            "Qdrant",
            "Milvus",
        ],
    },
    {
        group: "Programming",
        items: ["Python", "C++", "SQL", "CUDA", "MATLAB", "R"],
    },
];

export const EDUCATION = [
    {
        degree: "MTech in AI & ML",
        school: "BITS Pilani",
        dates: "2023 – 2025",
    },
    {
        degree: "BE in Electrical & Electronics",
        school: "RGPV Bhopal",
        dates: "2013 – 2017",
    },
];

export const CERTIFICATIONS = [
    "Software Architecture & Design of Modern Large-Scale Systems — Udemy",
    "Introduction to Generative AI — Google Cloud",
    "Microsoft DP-100: Designing & Implementing Data Science Solutions on Azure",
    "Advanced Data Science — IBM",
    "Computer Vision with Embedded Machine Learning — Edge Impulse",
    "Neural Networks & Deep Learning — DeepLearning.ai",
    "Machine Learning on Google Cloud — Google Cloud",
];

export const NAV_ITEMS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "expertise", label: "Expertise" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
];
