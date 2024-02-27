import flamengo from "../images/flamengo.png";

export default function Hero() {
  return (
    <main className="hero">
      <p className="greeting">
        <strong>Hello, </strong> Kathryn
      </p>

      <div className="board">
        <div className="left">
          <div>
            <h5>Your plan for today</h5>
            <p>1 of 4 completed</p>
          </div>

          <button>Show More</button>
        </div>

        <div className="right">
          <div className="right-con">
            <img src={flamengo} alt="body builder man" />
          </div>
        </div>
      </div>
    </main>
  );
}
