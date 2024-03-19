import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Events.css";
import { faBolt, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Events = () => {
  return (
    <div className="event-background">
      <div className="event-body">
        <p className="chapter-name">
          <FontAwesomeIcon className="header-star" icon={faBolt} />
          <span>IEI STUDENT'S CHAPTER </span>
          <span>ELECTRICAL ENGINEERING</span>
        </p>
        <h1 className="title">
          ELECTRO <br />
          FORGE 2024
        </h1>
        <p className="description">
          <span>
            A yearly event organized by IEI SCEE AOT about PCB, IOT and circuit
          </span>
          <span>
            designs. This focuses on building the basic knowledge of an
            Electrical
          </span>
          <span>Engineer so that they can create their own circuits.</span>
        </p>
        <button className="registration">
          Register
          <FontAwesomeIcon className="button-arrow" icon={faCircleArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Events;
