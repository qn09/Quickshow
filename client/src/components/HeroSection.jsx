import React from 'react'
import { assets } from '../assets/assets'
import { Calendar } from 'lucide-react'
import { CalendarIcon,ClockIcon,ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    
    const navigate = useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url(/backgroundImage.png)] bg-cover bg-center h-screen'>
        <img src={assets.marvelLogo} className='max-h-11 lg:h-11 mt-20' ></img>
        <h1 className='text-5x1 md:text-[50px] md:leading-18 font-semibold max-w-110'>Guardians <br/> Of the Galaxy </h1>
        <div className='flex items-center gap-4 text-gray-300'>
            <span>Action | Adventure | Sci-Fi</span>
            <div className = 'flex items-center gap-1'>
            <CalendarIcon className='w-4.5 h-4.5'></CalendarIcon> 2018
        </div>
        <div className='flex items-center gap-1'>
            <ClockIcon className='w-4.5 h-4.5'/> 2h 8m
        </div>
        </div>
        <p className = "max-w-md text-gray-300"> Peter Quill, a petty thief, accidentally steals a mysterious orb and becomes the target of a powerful villain, Ronan. To save the universe, Quill is forced to team up with an unlikely group of criminals: Gamora, Drax the Destroyer, Rocket Raccoon and Groot. </p>
        <button onClick={() => navigate('/movies')} className = 'flex  justify-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
            Explore Movies
            <ArrowRight className = "w-5 h-5"></ArrowRight>
        </button>
    </div>
  )
}

export default HeroSection