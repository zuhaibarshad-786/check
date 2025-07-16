function GoalList({ goals, onToggle, onDelete }) {
  if (goals.length === 0) {
    return <p className="no-goals">You have no goals for today.</p>;
  }

  return (
    <ul className="goal-list">
      {goals.map(goal => (
        <li key={goal.id} className={goal.completed ? "completed" : ""}>
          <label>
            <input
              type="checkbox"
              checked={goal.completed}
              onChange={() => onToggle(goal.id)}
            />
            <span>{goal.text}</span>
          </label>
          <button className="delete-btn" onClick={() => onDelete(goal.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GoalList;
