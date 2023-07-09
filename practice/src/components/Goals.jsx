import React, { useState } from "react";

// GoalForm component
function GoalForm(props) {
  // useState hook to manage form data
  const [formData, setFormData] = React.useState({ goal: "", by: "" });

  // Event handler for input changes
  function changeHandler(e) {
    // Update the form data with the new value
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Event handler for form submission
  function submitHandler(e) {
    e.preventDefault();
    // Call the onAdd prop function with the form data
    props.onAdd(formData);
    // Reset the form data
    setFormData({ goal: "", by: "" });
  }

  return (
    <>
      <h1>My Goals For The Year</h1>
      <form onSubmit={submitHandler}>
        {/* Input field for goal */}
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        {/* Input field for 'by' */}
        <input
          type="text"
          name="by"
          placeholder="by..."
          value={formData.by}
          onChange={changeHandler}
        />
        {/* Submit button */}
        <button type="submit">Submit Goal</button>
      </form>
    </>
  );
}

// ListOfGoals component
function ListOfGoals(props) {
  return (
    <ul>
      {/* Map over the allGoals array and render each goal */}
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal} by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Goals component
const Goals = () => {
  // useState hook to manage the list of goals
  const [allGoals, updateAllGoals] = React.useState([]);

  // Function to add a new goal to the list
  function addGoal(goal) {
    // Append the new goal to the existing array of goals
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div>
      {/* Render the GoalForm component */}
      <GoalForm onAdd={addGoal} />
      {/* Render the ListOfGoals component with the allGoals prop */}
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
};

export default Goals;
