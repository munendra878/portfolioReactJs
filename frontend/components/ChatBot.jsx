import { useState, useEffect } from "react";

const BOT_DATA = {
  name: "Munendra AI 🤖",
  intro:
    "Hi! I'm Munendra's portfolio assistant. Ask me about skills, projects, or contact info.",
  skills: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "Node.js",
    "AI Integration",
  ],
  projects: [
    "Online Examination System (PHP + MySQL)",
    "Painter App (React + Tailwind)",
    "AI Chatbot Integration",
  ],
  contact: {
    email: "mohitbaghel086@gmail.com",
    github: "https://github.com/munendra878",
    linkedin: "https://linkedin.com/in/munendrasinh-radheshyam-baghel-707946361/",
  },
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Welcome message
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        { role: "ai", content: BOT_DATA.intro },
        {
          role: "ai",
          content:
            "Try typing: skills, projects, contact, help",
        },
      ]);
    }
  }, [open]);

  const addMessage = (msg) =>
    setMessages((prev) => [...prev, msg]);

  const getBotReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("skill")) {
      return `💡 Skills:\n${BOT_DATA.skills.join(", ")}`;
    }

    if (msg.includes("project")) {
      return `📂 Projects:\n${BOT_DATA.projects.join("\n")}`;
    }

    if (msg.includes("contact") || msg.includes("email")) {
      return `📧 Email: ${BOT_DATA.contact.email}
🔗 GitHub: ${BOT_DATA.contact.github}
💼 LinkedIn: ${BOT_DATA.contact.linkedin}`;
    }

    if (msg.includes("who") || msg.includes("about")) {
      return "👋 I'm an AI assistant built to help you explore Munendra's portfolio.";
    }

    if (msg.includes("help")) {
      return `🆘 Commands:
• skills
• projects
• contact
• about
• who`;
    }

    return "🤔 I didn't understand that. Type *help* to see options.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    addMessage({ role: "user", content: input });

    setTimeout(() => {
      addMessage({
        role: "ai",
        content: getBotReply(input),
      });
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white
                   p-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-20 right-4 w-80 h-[420px]
                     bg-white rounded-xl shadow-2xl
                     flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-indigo-600 text-white px-4 py-3 font-semibold">
            {BOT_DATA.name}
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`${
                  msg.role === "user"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg whitespace-pre-line
                    ${
                      msg.role === "user"
                        ? "bg-indigo-100"
                        : "bg-gray-200"
                    }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Buttons */}
          <div className="flex gap-2 p-2 border-t text-xs">
            {["Skills", "Projects", "Contact", "Help"].map((btn) => (
              <button
                key={btn}
                onClick={() => handleSend(btn)}
                className="bg-gray-100 px-2 py-1 rounded hover:bg-gray-200"
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 flex gap-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me something..."
              className="flex-1 border rounded px-2 py-1 text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
