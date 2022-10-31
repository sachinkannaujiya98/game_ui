import React from 'react'
import BgImage from './images/bg.jpg'
const Info = () => {
  return (
  <>
    <div className='my-4 mx-2 md:mx-60'>
      <p className='md:text-3xl md:py-4  md:text-center text-xl text-center py-2'>You are in a good company</p> 
      <p className='md:text-xl md:py-4 text-lg font-light break-all py-2'>Eiusmod proident aliqua commodo consequat consectetur enim dolore magna sit ipsum proident laboris. Laboris exercitation irure duis aute voluptate adipisicing exercitation pariatur do labore sit fugiat. Nisi sint aliqua cupidatat veniam.</p>     
    </div>
    <div className='grid grid-cols-2 gap-2 mx-2 md:grid md:grid-cols-4 md:gap-12 md:mx-96 md:my-8'>
        <div><img src={BgImage} alt="bg " className="rounded-md " /></div>
        <div><img src={BgImage} alt="bg " className="rounded-md " /></div>
        <div><img src={BgImage} alt="bg " className="rounded-md " /></div>
        <div><img src={BgImage} alt="bg " className="rounded-md " /></div>
        <div><img src={BgImage} alt="bg " className="rounded-md " /></div>
        <div><img src={BgImage} alt="bg " className="rounded-md " /></div>
        <div><img src={BgImage} alt="bg " className="rounded-md " /></div>
        <div><img src={BgImage} alt="bg " className="rounded-md " /></div>
    </div>
    </>
  )
}

export default Info