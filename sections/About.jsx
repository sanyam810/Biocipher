'use client';

import { motion } from 'framer-motion';
import {TypingText} from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import loc from "../public/location.gif";
import cal from "../public/calendar.gif";
import Image from 'next/image';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-03 z-0"/>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0.25}}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      > 
        <TypingText title="About Biocipher" textStyles="text-center"/>

        <motion.p
          variants={fadeIn('up','tween',0.2,1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white pt-4"
        >
          In this 30-hour marathon, budding biotechnologists and bioinformaticians will collaborate to tackle real-world challenges.
          This Hackathon is an occasion to engage young, talented minds in addressing predefined themes within the field.
          It serves as a platform for participants to concentrate their skills on solving specific challenges.
        </motion.p>

       

        <div className='flex flex-row gap-40 mt-32 md:flex hidden'> 
          <div className='flex flex-row'>
            <div>
              <Image src={loc} alt="location" width={100} height={100} />
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='font-bold text-4xl text-white'>
                  Venue
                </div>
                <div className='text-2xl text-center text-sky-100 '>
                   Amity University Noida<br></br>J3 Block
                </div>
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='pr-8'>
              <Image src={cal} alt="calendar" width={80} height={80} />
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='font-bold text-4xl text-white'>
                  Date
                </div>
                <div className='text-2xl text-center text-sky-100 '>
                   29th Feb - 1st March 2024 <br></br> 30hr Hackathon
                </div>
            </div>
          </div>  

          
        </div>

        <div className='flex  gap-28 mt-32 md:hidden flex-col'> 
          <div className='flex flex-row'>
            <div>
              <Image src={loc} alt="location" width={100} height={100} />
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='font-bold text-4xl text-white'>
                  Venue
                </div>
                <div className='text-2xl text-center text-sky-100 '>
                   Amity University Noida<br></br>J3 Block
                </div>
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='pr-8'>
              <Image src={cal} alt="calendar" width={80} height={80} />
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='font-bold text-4xl text-white'>
                  Date
                </div>
                <div className='text-2xl text-center text-sky-100 '>
                   29th Feb - 1st March 2024 <br></br> 30hr Hackathon
                </div>
            </div>
          </div>  

          
        </div>

        
        <a href="https://amity.edu/nspg/ayf2024/">
          <div className='bg-[#3559E0] rounded-xl w-72 h-24 mt-10'>
            <div className='text-6xl text-white font-bold ml-6 mt-6 pt-4'>
              Register
            </div>
          </div>
        </a>

        

      </motion.div>
  </section>
);

export default About;
