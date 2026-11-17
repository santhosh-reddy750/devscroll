interface SideActionsProps {
  liked: boolean;
  saved: boolean;
  likes: number;
  saves: number;
  onLike: () => void;
  onSave: () => void;
}

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return String(n);
}

export function SideActions({
  liked,
  saved,
  likes,
  saves,
  onLike,
  onSave,
}: SideActionsProps) {
  return (
    <div className="side-actions">
      <button
        type="button"
        className={liked ? "action-btn liked" : "action-btn"}
        onClick={onLike}
        aria-pressed={liked}
        aria-label="Like"
      >
        <span className="action-icon">♥</span>
        <span>{formatCount(likes + (liked ? 1 : 0))}</span>
      </button>
      <button
        type="button"
        className={saved ? "action-btn saved" : "action-btn"}
        onClick={onSave}
        aria-pressed={saved}
        aria-label="Save"
      >
        <span className="action-icon">⤓</span>
        <span>{formatCount(saves + (saved ? 1 : 0))}</span>
      </button>
      <button type="button" className="action-btn" aria-label="Share">
        <span className="action-icon">↗</span>
        <span>Share</span>
      </button>
    </div>
  );
}
