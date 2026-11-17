import { TOPICS } from "../data/reels";
import type { Topic } from "../types";

interface TopicRailProps {
  active: Topic;
  onChange: (topic: Topic) => void;
}

export function TopicRail({ active, onChange }: TopicRailProps) {
  return (
    <nav className="topic-rail" aria-label="Topics">
      {TOPICS.map((topic) => (
        <button
          key={topic}
          type="button"
          className={topic === active ? "topic-chip active" : "topic-chip"}
          onClick={() => onChange(topic)}
        >
          {topic}
        </button>
      ))}
    </nav>
  );
}
