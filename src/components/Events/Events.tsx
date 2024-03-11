import { faBolt, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Events.css'
import Reveal from '../Reveal/Reveal'

const Events = () => {
  return (
    <>
        <div className="event-body">
            <div className='event-details'>
                <Reveal>
                    <p className='event-header'>
                        <FontAwesomeIcon className='header-star' icon={faBolt} />
                        IEI STUDENT'S CHAPTER OF ELECTRICAL ENGINEERING
                    </p>
                </Reveal>
                <Reveal>
                    <h1 className='event-title'>
                        ELECTRO FORGE 2024
                    </h1>
                </Reveal>
                <Reveal>
                    <p className='event-info'>
                        A yearly event organized by IEI SCEE AOT about PCB, IOT and circuit designs. This focuses on building the basic knowledge of an Electrical Engineer so that they can create their own circuits.
                    </p>
                </Reveal>
                <div className='event-actions'>
                    <a href="">
                        <button className='event-collaborate'>
                            Collaborate
                            <FontAwesomeIcon className='button-arrow' icon={faCircleArrowRight} />
                        </button>
                    </a>
                    <a href="">
                        <button className='event-joinus'>
                            Participate
                            <FontAwesomeIcon className='button-arrow-two' icon={faCircleArrowRight} />
                        </button>
                    </a>
                </div>
            </div>
            <div className='event-hero'>
                {/* Hero */}
            </div>
        </div>
    </>
  )
}

export default Events