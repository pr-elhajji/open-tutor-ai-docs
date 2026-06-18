---
sidebar_position: 200
title: "🚀 البدء"
---

# البدء مع Open TutorAI

مرحبًا بك في **وثائق Open TutorAI!** ستجد أدناه قائمة بالخطوات الأساسية والموارد التي ستساعدك على البدء وإدارة Open TutorAI وتطويره.

## 🎥 دليل الفيديو

> 📺 **شاهد**: [الحلقة 1 – دليل الإعداد خطوة بخطوة على يوتيوب](https://youtu.be/vDOujIcJxrE)

<iframe width="560" height="315" src="https://www.youtube.com/embed/vDOujIcJxrE?si=6G8e8ZiZ3c3f8Z_R" title="مشغل فيديو يوتيوب" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 🛠️ دليل الإعداد

اتبع الخطوات التالية لإعداد المشروع محليًا على جهازك:

1. **عمل Fork و Clone للمستودع**
   - انتقل إلى مستودع GitHub:
     https://github.com/R2D-dev/open-tutor-ai-CE
   - اضغط على **Fork** ثم قم باستنساخ (Clone) النسخة الخاصة بك:

     ```bash
     git clone https://github.com/YOUR_USERNAME/open-tutor-ai-CE.git
     cd open-tutor-ai-CE
     ```

2. **إعداد الواجهة الخلفية (Backend)**
   - انتقل إلى مجلد الواجهة الخلفية:

     ```bash
     cd backend
     ```

   - أنشئ بيئة Conda جديدة وقم بتفعيلها:

     ```bash
     conda create -n tutorai-env python=3.11
     conda activate tutorai-env
     ```

   - قم بتثبيت الحزم المطلوبة:

     ```bash
     pip install -r requirements.txt
     ```

   - للتطوير:

     ```bash
     ./dev.sh
     ```

   - أو للإنتاج (Production):

     ```bash
     ./start.sh
     ```

3. **إعداد الواجهة الأمامية (Frontend)**

   - من المجلد الرئيسي للمشروع (أو انتقل إلى مجلد الواجهة الأمامية):

     ```bash
     npm install
     npm run dev
     ```

---

🎉 نتمنى لك تجربة ممتعة في الاستكشاف!

إذا كانت لديك أي أسئلة، فانضم إلى مجتمعنا على Discord أو افتح Issue على GitHub.

- Discord: https://discord.gg/BTQtE2deEm
- GitHub: https://github.com/R2D-dev/open-tutor-ai-CE

````
