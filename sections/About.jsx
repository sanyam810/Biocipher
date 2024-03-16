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
    <div className="gradient-03 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col text-white`}
    >
      <TypingText title="ABOUT DEVLUTION" textStyles="text-center " />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-white text-[20px] text-justify  pt-4"
      >
        Welcome to DEVLUTION, organized by Google Developer Student Clubs (GDSC) Amity University, Noida and IINTM. Join us for an exciting event showcasing the latest in gaming and game development!
        
        DEVLUTION kicks off with a thrilling Nationwide BGMI Contest featuring the popular game Battlegrounds Mobile India (BGMI). Following the competition, attendees will have the opportunity to participate in a session on game development, where they can meet and interact with game developers and famous gamers.
        
        Don't miss this opportunity to connect with gaming enthusiasts, developers, students, and industry professionals. Stay tuned for updates on registration and sponsorship opportunities!


      </motion.p>

      <div className="flex flex-row gap-40 mt-32 md:flex hidden">
        <div className="flex flex-row">
          <div>
            <Image src={loc} alt="location" width={100} height={100} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="font-bold text-4xl text-white">Venue</div>
            <div className="text-2xl text-center text-sky-100 ">
              TBD
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="pr-8">
            <Image src={cal} alt="calendar" width={80} height={80} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="font-bold text-4xl text-white">Date</div>
            <div className="text-2xl text-center text-sky-100 ">
              TBD
            </div>
          </div>
        </div>
      </div>

      <div className="flex  gap-28 mt-32 md:hidden flex-col">
        <div className="flex flex-row">
          <div>
            <Image src={loc} alt="location" width={100} height={100} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="font-bold text-4xl text-white">Venue</div>
            <div className="text-2xl text-center text-sky-100 ">
             TBD
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="pr-8">
            <Image src={cal} alt="calendar" width={80} height={80} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="font-bold text-4xl text-white">Date</div>
            <div className="text-2xl text-center text-sky-100 ">
              TBD
            </div>
          </div>
        </div>
      </div>

      <a href="">
        <div className="bg-[#f59e1e] rounded-xl w-72 h-24 mt-10">
          <div className="text-6xl text-white font-bold ml-6 mt-6 pt-4">
            Register
          </div>
        </div>
      </a>
    </motion.div>
  </section>
);

export default About;
