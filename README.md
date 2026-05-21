# MedAI Arena – Comprehensive Medical AI Leaderboard 🏥🤖
**The most complete crowdsourced leaderboard for medical AI models worldwide**  
From Med-Gemini and GPT-4o Medical to specialized detection/segmentation models across all imaging modalities.

**Live Demo**: https://ouyangxiaotong.github.io/leaderboard-demo-medai-arena

![MedAI Arena](screenshot.png)

## ✨ Features

- 15+ state-of-the-art medical AI models (constantly updated)
- Covers **LLMs**, **Computer Vision**, and **Multimodal** models
- 8 task types: Detection • Segmentation • Classification • 3D Reconstruction • Registration • Synthesis • Q&A • Multimodal Reasoning
- 10+ imaging modalities: X-Ray • CT • MRI • Ultrasound • Mammography • Fundus • Dermoscopy • Pathology • Endoscopy • PET • etc.
- Full-text search by model name or organization
- Four-level filtering: Category × Task × Modality × Anatomical Region
- Sortable columns: Arena Elo, Model Name, Votes (click to toggle asc/desc)
- Reset all filters with one click
- Zero dependencies • single `index.html` • deploy in 30 seconds

## 🏆 Current Top 5 (Live)

| Rank | Model          | Type       | Arena Elo | Organization      | Specialty              |
|------|----------------|------------|-----------|-------------------|------------------------|
| 1    | Med-Gemini     | Multimodal | 1342      | Google DeepMind   | Medical Q&A            |
| 2    | GPT-4o Medical | Multimodal | 1318      | OpenAI            | Multi-domain Visual QA |
| 3    | LLaVA-Med      | Multimodal | 1287      | Microsoft Research| Medical Q&A            |
| 4    | CheXNet        | Vision     | 1275      | Stanford AI Lab   | Chest X-Ray Classification |
| 5    | nnU-Net        | Vision     | 1263      | DKFZ              | CT Segmentation        |

> Scores come from anonymous physician + AI expert blind voting (LMSYS Arena style)

Every push to `data/models.json` updates the leaderboard automatically.

## 📁 Data Schema

Each entry in `data/models.json` supports the following fields:

```json
{
  "rank": 1,
  "name": "Model Name",
  "type": "Vision | LLM | Multimodal",
  "task": "detection | segmentation | classification | reconstruction | registration | synthesis | qa",
  "elo": 1342,
  "ci": "±12",
  "votes": 1248,
  "modality": "xray | ct | mri | ultrasound | mammography | pet | fundus | dermoscopy | pathology | endoscopy | multiple",
  "region": "chest | brain | abdomen | cardiac | musculoskeletal | breast | skin | eye | multiple",
  "organization": "Organization Name",
  "license": "MIT | Apache 2.0 | BSD | Proprietary | ..."
}
```

## 🤝 Contributing (PRs Welcome!)

We enthusiastically welcome:

- Adding new medical AI models (especially open-source models!)
- Correcting Elo scores or vote counts
- UI/UX improvements
- Connecting real benchmark data (MedMCQA, PathVQA, SLAKE, etc.)

PR template:

```markdown
**New model**: LLaMA-Med-13B
**Type**: LLM
**Estimated Elo**: 1200
**Organization**: Your Institution
**Task**: qa
**Modality**: multiple
**Region**: multiple
**License**: Apache 2.0
```

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=OuyangXiaotong/leaderboard-demo-medai-arena&type=Date)](https://star-history.com/#OuyangXiaotong/leaderboard-demo-medai-arena&Date)

## 📄 License

MIT © 2026–Present Xiaotong Ouyang

---

**MedAI Arena – Making every medical AI model fairly evaluated!**  
Give it a star if you like it ⭐
