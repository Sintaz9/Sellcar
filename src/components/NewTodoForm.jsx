const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label className="comments-sending-container">
      <input
        className="comments-input"
        value={value}
        onChange={(e) => updateText(e.target.value)}
        placeholer='Ваш комментарий'
      />
      <button className="comments-button" onClick={handleAction}>Добавить</button>
    </label>
  );
};

export default NewTodoForm;
