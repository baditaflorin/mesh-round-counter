import { useSharedRound } from "@baditaflorin/mesh-common";
import type { MeshConfig, YRoom } from "@baditaflorin/mesh-common";

export function Feature({ room, config }: { room: YRoom | null; config: MeshConfig }) {
  const shared = useSharedRound(room);
  const started = shared.round.startedAt
    ? new Date(shared.round.startedAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Not started yet";

  return (
    <main className="feature-placeholder">
      <p className="eyebrow">Shared pace</p>
      <h1>{config.appName}</h1>
      <p>{config.description}</p>
      <output className="round-number" aria-live="polite">
        <span>Round</span> {shared.round.number}
      </output>
      <p className="feature-status">Last advanced: {started}</p>
      <div className="round-actions">
        <button type="button" onClick={() => shared.next()}>
          Next round
        </button>
        <button type="button" className="secondary" onClick={() => shared.reset()}>
          Reset rounds
        </button>
      </div>
    </main>
  );
}
