import { useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";

type MdxPreviewProps = {
  source: string;
  components?: Record<string, ComponentType<Record<string, unknown>>>;
  className?: string;
  style?: React.CSSProperties;
};

export function MdxPreview({ source, components, className, style }: MdxPreviewProps) {
  const [Content, setContent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const compiledSource = useMemo(() => source, [source]);

  useEffect(() => {
    let cancelled = false;

    const compile = async () => {
      try {
        // Dynamic import to keep @mdx-js/mdx optional
        const { evaluate } = await import("@mdx-js/mdx");
        const runtime = await import("react/jsx-runtime");

        setError(null);
        const result = await evaluate(compiledSource, {
          ...runtime,
          useMDXComponents: components ? () => components : undefined,
        });
        if (!cancelled) {
          setContent(() => result.default as ComponentType);
        }
      } catch (err) {
        if (!cancelled) {
          setContent(null);
          setError((err as Error).message);
        }
      }
    };

    compile();

    return () => {
      cancelled = true;
    };
  }, [compiledSource, components]);

  if (error) {
    return (
      <div
        className="p-4 rounded-2xl text-sm"
        style={{
          background: "rgba(224, 123, 103, 0.1)",
          color: "var(--mdx-editor-error, var(--coral, #e07b67))",
          ...style,
        }}
      >
        {error}
      </div>
    );
  }

  if (!Content) {
    return (
      <div
        className="p-4 rounded-2xl text-sm"
        style={{
          background: "var(--mdx-editor-bg-secondary, var(--mist, #eef2f5))",
          color: "var(--mdx-editor-text-muted, var(--slate, #64748b))",
          ...style,
        }}
      >
        Preview will appear here.
      </div>
    );
  }

  return (
    <div className={className || "prose max-w-none"} style={style}>
      <Content />
    </div>
  );
}
