import dashboardIcon from "../images/dashboard-fill 1.svg";
import calendarIcon from "../images/calendar-fill 1.svg";
import plusIcon from "../images/plus.png";
import messagesIcon from "../images/message-3-fill 1.svg";
import userIcon from "../images/user-4-fill 1.svg";

const imagesArr = [
  { id: 1, image: dashboardIcon, alt: "dashboard", icon: true },
  { id: 2, image: calendarIcon, alt: "calendar", icon: true },
  { id: 3, image: plusIcon, alt: "add item", icon: false },
  { id: 4, image: messagesIcon, alt: "messages", icon: true },
  { id: 5, image: userIcon, alt: "user", icon: true },
];

export default function NavBar({ onShowPlan }) {
  return (
    <nav className="nav">
      <div className="container">
        {imagesArr.map((icon) => (
          <div
            className={icon.icon ? "icon" : "plus"}
            key={icon.id}
            onClick={icon.id === 3 ? onShowPlan : null}
          >
            <img src={icon.image} alt={icon.alt} />
          </div>
        ))}
      </div>
    </nav>
  );
}
