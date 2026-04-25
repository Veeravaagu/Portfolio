import { useEffect, useState } from "react";
type BootScreenProps = {
  onDone: () => void;
};

const lines = [
  "> INITIALIZING VM_PORTFOLIO_OS v2.0.6",
  "> LOADING CORE MODULES............ OK",
  "> CHECKING MEMORY INTEGRITY....... OK",
  "> MOUNTING FILESYSTEM............. OK",
  "> ESTABLISHING IDENTITY........... OK",
  "> SYSTEM READY.",
];

export function BootScreen({ onDone }: BootScreenProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeoutIds: number[] = [];
    let delay = 0;

    lines.forEach((line, index) => {
      delay += index === 0 ? 200 : 320 + Math.random() * 100;

      timeoutIds.push(
        window.setTimeout(() => {
          setVisibleLines((current) => [...current, line]);

          if (index === lines.length - 1) {
            timeoutIds.push(window.setTimeout(() => setDone(true), 600));
            timeoutIds.push(window.setTimeout(onDone, 1200));
          }
        }, delay),
      );
    });

    return () => timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9990] flex items-center justify-center bg-black px-6"
      style={{
        opacity: done ? 0 : 1,
        pointerEvents: done ? "none" : "all",
        transition: "opacity 600ms",
      }}
      aria-label="System boot sequence"
    >
      <div className="w-full max-w-[560px] px-4 sm:px-10">
        <div className="orange-glow mb-8 font-display text-[22px] tracking-[0.05em]">
          VM_PORTFOLIO_OS
        </div>
        {visibleLines.map((line, index) => (
          <div
            key={line}
            className="mb-2 font-mono text-xs tracking-[0.06em]"
            style={{
              animation: "fadeIn 200ms ease-out both",
              color: index === visibleLines.length - 1 ? "#fff" : "rgba(255,255,255,0.5)",
            }}
          >
              {line}
              {index === visibleLines.length - 1 && !done ? (
                <span className="terminal-cursor">_</span>
              ) : null}
          </div>
        ))}
        <div className="mt-5 h-0.5 overflow-hidden rounded-sm bg-[rgba(255,255,255,0.06)]">
          <div className="h-full bg-[rgb(var(--color-accent))] shadow-[0_0_14px_rgb(var(--color-accent)/0.5),0_0_32px_rgb(var(--color-accent)/0.2)] [animation:bootLine_2520ms_linear_both]" />
        </div>
      </div>
    </div>
  );
}
