import React from 'react'

function About() {
  return (
    <div>
        <div>
        <div className='bg-emerald-500 text-slate-100 text-4xl py-8 text-center'>About Us</div>
        </div>

        <div className='flex items-center justify-center gap-x-10 py-20'>
            <img src='https://i2.wp.com/www.beyondborders254.com/wp-content/uploads/2019/01/Medical-tools.jpg?fit=1023%2C683&ssl=1' className='max-w-xs' alt='' />
            <div className='max-w-xl'>
                <h2 className='text-emerald-500 text-3xl'>About the Medical Clinic</h2>
                <div className='text-slate-500 mt-5'>
                <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
                <p className='mt-3'>
                This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.
                </p>
                </div>
                
            </div>
        </div>

        <div className=' flex items-center justify-center flex-col'>
            <h2 className='text-emerald-500 text-3xl py-10'>Providing you with the best doctors for the best care</h2>
            <div className='flex gap-x-4 py-5'>
                <div className='max-w-xs'>
                    <img src='https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg' alt=''/>
                    <h2 className='text-emerald-500 text-2xl py-1'>Dr. Andrew Khan</h2>
                    <p className='text-slate-500 text-base'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                </div>
                <div className='max-w-xs'>
                    <img src='https://static.vecteezy.com/system/resources/previews/028/287/555/non_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg' alt='' />
                    <h2 className='text-emerald-500 text-2xl py-1'>Dr. Amelia Write</h2>
                    <p className='text-slate-500 text-base'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                </div>
                <div className='max-w-xs'>
                    <img src='https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg' alt='' />
                    <h2 className='text-emerald-500 text-2xl py-1'>Dr. Anthony Robins</h2>
                    <p className='text-slate-500 text-base'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default About