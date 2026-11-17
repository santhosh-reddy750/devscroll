import { useEffect, useRef, useState } from "react";
import type { Reel } from "../types";
import { SideActions } from "./SideActions";

interface ReelCardProps {
  reel: Reel;
  active: boolean;
  muted: boolean;
}

export function ReelCard({ reel, active, muted }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (active) {
      void video.play().catch(() => {
        /* autoplay can fail until user gesture; muted helps */
      });
    } else {
      video.pause();
      video.currentTime = 0;
      setProgress(0);
    }
  }, [active]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.muted = muted;
  }, [muted]);

  return (
    <article className="reel" style={{ ["--accent" as string]: reel.accent }}>
      <video
        ref={videoRef}
        className="reel-video"
        src={reel.videoUrl}
        loop
        playsInline
        muted={muted}
        preload="metadata"
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          if (v.duration) setProgress(v.currentTime / v.duration);
        }}
      />

      <div className="reel-scrim" />

      <div className="reel-content">
        <div className="reel-meta">
          <span className="topic-pill">{reel.topic}</span>
          <h2>{reel.title}</h2>
          <p className="takeaway">{reel.takeaway}</p>

          <ul className="bullets">
            {reel.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          {reel.code ? (
            <pre className="code-block">
              <code>{reel.code}</code>
            </pre>
          ) : null}

          <div className="creator">
            <div className="avatar" aria-hidden>
              {reel.creator.name
                .split(" ")
                .map((p) => p[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div>
              <p className="creator-name">{reel.creator.name}</p>
              <p className="creator-handle">{reel.creator.handle}</p>
            </div>
            <button type="button" className="follow-btn">
              Follow
            </button>
          </div>
        </div>

        <SideActions
          liked={liked}
          saved={saved}
          likes={reel.likes}
          saves={reel.saves}
          onLike={() => setLiked((v) => !v)}
          onSave={() => setSaved((v) => !v)}
        />
      </div>

      <div className="progress-track" aria-hidden>
        <div className="progress-fill" style={{ transform: `scaleX(${progress})` }} />
      </div>
    </article>
  );
}
