---
sidebar_position: 200
title: "🚀 Démarrage"
---

# Débuter avec Open TutorAI

Bienvenue dans la **Documentation Open TutorAI !** Voici une liste des étapes et ressources essentielles pour vous aider à démarrer, gérer et développer avec Open TutorAI.

## 🎥 Guide Vidéo

> 📺 **Regarder** : [EP1 – Guide d'installation pas à pas sur YouTube](https://youtu.be/vDOujIcJxrE)

<iframe width="560" height="315" src="https://www.youtube.com/embed/vDOujIcJxrE?si=6G8e8ZiZ3c3f8Z_R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 🛠️ Guide d'installation

Suivez ces étapes pour configurer le projet localement :

1. **Forker et Cloner le Dépôt**
   - Allez sur le [Dépôt GitHub](https://github.com/R2D-dev/open-tutor-ai-CE)
   - Cliquez sur **Fork**, puis clonez votre dépôt forké :
    ```bash
     git clone https://github.com/YOUR_USERNAME/open-tutor-ai-CE.git
     cd open-tutor-ai-CE
     ```

2. **Configuration du Backend**
   - Accédez au dossier backend :
     ```bash
     cd backend
     ```
   - Créer et activer un nouvel environnement Conda :
     ```bash
     conda create -n tutorai-env python=3.11
     conda activate tutorai-env
     ```
   - Installez les paquets requis :
     ```bash
     pip install -r requirements.txt
     ```

   - Pour le développement :
     ```bash
     ./dev.sh
     ```
   - Ou pour la production :
     ```bash
     ./start.sh
     ```

3. **Configuration du Frontend**
   - Depuis la racine du projet (ou accédez au dossier frontend) :
     ```bash
     npm install
     npm run dev
     ```


---

Bonne exploration 🎉 Si vous avez des questions, rejoignez notre [communauté](https://discord.gg/BTQtE2deEm) ou ouvrez un ticket sur [GitHub](https://github.com/R2D-dev/open-tutor-ai-CE).