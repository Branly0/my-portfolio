"use client";

import { useEffect, useRef, useState } from "react";
import { Bot } from "lucide-react";

type Msg = { role: "user" | "nova"; text: string };
type Status = "checking" | "online" | "offline";

async function ping(): Promise<boolean> {
  try {
    const res = await fetch("/api/chat", { method: "GET", cache: "no-store" });
    return res.ok;
  } catch {
    return false;
  }
}

export default function NovaChat() {
  const [status, setStatus] = useState<Status>("checking");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "nova", text: "Hi, I'm Nova. Ask me anything about my creator." },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  // Check the connection once when the panel loads
  useEffect(() => {
    ping().then((ok) => setStatus(ok ? "online" : "offline"));
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function retry() {
    setStatus("checking");
    const ok = await ping();
    setStatus(ok ? "online" : "offline");
  }

  async function send() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json(); // expected shape: { reply: string }
      setMessages((m) => [...m, { role: "nova", text: data.reply }]);
    } catch {
      setStatus("offline");
    }
  }

  const shell =
    "flex h-full flex-col overflow-hidden rounded-xl border border-neutral-700/50 bg-neutral-900/50 backdrop-blur";

  // OFFLINE / CHECKING VIEW
  if (status !== "online") {
    return (
      <div className={`${shell} items-center justify-center p-6 text-center`}>
        {/* Icon space: replace the <Bot /> with <Image src="/images/nova.png" ... /> later */}
        <div className="flex size-16 items-center justify-center rounded-full bg-white/10">
          <Bot className="size-8 text-neutral-400" />
        </div>

        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-neutral-200">
          <span className="size-2 rounded-full bg-neutral-500" />
          Nova is offline for now
        </div>

        <p className="mt-2 max-w-xs text-sm text-neutral-400">
          This feature is under maintenance. Please check back soon.
        </p>

        <button
          onClick={retry}
          disabled={status === "checking"}
          className="mt-5 rounded-lg border border-neutral-600 px-5 py-2 text-sm font-semibold text-neutral-200 transition hover:bg-white/10 disabled:opacity-50"
        >
          {status === "checking" ? "Checking..." : "Try again"}
        </button>
      </div>
    );
  }

  // ONLINE VIEW
  return (
    <div className={shell}>
      <div className="border-b border-neutral-700/50 px-4 py-3 text-sm font-semibold">
        Nova
      </div>

      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-3 lg:p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] break-words rounded-lg px-3 py-2 text-sm ${
              m.role === "user"
                ? "ml-auto bg-blue-600 text-white"
                : "bg-white/10 text-neutral-200"
            }`}
          >
            {m.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="flex gap-2 border-t border-neutral-700/50 p-2 lg:p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask Nova..."
          className="min-w-0 flex-1 rounded-lg bg-white/10 px-3 py-2 text-base outline-none placeholder:text-neutral-500 lg:text-sm"
        />
        <button
          onClick={send}
          className="shrink-0 rounded-lg bg-blue-600 px-4 text-sm font-semibold hover:bg-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}