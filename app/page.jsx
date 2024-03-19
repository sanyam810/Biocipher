import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

import Com from '../components/Com';
import ContactUs from '../components/ContactUs';

const Page = () => (
  <div className="bg-[#de5731] overflow-hidden">
    {/* <Navbar /> */}
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0"/>
      {/* <Explore /> */}
    </div>
    <div className="relative">
      {/* <GetStarted /> */}
      <div className="gradient-04 z-0"/>
      <WhatsNew />
      <Com />
    </div>
    {/* <World /> */}
     <div className="relative">
    {/* <Insights /> */}
    <div className="gradient-04 z-0"/>
    {/* <Feedback /> */}
    {/* // eslint-disable-next-line */}
    <ContactUs />
    </div> 
    <Footer />
  </div>
);

export default Page;
