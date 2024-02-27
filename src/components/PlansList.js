import pillImg from "../images/Pill.png";

export default function PlansList({ pillsList }) {
  return (
    <section className="plans-list">
      <h4>Daily Review</h4>

      <div className="lists">
        {pillsList.map((drug) => (
          <DrugItem drug={drug} key={drug.id} />
        ))}
      </div>
    </section>
  );
}

function DrugItem({ drug }) {
  const hour = Number(drug.time.slice(0, 2));

  return (
    <div className="drug-item">
      <div className="img-con">
        <img src={pillImg} alt="pill illustration" />
      </div>

      <div className="details">
        <h3 className="title">{drug.pillName}</h3>

        <p>
          <span>
            {hour <= 12 ? hour : hour - 12}:00
            {hour >= 12 ? " PM" : " AM"} .
          </span>
          <span> Completed</span>
        </p>
      </div>

      <button>&gt;</button>
    </div>
  );
}
