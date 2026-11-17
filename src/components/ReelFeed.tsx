import { useEffect, useRef, useState } from "react";
import type { Reel } from "../types";
import { ReelCard } from "./ReelCard";

interface ReelFeedProps {
  reels: Reel[];
  muted: boolean;
}

export function ReelFeed({ reels, muted }: ReelFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(reels[0]?.id ?? "");

  useEffect(() => {
    setActiveId(reels[0]?.id ?? "");
    containerRef.current?.scrollTo({ top: 0 });
  }, [reels]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-reel-id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement) {
          const id = visible.target.dataset.reelId;
          if (id) setActiveId(id);
        }
      },
      { root, threshold: [0.6, 0.75, 0.9] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [reels]);

  if (reels.length === 0) {
    return (
      <div className="empty-state">
        <p>No reels in this topic yet.</p>
      </div>
    );
  }

  return (
    <div className="feed" ref={containerRef}>
      {reels.map((reel) => (
        <div key={reel.id} className="feed-item" data-reel-id={reel.id}>
          <ReelCard reel={reel} active={reel.id === activeId} muted={muted} />
        </div>
      ))}
    </div>
  );
}
