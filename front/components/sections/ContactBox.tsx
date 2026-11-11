"use client";

import { useState } from "react";

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
      <h2 className="text-xl font-semibold">Send me a message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        placeholder="Write your message..."
        className="mt-4 w-full resize-none rounded-xl border border-neutral-800 bg-neutral-900 p-4 text-sm outline-none placeholder:text-neutral-500 focus:border-blue-600"
      />
      <div className="mt-3 flex items-center gap-4">
        <button
          onClick={send}
          disabled={status === "sending"}
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold hover:bg-blue-500 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send to my email"}
        </button>
        {status === "sent" && <span className="text-sm text-green-400">Sent, thank you!</span>}
        {status === "error" && <span className="text-sm text-red-400">Something went wrong. Try again.</span>}
      </div>
    </section>
  );
}