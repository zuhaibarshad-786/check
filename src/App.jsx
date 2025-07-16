import { useState, useEffect } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import MotivationalQuote from "./components/MotivationalQuote";
import "./index.css";

function App() {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("goals");
    return saved ? JSON.parse(saved) : [];
  });

  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data.content);
    } catch {
      setQuote("Keep going, you're doing great.");
    }
  };

  const addGoal = (goalText) => {
    const newGoal = {
      id: Date.now(),
      text: goalText,
      completed: false,
    };
    setGoals([...goals, newGoal]);
  };

  const toggleGoal = (id) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };
 
  return (
    <div className="container">
      <h1>Daily Goals Tracker</h1>
      <MotivationalQuote quote={quote} />
      <GoalForm onAddGoal={addGoal} />
      <GoalList
        goals={goals}
        onToggle={toggleGoal}
        onDelete={deleteGoal}
      />
    </div>
);
}

export default App;
