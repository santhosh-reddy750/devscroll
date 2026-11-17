export type Topic =
  | "All"
  | "AI Agents"
  | "Frontend"
  | "Systems"
  | "Databases"
  | "Career";

export interface Reel {
  id: string;
  title: string;
  takeaway: string;
  topic: Exclude<Topic, "All">;
  creator: {
    handle: string;
    name: string;
  };
  durationSec: number;
  likes: number;
  saves: number;
  videoUrl: string;
  accent: string;
  bullets: string[];
  code?: string;
}
