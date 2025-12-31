import { useState } from 'react';
import axios from 'axios';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input) return;
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', { messages: [...messages, userMessage] });
      setMessages([...messages, userMessage, { role: 'ai', content: response.data.reply }]);
      setInput('');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <button onClick={() => setOpen(!open)} className="fixed bottom-4 left-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg">💬</button>
      {open && (
        <div className="fixed bottom-20 left-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
                <p className="p-2 my-1 rounded-lg bg-gray-200 inline-block">{msg.content}</p>
              </div>
            ))}
          </div>
          <div className="p-2 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 border rounded px-2" />
            <button onClick={handleSend} className="bg-indigo-600 text-white px-4 rounded">Send</button>
          </div>
        </div>
      )}
    </>
  )
}
