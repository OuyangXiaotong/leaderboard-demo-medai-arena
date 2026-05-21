# MedAI Arena

A crowdsourced leaderboard for evaluating medical AI models — LLMs, vision, and multimodal systems across imaging modalities and clinical tasks.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit-blue?style=flat-square)](https://ouyangxiaotong.github.io/leaderboard-demo-medai-arena)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Models](https://img.shields.io/badge/Models-15-orange?style=flat-square)](#)

## Top Models

| Rank | Model | Type | Arena Elo | Organization |
|------|-------|------|----------:|--------------|
| 🥇 | Med-Gemini | Multimodal | 1342 | Google DeepMind |
| 🥈 | GPT-4o Medical | Multimodal | 1318 | OpenAI |
| 🥉 | LLaVA-Med | Multimodal | 1287 | Microsoft Research |
| 4 | CheXNet | Vision | 1275 | Stanford AI Lab |
| 5 | nnU-Net | Vision | 1263 | DKFZ |

Scores are derived from anonymous pairwise voting by physicians and AI researchers, following the [LMSYS Chatbot Arena](https://chat.lmsys.org) methodology.

## Features

- Filter by model type, task, imaging modality, and anatomical region
- Sortable columns: Arena Elo, model name, vote count
- Full-text search across model names and organizations
- Static deployment — zero backend, single HTML file + JSON data

## Contributing

To add or update a model, open a [GitHub issue](https://github.com/OuyangXiaotong/leaderboard-demo-medai-arena/issues/new) or submit a PR editing `data/models.json`. Each entry follows this schema:

```json
{
  "name": "Your Model",
  "type": "Vision | LLM | Multimodal",
  "task": "detection | segmentation | classification | reconstruction | registration | synthesis | qa",
  "elo": 1200,
  "ci": "±20",
  "votes": 0,
  "modality": "xray | ct | mri | ultrasound | mammography | pet | fundus | dermoscopy | pathology | endoscopy | multiple",
  "region": "chest | brain | abdomen | cardiac | musculoskeletal | breast | skin | eye | multiple",
  "organization": "Your Institution",
  "license": "MIT"
}
```

## License

MIT © 2026 Xiaotong Ouyang
