"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function ContactBox() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function send() {
    if (!message.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) throw new Error();
      setMessage("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section>
      <h2 className="flex gap-6 text-s text-neutral-400 font-semibold"><Mail/>Mail Me</h2>
      <div className="relative h-[30vh]">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Hi there, lets chat"
          className="mt-4 w-full h-full resize-none rounded-xl border border-neutral-800 bg-black p-4 text-sm outline-none placeholder:text-neutral-500 focus:border-neutral-600"
        />
        <div className="absolute bottom-0 right-6 mt-3 flex items-center gap-4">
          <button
            onClick={send}
            disabled={status === "sending"}
            className="rounded-lg bg-[#ccc] text-black px-6 py-2.5 text-sm font-semibold hover:bg-gray-500 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send to my email"}
          </button>
          {status === "sent" && <span className="text-sm text-green-400">Sent, thank you!</span>}
          {status === "error" && <span className="text-sm text-red-400">Something went wrong. Try again.</span>}
        </div>
      </div>
    </section>
  );
}