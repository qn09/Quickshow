import React, { useEffect, useParams, useState } from 'react'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';

const MovieDetails = () => {
  const{id} = useParams();
  const [show,setShow] = useState(null);

  const getShow = async() => {
    const show = dummyShowsData.find((show) => show._id === id)
    setShow ({
      movie : show,
      dateTime: dummyDateTimeData
    })
  }

  useEffect(() => {
    getShow();
  },[id]) 
  return show ?(
    <div className='px-6 md:px-12 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-10max-w-6x1 mx-auto'>
        <img src ={show.movie.poster_path} alt = "" className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'  />

        <div className='relative flex flex-col gap-3'>
          <BlurCircle top = "-100px" left = "-100px"/>
          <p className='text-primary'> English</p>
        </div>
      </div>
    </div>
  ) : (
    <div>

    </div>
  )
}

export default MovieDetails