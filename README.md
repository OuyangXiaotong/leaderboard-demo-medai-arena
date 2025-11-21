# MedAI Arena – Comprehensive Medical AI Leaderboard 🏥🤖
**The most complete crowdsourced leaderboard for medical AI models worldwide**  
From Med-PaLM 2 and GPT-4o Medical to specialized detection/segmentation models across all imaging modalities.
**Live Demo**: https://ouyangxiaotong.github.io/leaderboard-demo--medai-arena
![MedAI Arena](screenshot.png)
## ✨ Features
- 5+ state-of-the-art medical AI models (constantly updated)
- Covers **LLMs**, **Computer Vision**, and **Multimodal** models
- 8 task types: Detection • Segmentation • Classification • 3D Reconstruction • Registration • Synthesis • Q&A • Multimodal Reasoning
- 10+ imaging modalities: X-Ray • CT • MRI • Ultrasound • Mammography • Fundus • Dermoscopy • Pathology • Endoscopy • PET • etc.
- Full-text search + three-level filtering + Elo sorting + fully responsive (mobile-perfect)
- Zero dependencies • single index.html • deploy in 30 seconds
## 🏆 Current Top 5 (Live)
| Rank | Model                  | Type       | Arena Elo | Organization         | Specialty                     |
|------|------------------------|------------|-----------|----------------------|-------------------------------|
| 1    | StrokeNet-Emergency    | Vision     | 1292      | Mass General         | Acute Stroke Detection (CT)   |
| 2    | Med-PaLM 2             | LLM        | 1290      | Google DeepMind      | General Medicine              |
| 3    | GPT-4o Medical         | Multimodal | 1285      | OpenAI               | Multi-domain Visual QA        |
| 4    | DeepBrainSeg 2.0       | Vision     | 1288      | Harvard Medical      | Brain Tumor Segmentation (MRI)|
| 5    | MammoAI-Pro            | Vision     | 1283      | Google Health        | Breast Cancer Detection       |
> Scores come from anonymous physician + AI expert blind voting (LMSYS Arena style)
Every push to `index.html` updates the site automatically in ~10 seconds.
## 🤝 Contributing (PRs Welcome!)
We enthusiastically welcome:
- Adding new medical AI models (especially open-source & Chinese models!)
- Correcting Elo scores or vote counts
- UI/UX improvements
- Connecting real benchmark data (MedMCQA, PathVQA, SLAKE, etc.)
PR template:
```markdown
**New model**: LLaMA-Med-Chinese-13B
**Type**: LLM
**Estimated Elo**: 1245
**Organization**: Tsinghua KEG
**Task**: Chinese medical QA
**License**: Apache 2.0
```
## ⭐ Star History
[![Star History Chart](https://api.star-history.com/svg?repos=OuyangXiaotong/leaderboard-demo--medai-arena&type=Date)](https://star-history.com/#OuyangXiaotong/leaderboard-demo--medai-arena&Date)
## 📄 License
MIT © 2024–Present OuyangXiaotong
---
**MedAI Arena – Making every medical AI model fairly evaluated!**
Give it a star if you like it ⭐
