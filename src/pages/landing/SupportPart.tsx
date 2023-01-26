import Container from "components/Container";
import React from "react";

import supportImg from "assets/image/service-img.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import fileImg from "assets/image/file.png"

const SupportPart = () => {

  if (window.performance) {
    if (performance.navigation.type == 1) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <div className="landing-support bg-black text-white pt-14 pb-4 px-10" id="services">
      <ScrollAnimation animateOnce={true} animateIn="animate__animated animate__fadeInLeft">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-transparent rounded-3xl overflow-hidden">
            <div className="relative">
              <div className="w-full h-full max-h-[600px] p-8 pl-5 md:pl-8 lg:pl-0">
                <img
                  src={supportImg}
                  style={{ filter: "grayscale(25%) brightness(110%)" }}
                  className="relative w-full h-full object-cover rounded-2xl"
                  alt="aboutImg"
                />
              </div>
            </div>
            <div className="py-5 sm:py-8 pt-0 md:pt-8 pl-5 sm:pl-8 md:pl-0 pr-5 sm:pr-10 md:pr-0">
              {/* <h1 className="text-blue-500 font-bold md:text-4xl text-2xl leading-6">
                Customer Support Without The Wait
              </h1> */}
              <h1 className="font-bold text-3xl leading-6">
                Providing Over The Phone Interpretation 
              </h1>
              <p className="mt-12 mb-5 text-2xl leading-8 mb-5 m-0">
                {/* Are you tired of trying to speak with someone, but having to
                wait on the phone to clear up? We know it can be frustrating,
                that’s why the Avid Prepaid team makes it a point to have your
                best interests in mind when others won’t. Our friendly,
                dedicated, and bilingual customer services team is based in the
                U.S. and available every day to meet your needs. */}
                Neon-Languages  is found is Connecticut , an experienced language service provider with leading interpreters with over 10 years of experience 
              </p>
              <br />
              <p className="text-2xl leading-8 mb-5 m-0">
                Supporting a large network, Neon-L has extended its service to health, legal, businesses and corporations
              </p>
              {/* <ul className="list-disc text-base text-gray-600 leading-8 pl-5 mb-8">
                <li>
                  Our bilingual U.S based customer service is available 7 days a
                  week
                </li>
                <li>
                  Our in-house Call Center is full of specially trained
                  representatives waiting to help and there are numerous self
                  service options on our 24 hour comprehensive automated phone
                  system
                </li>
                <li>
                  Have an enjoyable caller experience with our world class
                  friendly and dedicated Customer Service Team members
                </li>
                <li>
                  Our highly trained live representatives will assist you with
                  anything regarding Avid Prepaid
                </li>
              </ul> */}
              {/* <a href="#faq" className="btn btn-large bg-blue-500 text-white">
                Learn More
              </a> */}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-transparent rounded-3xl overflow-hidden">
            <div className="relative">
              <div className="w-full h-full max-h-[600px] p-8 pl-5 md:pl-8 lg:pl-0">
                <img
                  src={fileImg}
                  style={{ filter: "grayscale(25%) brightness(110%)", width: '300px', height: '300px', marginLeft: '150px' }}
                  className="relative w-full h-full object-cover rounded-2xl file_img"
                  alt="aboutImg"
                />
              </div>
            </div>
            <div className="py-5 sm:py-8 pt-0 md:pt-8 pl-5 sm:pl-8 md:pl-0 pr-5 sm:pr-10 md:pr-0">
              {/* <h1 className="text-blue-500 font-bold md:text-4xl text-2xl leading-6">
                Customer Support Without The Wait
              </h1> */}
              <h1 className="font-bold text-3xl leading-6">
                Translation Services 
              </h1>
              <p className="mt-12 mb-5 text-2xl leading-8 mb-5 m-0">
                We offer document and file translation services, as well as video content and book translations. Our team of experienced linguists is dedicated to providing accurate, high-quality translations that meet your specific needs. With our expertise, you can rest assured that your documents, videos, and books will be accurately translated into the language of your choice.
              </p>
              {/* <ul className="list-disc text-base text-gray-600 leading-8 pl-5 mb-8">
                <li>
                  Our bilingual U.S based customer service is available 7 days a
                  week
                </li>
                <li>
                  Our in-house Call Center is full of specially trained
                  representatives waiting to help and there are numerous self
                  service options on our 24 hour comprehensive automated phone
                  system
                </li>
                <li>
                  Have an enjoyable caller experience with our world class
                  friendly and dedicated Customer Service Team members
                </li>
                <li>
                  Our highly trained live representatives will assist you with
                  anything regarding Avid Prepaid
                </li>
              </ul> */}
              {/* <a href="#faq" className="btn btn-large bg-blue-500 text-white">
                Learn More
              </a> */}
            </div>
          </div>
        </Container>
      </ScrollAnimation>
    </div>
  );
};

export default SupportPart;
