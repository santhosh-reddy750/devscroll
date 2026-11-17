interface TopBarProps {
  muted: boolean;
  onToggleMute: () => void;
}

export function TopBar({ muted, onToggleMute }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark" aria-hidden>
          DS
        </span>
        <div>
          <p className="brand-name">DevScroll</p>
          <p className="brand-tag">Learn tech in short scrolls</p>
        </div>
      </div>
      <button type="button" className="ghost-btn" onClick={onToggleMute}>
        {muted ? "Unmute" : "Mute"}
      </button>
    </header>
  );
}
