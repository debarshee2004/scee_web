import { faBolt, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Events.css'
import Reveal from '../Reveal/Reveal'
// import Stats from '../Stats/Stats'

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
                        PCB MANIA 2024
                    </h1>
                </Reveal>
                <Reveal>
                    <p className='event-info'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita vel tenetur excepturi velit pariatur dolor
                    </p>
                </Reveal>
                <div className='event-actions'>
                    <button className='event-collaborate'>
                        Collaborate
                        <FontAwesomeIcon className='button-arrow' icon={faCircleArrowRight} />
                    </button>
                    <button className='event-joinus'>
                        Participate
                        <FontAwesomeIcon className='button-arrow-two' icon={faCircleArrowRight} />
                    </button>
                </div>
                {/* <Stats/> */}
            </div>
            <div className='event-hero'>
                {/* Hero Picture */}
            </div>
        </div>
    </>
  )
}

export default Events