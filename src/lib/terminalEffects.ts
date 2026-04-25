import { createElement, type ReactNode, useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*></?";

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

export function useScramble(
  target: string,
  { delay = 0, duration = 1500 }: { delay?: number; duration?: number } = {},
) {
  const [text, setText] = useState(() =>
    Array.from(target)
      .map((char) => (char === " " || char === "\n" ? char : randomChar()))
      .join(""),
  );
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);

    const timeoutId = window.setTimeout(() => {
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const revealed = Math.floor(progress * target.length);

        setText(
          Array.from(target)
            .map((char, index) => {
              if (char === " " || char === "\n") return char;
              return index < revealed ? char : randomChar();
            })
            .join(""),
        );

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setText(target);
          setDone(true);
        }
      };

      requestAnimationFrame(tick);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [delay, duration, target]);

  return { text, done };
}

export function useTypewriter(
  target: string,
  {
    delay = 0,
    speed = 24,
    active = true,
  }: { delay?: number; speed?: number; active?: boolean } = {},
) {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!active) return;

    indexRef.current = 0;
    setText("");
    setDone(false);

    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        indexRef.current += 1;
        setText(target.slice(0, indexRef.current));

        if (indexRef.current >= target.length) {
          if (intervalId) window.clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [active, delay, speed, target]);

  return { text, done };
}

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

type TypeTextProps = {
  children: string;
  delay?: number;
  speed?: number;
  inView: boolean;
  cursor?: ReactNode;
  className?: string;
};

export function TypeText({
  children,
  delay = 0,
  speed = 18,
  inView,
  cursor = "▌",
  className,
}: TypeTextProps) {
  const { text, done } = useTypewriter(children, { delay, speed, active: inView });

  return createElement(
    "span",
    { className },
    text,
    !done
      ? createElement("span", { className: "terminal-cursor text-[0.8em]" }, cursor)
      : null,
  );
}
