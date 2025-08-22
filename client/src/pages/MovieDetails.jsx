import React, { useEffect, useState } from 'react'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import { useNavigate, useParams } from 'react-router-dom';
import timeFormat from '../lib/timeFormat';
import { Heart,PlayCircleIcon,StarIcon } from 'lucide-react';
import DateSelect from '../components/DateSelect';
import MovieCard from '../components/MovieCard';
const MovieDetails = () => {
  const{id} = useParams();
  const [show,setShow] = useState(null);
  const navigate = useNavigate();
  const getShow = async() => {
    const show = dummyShowsData.find((show) => show._id === id)
    if(show) {setShow ({
      movie : show,
      dateTime: dummyDateTimeData
    })
  }
}

  useEffect(() => {
    getShow();
  },[id]) 
  return show ? (
    <div className='px-6 md:px-12 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-10 max-w-6x1 mx-auto'>
        <img src ={show.movie.poster_path} alt = "" className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'  />

        <div className='relative flex flex-col gap-5'>
          <BlurCircle top = "-100px" left = "-100px"/>
          <p className='text-primary'> English</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance'>{show.movie.title}</h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <StarIcon className ="w-5 h-5 text-primary fill-primary"/>
          {show.movie.vote_average.toFixed(1)} User Rating 
          </div>
        
        <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'> {show.movie.overview} </p>
        <p>{timeFormat(show.movie.runtime)} - {show.movie.genres.map(genre=>genre.name).join(", ")} - {show.movie.release_date.split("-")[0]}</p>

        <div className='flex items-center flex-wrap gap-4 mt-4'>
          
          <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95'> 
            <PlayCircleIcon/> Watch trailer
          </button>
          <a className='px-10 py-3.5 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95' href='#dateSelect'>Buy ticket</a>
          <button>
            <Heart className= {`w-5 h-5`}></Heart>
          </button>
        </div>
        </div>
      </div>
      <p className='pt-8'>Cast</p>
      <div className='Overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='flex items-center gap-4 w-max px-4'>
          {show.movie.casts.slice(0,12).map((cast,index) =>(
            <div key={index} className='flex flex-col items-center text-center gap-2'>
              <img src={cast.profile_path} alt="" className=' h-40 rounded' />
              <p className='text-xs mt-3 font-medium'>{cast.name}</p>
            
            </div>
          ))}
        </div>
      </div>
      <DateSelect dateTime={show.dateTime} id = {id}></DateSelect>
      <p className = "text-lg font-medium mt-20 mb-8">
          You also may like
      </p>
      <div className = "flex flex-wrap max-sm:justify-center gap-8 items-center justify-center">
        {dummyShowsData.slice(0,4).map((movie,index) =>(
            <MovieCard key = {index } movie = {movie}/>
        ))}
      </div>
      <div className='flex justify-center mt-20'>
        <button onClick={() => {navigate('/movies'); scrollTo(0,0)}} className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer '>
          Show More
        </button>
      </div>

    </div>
  ) : (
    <div>
      Loading
    </div>
  )
}

export default MovieDetails