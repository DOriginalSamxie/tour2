import React from 'react'
import Hero from '../../assets/Hero/hero.png'
import { BsArrowRight } from 'react-icons/bs'

const HeroSection = () => {
  return (
    <div className='container mx-auto mt-[159px] bg-[#F3F6FA]'>
      <div className='grid md:grid-cols-2 '>
        <div className='pb-[29px]'>
          <h1 className='md:px-[150px] text-[40px] leading-[49px] font-body font-medium text-[#252525]'>
            Your adventure <br />
            <span className='text-[#097882] font-bold'>in Iceland</span>
          </h1>
          <div>
            <ul className='flex items-center text-[11px] md:px-[150px] '>
              <li className='font-body px-[77px] py-[20px] bg-[#FFFFFF]  font-normal'>
                <a href='tours'>TOURS</a>
              </li>
              <li className='font-body  font-normal px-[69px] py-[20px] bg-[#F9FBFF] text-[#a6a6a6] leading-[11px]'>
                <a href='rent'>RENT</a>
              </li>
              <li className='font-body text-[10px] font-normal px-[63px] py-[20px] bg-[#F9FBFF] text-[#a6a6a6] leading-[11px]'>
                <a href='wifi'>WIFIRENTAL</a>
              </li>
            </ul>
          </div>
          <div className='bg-gradient-to-l from-[#085E71]/100 to-[#099292]/100 h-[475px] max-w-[725px]'>
            Hello
          </div>
        </div>
        <div className='relative'>
          <img src={Hero} alt='' className='h-[561px]' />
          <div className='absolute top-[446px] left-[59px]'>
            <div>
              <h3 className='font-body text-[11px] leading-[13px] font-semibold text-[#fff]'>
                WE RECOMMEND
              </h3>
              <div className='flex items-center gap-[165px] mt-[12px]'>
                <h1 className='text-[30px] leading-[37px] font-body font-medium text-[#fff]'>
                  6 days winter circle
                </h1>
                <div className='flex items-center mt-[6px]'>
                  <span className='mr-[8px] text-[#fff] text-[11px] font-normal cursor-pointer leading-[14px] hover:text-[#096F7C]/75'>
                    VIEW ALL
                  </span>
                  <BsArrowRight className='text-[#fff] hover:text-[#096F7C]/75 w-[18px] h-[18px] cursor-pointer' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
