import { useMemo, useState } from "react";
import { ReelFeed } from "./components/ReelFeed";
import { TopBar } from "./components/TopBar";
import { TopicRail } from "./components/TopicRail";
import { reels } from "./data/reels";
import type { Topic } from "./types";

export default function App() {
  const [topic, setTopic] = useState<Topic>("All");
  const [muted, setMuted] = useState(true);

  const filtered = useMemo(
    () => (topic === "All" ? reels : reels.filter((r) => r.topic === topic)),
    [topic],
  );

  return (
    <div className="app-shell">
      <TopBar muted={muted} onToggleMute={() => setMuted((m) => !m)} />
      <TopicRail active={topic} onChange={setTopic} />
      <ReelFeed reels={filtered} muted={muted} />
    </div>
  );
}
