import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Departments() {
  return (
    <div>
        <div>
        <div className='bg-emerald-500 text-slate-100 text-4xl py-8 text-center'>Departments</div>
        </div>

        <div className=' flex items-center justify-center flex-col'>
            <div className='flex gap-x-4 py-20'>
                <div className='max-w-xs'>
                    <img src='https://www.prevounce.com/hs-fs/hubfs/Website/cardiology/blood-pressure.jpg?width=1700&name=blood-pressure.jpg' alt=''/>
                    <h2 className='text-emerald-500 text-2xl py-1'>Cardiology</h2>
                    <p className='text-slate-500 text-base mb-4'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <Link className='text-purple-500' to={'/cardiology'}> <FontAwesomeIcon icon={faAngleRight} className='text-base' /> Read more</Link>
                </div>
                <div className='max-w-xs'>
                    <img src='https://sttheresashospital.com/assets/img/sth-imgs/advanced-neurology-treatment.jpg' alt='' />
                    <h2 className='text-emerald-500 text-2xl py-1'>Nuerology</h2>
                    <p className='text-slate-500 text-base mb-4'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <Link className='text-purple-500' to={'/neurology'}><FontAwesomeIcon icon={faAngleRight} className='text-base' /> Read more</Link>
                </div>
                <div className='max-w-xs'>
                    <img src='https://tetonops.com/wp-content/uploads/2023/03/What-is-orthopedic-surgery-.png' alt='' />
                    <h2 className='text-emerald-500 text-2xl py-1'>Orthopedics</h2>
                    <p className='text-slate-500 text-base mb-4'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <Link className='text-purple-500' to={'/orthopedics'}><FontAwesomeIcon icon={faAngleRight} className='text-base'/> Read more</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Departments