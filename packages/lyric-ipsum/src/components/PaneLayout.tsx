import React from "react";

export interface Pane {
  id: string;
  title: string;
  priority: number;
  minWidth: number;
  component: React.ReactNode;
  onHide?: () => void;
}

interface PaneLayoutProps {
  panes: Pane[];
}

export function PaneLayout({ panes }: PaneLayoutProps) {
  const sortedPanes = [...panes].sort((a, b) => a.priority - b.priority);
  const totalPanes = sortedPanes.length;
  if (totalPanes === 0) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-full">
      {sortedPanes.map((pane) => (
        <div
          key={pane.id}
          className={`relative flex-1 overflow-hidden ${
            totalPanes === 1 ? "w-full" : totalPanes === 2 ? "lg:basis-1/2" : "lg:basis-1/3"
          }`}
          style={{ minWidth: totalPanes > 1 ? `${pane.minWidth}px` : undefined }}
        >
          {pane.onHide && (
            <button
              onClick={pane.onHide}
              className="absolute top-2 right-2 z-10 text-white/40 hover:text-white/80 transition-colors p-1 rounded bg-black/20 hover:bg-black/40"
              title={`Hide ${pane.title}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <div className="h-full">{pane.component}</div>
        </div>
      ))}
    </div>
  );
}
