---
sidebar_position: 200
title: "🚀 Getting Started"
---

# Getting Started with Open TutorAI

Welcome to the **Open TutorAI Documentation!** Below is a list of essential steps and resources to help you get started, manage, and develop with Open TutorAI.

## 🎥 Video Guide

> 📺 **Watch**: [EP1 – Step-by-step setup guide on YouTube](https://youtu.be/vDOujIcJxrE)

<iframe width="560" height="315" src="https://www.youtube.com/embed/vDOujIcJxrE?si=6G8e8ZiZ3c3f8Z_R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 📋 Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| Python | **3.11 – 3.12** | Backend runtime |
| Node.js | **22** (see `.nvmrc`) | Frontend build |
| Docker + Compose | latest | Only for the Docker quick start |
| Ollama *(optional)* | latest | Run local LLMs |

:::info Single-application architecture
Open TutorAI CE is a **root-driven FastAPI application** — there is no separate
`backend/` folder. The app entry point is `main.py`, domains live at the
repository root, and the SvelteKit frontend lives in `ui/`. See the
[Architecture](../architecture/) page for the full picture.
:::

## 🚀 Quick Start with Docker (recommended)

The fastest way to run the full stack (API + realtime + built frontend):

```bash
# 1. Clone
git clone https://github.com/Open-TutorAi/open-tutor-ai-CE.git
cd open-tutor-ai-CE

# 2. Create your environment file
cp .env.example .env

# 3. Build and start the stack
docker compose --env-file .env -f devops/docker/docker-compose.yaml up --build
```

Open [http://localhost:8080](http://localhost:8080) once the containers are up.

> 💡 A `Makefile` wraps the common Compose commands: `make install` (up -d),
> `make startAndBuild`, `make stop`, and `make update`.

For **GPU** acceleration, add the matching overlay:

```bash
# NVIDIA
docker compose --env-file .env \
  -f devops/docker/docker-compose.yaml \
  -f devops/docker/docker-compose.gpu.yaml up --build

# AMD
docker compose --env-file .env \
  -f devops/docker/docker-compose.yaml \
  -f devops/docker/docker-compose.amdgpu.yaml up --build
```

## 🛠️ Manual Setup (local development)

Use this when you want hot-reload on the API and the frontend.

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/open-tutor-ai-CE.git
   cd open-tutor-ai-CE
   ```

2. **Backend — run from the repository root** (no `backend/` folder)
   - Create and activate a virtual environment (Python 3.11–3.12):
     ```bash
     python3 -m venv .venv
     source .venv/bin/activate   # Windows: .venv\Scripts\activate
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Start the API with hot-reload. The helper script copies `.env.example` to
     `.env` on first run and launches `uvicorn main:app --reload`:
     ```bash
     ./devops/scripts/dev.sh
     ```
     Equivalent manual command:
     ```bash
     cp .env.example .env        # first run only
     uvicorn main:app --reload --port 8080 --host 0.0.0.0
     ```
     The API is now available at [http://localhost:8080](http://localhost:8080).

3. **Frontend — the SvelteKit app lives in `ui/`**
   ```bash
   cd ui
   npm install
   npm run dev
   ```

4. **Validate your changes** (optional, matches CI)
   ```bash
   make check        # runs pre-commit lint + pytest + frontend tests
   # or individually:
   pytest -q
   cd ui && npm run test:frontend
   ```

---

Happy exploring 🎉 If you have questions, join our [community](https://discord.gg/BTQtE2deEm) or raise an issue on [GitHub](https://github.com/R2D-dev/open-tutor-ai-CE).
