import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <main>
      <section className="quiz-small quiz">
        <form className="setup-form">
          <h2>setup quiz</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
              className="form-input"
            />
          </div>
          {/* category */}
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="books">books</option>
              <option value="music">music</option>
              <option value="geography">geography</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
              <option value="computers">computers</option>
              <option value="animals">animals</option>
              <option value="nature">nature</option>
              <option value="art">art</option>
              <option value="mythology">mythology</option>
              <option value="anime">anime</option>
              <option value="cartoons">cartoons</option>
              <option value="television">television</option>
              <option value="celebrities">celebrities</option>
              <option value="vehicles">vehicles</option>
            </select>
          </div>
          {/* dificulty */}
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && <p className="error">current options unavailable</p>}
          <button className="submit-btn" type="submit" onClick={handleSubmit}>
            let's go
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
