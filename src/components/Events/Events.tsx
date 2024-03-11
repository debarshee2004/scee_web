import {
  faBolt,
  faCircleArrowRight,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Events.css";
import Reveal from "../Reveal/Reveal";

const Events = () => {
  return (
    <>
      <div className="event-body">
        <div className="event-details">
          <Reveal>
            <p className="event-header">
              <FontAwesomeIcon className="header-star" icon={faBolt} />
              <div className="event-header-title">
                <span className="isc">IEI STUDENT'S CHAPTER</span>{" "}
                <span>OF ELECTRICAL ENGINEERING</span>
              </div>
            </p>
          </Reveal>
          <Reveal>
            <h1 className="event-title">
              ELECTRO FORGE
              <span>
                2
                <span className="play">
                  <FontAwesomeIcon icon={faCirclePlay} />
                </span>
                24
                <span className="dot">.</span>
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="event-info">
              A yearly event organized by IEI SCEE AOT about PCB, IOT and
              circuit designs. This focuses on building the basic knowledge of
              an Electrical Engineer so that they can create their own circuits.
            </p>
          </Reveal>
          <div className="event-actions">
            <a href="">
              <button className="event-collaborate">
                Collaborate
                <FontAwesomeIcon
                  className="button-arrow"
                  icon={faCircleArrowRight}
                />
              </button>
            </a>
            <a href="">
              <button className="event-joinus">
                Participate
                <FontAwesomeIcon
                  className="button-arrow-two"
                  icon={faCircleArrowRight}
                />
              </button>
            </a>
          </div>
        </div>
        <div className="event-hero">{/* Hero */}</div>
      </div>
    </>
  );
};

export default Events;
