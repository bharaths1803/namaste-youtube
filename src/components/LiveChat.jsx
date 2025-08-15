import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper.js";
import { useEffect, useState } from "react";
import { addMessage } from "../utils/chatSlice.js";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({ name: generateRandomName(), msg: makeRandomMessage(20) })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name: "Bharath", msg: msg }));
    setMsg("");
  };

  return (
    <>
      <div className="p-2 rounded-lg bg-slate-100 border border-black w-full h-[600px] ml-2 overflow-y-scroll flex flex-col-reverse">
        {messages.map((m, idx) => (
          <ChatMessage name={m.name} msg={m.msg} key={idx} />
        ))}
      </div>
      <form
        className="border border-black p-2 ml-2 w-full"
        onSubmit={handleSendMessage}
      >
        <input
          type="text"
          className="w-96 px-2"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          className="px-2 bg-green-600 border mx-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
