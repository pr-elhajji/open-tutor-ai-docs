---
sidebar_position: 5
title: "🛠️ Development Guide"
---

Welcome to the **Open Tutor AI Development Setup Guide!** Whether you're a novice or an experienced developer, 
this guide will help you set up a **local development environment** for both the frontend and backend components. Let’s dive in! 🚀

## System Requirements

- **Operating System**: Linux (or WSL on Windows) or macOS  
- **Python Version**: Python 3.11+  
- **Node.js Version**: 22.10+

## Development Methods

### 🐧 Local Development Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/pr-elhajji/open-tutor-ai-CE.git
   cd open-tutor-ai-CE
   ```

2. **Frontend Setup**:
   - Create a `.env` file:

     ```bash
     cp -RPp .env.example .env
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the frontend server:

     ```bash
     npm run dev
     ```

     🌐 Available at: [http://localhost:5173](http://localhost:5173).

3. **Backend Setup**:
   - Navigate to the backend:

     ```bash
     cd backend
     ```

   - Use **Conda** for environment setup:

     ```bash
     conda create --name open-tutorai python=3.11
     conda activate open-tutorai
     ```

   - Install dependencies:

     ```bash
     pip install -r requirements.txt -U
     ```

   - Start the backend:

     ```bash
     sh dev.sh
     ```

     📄 API docs available at: [http://localhost:8080/docs](http://localhost:8080/docs).


## 🐛 Troubleshooting

### **FATAL ERROR: Reached Heap Limit**

If you encounter memory-related errors during the build, increase the **Node.js heap size**:

1. **Modify Dockerfile**:

   ```dockerfile
   ENV NODE_OPTIONS=--max-old-space-size=4096
   ```

2. **Allocate at least 4 GB of RAM** to Node.js.

---

### **Other Issues**

- **Port Conflicts**:  
   Ensure that no other processes are using **ports 8080 or 5173**.

- **Hot Reload Not Working**:  
   Verify that **watch mode** is enabled for both frontend and backend.

## Contributing to Open TUTORAI

### Local Workflow

1. **Commit Changes Regularly** to track progress.
2. **Sync with the Main Branch** to avoid conflicts:

   ```bash
   git pull origin main
   ```

3. **Run Tests Before Pushing**:

   ```bash
   npm run test
   ```

Happy coding! 🎉
