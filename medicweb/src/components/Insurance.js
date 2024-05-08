import React from 'react';
import { Link } from 'react-router-dom';


function Insurance() {
  return (
    <div>
      <div>
        <div className='bg-emerald-500 text-slate-100 text-4xl py-8 text-center'>Insurance Plans</div>
      </div>
      <div className='flex justify-center items-center'>
      <div className='py-10 px-10'>
        <h1 className='text-4xl text-emerald-500 text-center py-5'>Health plans which we accept:</h1>
        <div className='flex max-w-24 justify-around items-center gap-x-20 py-5' >
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZWah19bfRzj9RGyuk9nMiDK4f0WeoPBUVzEmnrMCyg&s' alt='' />
          <img src='https://marketplace.canva.com/EAE8fLYOzrA/1/0/1600w/canva-health-care-bO8TgMWVszg.jpg' alt='' />
          <img src='https://images-platform.99static.com//REkyNVoyQhUh8sEfshZYXc85TxE=/233x247:1788x1802/fit-in/500x500/99designs-contests-attachments/71/71968/attachment_71968058' alt='' />
          <img src='https://marketplace.canva.com/EAE8eSD-Zyo/1/0/1600w/canva-blue%2C-white-and-green-medical-care-logo-oz1ox2GedbU.jpg' alt='' />
          <img src='https://cdn.logojoy.com/wp-content/uploads/2018/05/01115235/1283.png' alt='' />
        </div>
        <h2 className='text-xl text-slate-500 py-5'>Not covered by any of these plans? <Link to={'/contact'} className='underline'>Contact us</Link> and we will find the best solution to suit you.  </h2>
      </div>
      </div>
      
    </div>
  )
}

export default Insurance