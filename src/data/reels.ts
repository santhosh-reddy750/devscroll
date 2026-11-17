import type { Reel } from "../types";

const sampleVideos = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
];

export const TOPICS = [
  "All",
  "AI Agents",
  "Frontend",
  "Systems",
  "Databases",
  "Career",
] as const;

export const reels: Reel[] = [
  {
    id: "r1",
    title: "Agent loop in 20 seconds",
    takeaway: "Plan → Act (tools) → Observe → Repeat until done.",
    topic: "AI Agents",
    creator: { handle: "@agentops", name: "Maya Chen" },
    durationSec: 24,
    likes: 12840,
    saves: 3102,
    videoUrl: sampleVideos[0],
    accent: "#3DFFB5",
    bullets: [
      "Give the agent a clear goal + stop condition",
      "Tools beat giant prompts for real work",
      "Log every step for debug + eval",
    ],
    code: `while (!done) {
  const step = await plan(goal, memory);
  const obs = await tools.run(step);
  memory.add(obs);
}`,
  },
  {
    id: "r2",
    title: "CSS scroll-snap = TikTok feed",
    takeaway: "One full-viewport section + scroll-snap-type: y mandatory.",
    topic: "Frontend",
    creator: { handle: "@pixelstack", name: "Jordan Blake" },
    durationSec: 18,
    likes: 9021,
    saves: 2210,
    videoUrl: sampleVideos[1],
    accent: "#5B8CFF",
    bullets: [
      "height: 100dvh on each reel",
      "IntersectionObserver for autoplay",
      "Keep controls outside the video layer",
    ],
    code: `.feed {
  height: 100dvh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}`,
  },
  {
    id: "r3",
    title: "Why queues beat cron for jobs",
    takeaway: "Retries, backoff, and DLQs save you at 3am.",
    topic: "Systems",
    creator: { handle: "@netsplit", name: "Asha Reddy" },
    durationSec: 22,
    likes: 15402,
    saves: 4401,
    videoUrl: sampleVideos[2],
    accent: "#FFB020",
    bullets: [
      "Idempotent workers prevent double charges",
      "Visibility timeout > processing time",
      "Dead-letter queue = your safety net",
    ],
  },
  {
    id: "r4",
    title: "Index that actually helps",
    takeaway: "Index the columns in your WHERE + ORDER BY together.",
    topic: "Databases",
    creator: { handle: "@querycraft", name: "Leo Park" },
    durationSec: 20,
    likes: 11002,
    saves: 3890,
    videoUrl: sampleVideos[3],
    accent: "#FF6B6B",
    bullets: [
      "Composite indexes are ordered left-to-right",
      "SELECT * often kills index-only scans",
      "EXPLAIN ANALYZE before guessing",
    ],
    code: `-- good for: WHERE user_id=? ORDER BY created_at
CREATE INDEX ON events (user_id, created_at DESC);`,
  },
  {
    id: "r5",
    title: "RAG without the hype",
    takeaway: "Retrieval quality > model size for company docs.",
    topic: "AI Agents",
    creator: { handle: "@agentops", name: "Maya Chen" },
    durationSec: 26,
    likes: 18770,
    saves: 5204,
    videoUrl: sampleVideos[4],
    accent: "#3DFFB5",
    bullets: [
      "Chunk by meaning, not fixed 500 tokens blindly",
      "Always cite sources in the answer",
      "Eval faithfulness on real questions",
    ],
  },
  {
    id: "r6",
    title: "Ship a portfolio recruiters open",
    takeaway: "One real problem per repo beats 20 toy demos.",
    topic: "Career",
    creator: { handle: "@hirepath", name: "Sam Ortiz" },
    durationSec: 19,
    likes: 22110,
    saves: 8012,
    videoUrl: sampleVideos[5],
    accent: "#FFB020",
    bullets: [
      "README: problem → who hurts → what you ship",
      "2-minute demo path in the first screen",
      "Show decisions, not just frameworks",
    ],
  },
  {
    id: "r7",
    title: "Optimistic UI without lying",
    takeaway: "Update instantly, roll back if the server says no.",
    topic: "Frontend",
    creator: { handle: "@pixelstack", name: "Jordan Blake" },
    durationSec: 17,
    likes: 7640,
    saves: 1988,
    videoUrl: sampleVideos[0],
    accent: "#5B8CFF",
    bullets: [
      "Keep a pending + confirmed state",
      "Toast failures with undo when possible",
      "Never hide network truth forever",
    ],
  },
  {
    id: "r8",
    title: "CAP in plain English",
    takeaway: "During a partition you pick consistency or availability.",
    topic: "Systems",
    creator: { handle: "@netsplit", name: "Asha Reddy" },
    durationSec: 23,
    likes: 13220,
    saves: 4555,
    videoUrl: sampleVideos[1],
    accent: "#FFB020",
    bullets: [
      "Banks lean consistency",
      "Social feeds lean availability",
      "Most apps are AP with eventual consistency",
    ],
  },
];
