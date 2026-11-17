# DevScroll

**Learn tech skills through short vertical reels** — a TikTok-style feed built only for developer learning (no long posts, no stories clutter).

## Real-world use case

Developers already learn from short clips on Instagram/TikTok, but the signal is noisy. **DevScroll** is a focused feed where every scroll teaches one concrete skill:

- AI agents
- Frontend patterns
- Distributed systems
- Databases
- Career / portfolio tips

Who it’s for: students, junior→mid engineers, and anyone prepping for AI/ML or product engineering interviews who wants **2-minute concept hits** instead of 40-minute videos.

## Features

- Vertical **snap-scroll** reels feed (`scroll-snap` + `IntersectionObserver` autoplay)
- Topic filters (AI Agents, Frontend, Systems, Databases, Career)
- Learning overlays: takeaway, bullets, optional code snippet
- Like / save / follow / mute controls
- Mobile-first phone frame; works on desktop too

## Tech skills practiced

| Skill | Where you see it |
|---|---|
| React + TypeScript | App composition, typed reel model |
| CSS scroll-snap / dvh | Native reels UX |
| Media autoplay rules | Muted video + active-reel observer |
| Product UI polish | Brand, motion, information hierarchy |

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Project layout

```text
src/
  App.tsx
  components/   # TopBar, TopicRail, ReelFeed, ReelCard, SideActions
  data/reels.ts # Sample learning reels
  types.ts
```

## Why this repo

Shows you can clone a **real consumer interaction pattern** (short-video feed) and bend it toward a useful niche: **tech skill learning**. Recruiters can demo it in under a minute — scroll, filter topics, see takeaways.

## License

MIT
