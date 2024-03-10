import './Events.css'

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
                    PCB WORKSHOP 2024
                </h1>
                <p className='event-info'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita vel tenetur excepturi velit pariatur dolor
                </p>
                <div className='event-actions'>
                    <button className='event-collaborate'>
                        Collaborate
                    </button>
                    <button className='event-joinus'>
                        Participate
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