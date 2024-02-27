import arrow from "../images/arrow.png";
import pill from "../images/Pill.png";
import pills from "../images/pills.png";
import calendarIcon from "../images/calendar-fill 1.svg";
import during from "../images/during-meal.svg";
import before from "../images/before-meal.svg";
import after from "../images/after-meal.png";
import notification from "../images/notification.png";
import { useState } from "react";

const mealImgs = [
  { id: 1, image: before, pillTime: "before meal" },
  { id: 2, image: during, pillTime: "during meal" },
  { id: 3, image: after, pillTime: "after meal" },
];

export default function AddPlan({ visible, onShowPlan, onAddPill, pillsList }) {
  const [pillName, setPillName] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [currentPillTime, setCurrentPillTime] = useState(null);
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!pillName || currentPillTime === null) return;

    const newPill = {
      id: pillsList.length + 1,
      pillName,
      amount,
      duration,
      pillTime: currentPillTime,
      time,
    };

    onAddPill(newPill);

    onShowPlan();

    setPillName("");
    setAmount("");
    setDuration("");
    setCurrentPillTime(null);
    setTime("");
  }

  function handlePillTime(time) {
    setCurrentPillTime(time);
    if (time === currentPillTime) setCurrentPillTime(null);
  }

  return (
    <section className={`create-plan-stn ${visible === true ? "show-plan" : null}`}>
      <div className="container">
        <button className="back-btn" onClick={onShowPlan}>
          <img src={arrow} alt="Back" />
        </button>

        <h1>Add Plan</h1>

        <form action="" onSubmit={handleSubmit}>
          <fieldset className="pill-name">
            <legend>Pills Name</legend>

            <div>
              <img src={pill} alt="pill img" />
              <input
                type="text"
                value={pillName}
                placeholder="Input the pill name"
                onChange={(e) => {
                  setPillName(e.target.value);
                }}
                required
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Amount & How long?</legend>

            <section className="amount-info">
              <div>
                <img src={pills} alt="pills img" />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
                <span>pills</span>
              </div>

              <div>
                <img src={calendarIcon} alt="day" />
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
                <span>days</span>
              </div>
            </section>
          </fieldset>

          <fieldset>
            <legend>Food & Pills</legend>
            <section className="food-info">
              {mealImgs.map((meal) => (
                <div
                  className={meal.pillTime === currentPillTime ? "selected" : null}
                  key={meal.id}
                  onClick={() => handlePillTime(meal.pillTime)}
                >
                  <img src={meal.image} alt={meal.pillTime} />
                </div>
              ))}
            </section>
          </fieldset>

          <fieldset>
            <legend>Notification</legend>
            <div>
              <img src={notification} alt="bell" />
              <input
                type="time"
                name="time"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                required
              />
            </div>
          </fieldset>

          <input type="submit" value="Done" className="submit" />
        </form>
      </div>
    </section>
  );
}
