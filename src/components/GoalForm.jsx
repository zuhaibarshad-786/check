import { useRef } from "react";

function GoalForm({ onAddGoal }) {
  const inputRef = useRef();
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (value) {
      onAddGoal(value);
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="goal-form">
      <input
        type="text"
        placeholder="Add a new goal"
        ref={inputRef}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default GoalForm;
