import React from 'react'
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';


const Home = () => {
  document.title = "Akshat Sinha";
  return (
   <>
     <Sidenav/>
    <div className='w-[80%] h-full  '>
      <Topnav/>
    </div>

   </>
  )
}

export default Home
