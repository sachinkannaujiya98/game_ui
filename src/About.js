import React from 'react'
import BgImage from './images/bg.jpg'

const About = () => {
  return (
    <div className='md:grid md:grid-cols-2 mnd:gap-9 items-center'>
        <div className='md:p-4 p-2'>
        <p className='md:py-4 md:text-3xl md:font-semibold text-xl '>Quis amet non reprehenderit do eu.</p>
        <p className='md:text-2xl text-lg font-light break-all '>Exercitation esse do laboris veniam minim. Fugiat voluptate ullamco duis pariatur do ut. Magna proident esse cillum non dolore commodo eu ullamco voluptate enim do eu. Cillum ipsum aute sit id proident tempor exercitation Lorem consectetur mollit reprehenderit eu.</p>
        </div>
        <img src={BgImage} alt="bg-image " className=" md:p-4 p-2" />

    </div>
  )
}

export default About