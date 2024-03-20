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
        At Devlution, we're not just revolutionizing gaming, we're
        evolutionizing development. We're the platform where the future of game
        development is unlocked, and the gaming space is redefined. Gear up for
        an electrifying fusion of competition, innovation, and camaraderie,
        curated by GDSC Amity University, Noida, and GDSC IINTM. At the heart of
        Devlution lies our BGMI gaming tournament, where players from across the
        digital landscape converge to display their mastery and compete for the
        ultimate prize. It's more than just a competition; it's a showcase of
        skill, strategy, and the sheer thrill of victory. But Devlution isn't
        just about gameplay; it's about the journey to get there. Our workshop
        series brings together industry leaders and visionaries to share their
        insights into the ever-evolving landscape of game development. From
        dissecting winning strategies to exploring the cutting edge of
        development technology, these sessions offer a rare opportunity to learn
        from the best and stay ahead of the curve. And let's not forget the
        interactive mini-games peppered throughout the event. Beyond the main
        stage battles and workshop sessions, these smaller engagements provide
        the perfect opportunity to connect with fellow enthusiasts, forge new
        friendships, and celebrate our shared passion for gaming. Join us this
        April for an unforgettable experience where passion meets innovation,
        and together, let's usher in a new era of gaming excellence at
        Devlution.
      </motion.p>

      <div className="flex flex-row gap-40 mt-32 md:flex hidden">
        <div className="flex flex-row">
          <div>
            <Image src={loc} alt="location" width={100} height={100} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="font-bold text-4xl text-white">Venue</div>
            <div className="text-2xl text-center text-sky-100 ">TBD</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="pr-8">
            <Image src={cal} alt="calendar" width={80} height={80} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="font-bold text-4xl text-white">Date</div>
            <div className="text-2xl text-center text-sky-100 ">TBD</div>
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
            <div className="text-2xl text-center text-sky-100 ">TBD</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="pr-8">
            <Image src={cal} alt="calendar" width={80} height={80} />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="font-bold text-4xl text-white">Date</div>
            <div className="text-2xl text-center text-sky-100 ">TBD</div>
          </div>
        </div>
      </div>

      {/* <a href="/"> */}
      <div className="bg-[#f59e1e] rounded-xl  w-full max-w-md h-auto sm:h-24 mt-10 px-5 shadow-md transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
  <div className="text-4xl sm:text-6xl text-white font-bold py-4 text-center">
    Coming Soon
  </div>
</div>
      {/* </a> */}
    </motion.div>
  </section>
);

export default About;
