import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Events.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Events = () => {
  return (
    <>
        <div className="event-body">
            <div className='event-details'>
                <p className='event-header'>
                    <img src="../../../public/assets/icons/star.svg" alt="star" className='header-star'/>
                    IEI STUDENT'S CHAPTER OF ELECTRICAL ENGINEERING
                </p>
                <h1 className='event-title'>
                    PCB MANIA 2024
                </h1>
                <p className='event-info'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita vel tenetur excepturi velit pariatur dolor
                </p>
                <div className='event-actions'>
                    <button className='event-collaborate'>
                        Collaborate
                        <FontAwesomeIcon className='button-arrow' icon={faCircleArrowRight} />
                    </button>
                    <button className='event-joinus'>
                        Participate
                        <FontAwesomeIcon className='button-arrow' icon={faCircleArrowRight} />
                    </button>
                </div>
            </div>
            <div className='event-hero'>
                {/* Hero Picture */}
            </div>
        </div>
    </>
  )
}

export default Events