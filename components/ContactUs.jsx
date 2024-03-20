'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import styled from 'styled-components';
import toast from 'react-hot-toast';

const ContactUs = () => {
  // const serviceId = process.env.REACT_APP_SERVICE_ID;
  // const templateId = process.env.REACT_APP_TEMPLATE_ID;
  // const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768); // Change 768 to your desired medium screen width
    };

    // Initial check for screen size
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jn9n38w', 'template_w5qvodr', formRef.current, 'MzhNodEVDWF5nmXdj')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        toast.success('Message sent successfully!');
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Something went wrong!');
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto min-h-screen max-w-screen-xl p-4">
      <div className="flex flex-col md:flex-row justify-center items-center mb-6 w-full">
        <div
          className={`text-center md:text-left md:w-1/2 mb-6 md:mb-0 ${
            !isLargeScreen ? 'text-4xl font-bold mb-2' : 'text-6xl  mb-4'
          }`}
        >
          {isLargeScreen ? (
            <>
              <div className="text-6xl font-bold flex gap-4" style={{ paddingRight: '500px' }}>
                <div>
                  Any
                </div>
                <div>
                  doubts?
                </div>
              </div>
              <div className="text-6xl font-bold" style={{ paddingRight: '20px', textAlign: 'left' }}>
                Let us know!
              </div>
              <div className="text-2xl" style={{ textAlign: 'left', paddingTop: '20px' }}>
                We'd love to connect with you.
              </div>
            </>
          ) : (
            <>
              <div className="text-4xl font-bold mb-2">
                Your feedback helps us improve.
              </div>
              <div className="text-lg">
                We'd love to connect with you.
              </div>
            </>
          )}
        </div>

        <form
          className="w-full md:max-w-md mx-auto md:w-2/3 p-4 shadow-md rounded-lg transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 bg-[#fe7923]"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="user_name">
              Enter your name
            </label>
            <input
              className="w-full p-2 border rounded-lg focus:outline-none"
              type="text"
              name="user_name"
              id="user_name"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="user_email">
              Enter your email
            </label>
            <input
              className="w-full p-2 border rounded-lg focus:outline-none"
              type="email"
              name="user_email"
              id="user_email"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 border rounded-lg focus:outline-none"
              name="message"
              id="message"
              rows="4"
            />
          </div>

          <input
            className="w-full px-4 py-2 text-white bg-black rounded-lg cursor-pointer hover:bg-orange-600"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
