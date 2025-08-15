const ChatMessage = ({ name, msg }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        alt="User Icon"
        className="h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{msg}</span>
    </div>
  );
};

export default ChatMessage;
