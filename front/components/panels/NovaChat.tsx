"use client";

import { useState } from "react";

type Msg = { role: "user" | "nova"; text: string };

export default function NovaChat() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "nova", text: "Hi, I'm Nova. Ask me anything about my creator." },
  ]);
  const [input, setInput] = useState("");

  function send() {
    const text = input.trim();
    if (!text) return;
    // TODO: replace the fake reply with a call to your own /api/chat route
    setMessages((m) => [
      ...m,
      { role: "user", text },
      { role: "nova", text: "(Nova isn't connected to an API yet.)" },
    ]);
    setInput("");
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-neutral-800 bg-neutral-900">
      <div className="border-b border-neutral-800 px-4 py-3 text-sm font-semibold">
        Nova
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
              m.role === "user"
                ? "ml-auto bg-blue-600 text-white"
                : "bg-neutral-800 text-neutral-200"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2 border-t border-neutral-800 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask Nova..."
          className="flex-1 rounded-lg bg-neutral-800 px-3 py-2 text-sm outline-none placeholder:text-neutral-500"
        />
        <button
          onClick={send}
          className="rounded-lg bg-blue-600 px-4 text-sm font-semibold hover:bg-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}