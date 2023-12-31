import React from 'react';
import { Chrono } from 'react-chrono';
import { timelineWrapper, timelineBox, timelineTitle } from './styles'; // Adjust the path accordingly

export default function Timeline() {
  const items = [
    {
      timelineContent: (
        <div className="relative overflow-visible">
          <div className="flex items-start">
            {/* Content */}
            <div className="flex-grow">
              <p className="text-2xl text-white font-bold mb-2">
                Virtual Kick-off Day
              </p>
              <p className="text-xs mb-3 text-white">
                Join us on the Virtual Kick-off Day where we will release the 4
                Hackathon Problem Statements for the Summit!
              </p>
              <a
                href="https://www.eventbrite.com/e/nus-fintech-summit-virtual-kick-off-day-tickets-773549416127?aff=oddtdtcreator"
                className="py-1 rounded-lg px-2 bg-blue-900 border-turquoise text-white text-xs border-solid border-2 border-emerald-300"
              >
                Find out more
              </a>
            </div>

            {/* Curved white box containing the date */}
            <button className="rounded-lg px-8 py-6 my-1 mx-1 text-2xl text-black bg-white border-solid border-2 border-emerald-300 font-bold">
              20 Dec
            </button>
          </div>
        </div>
      ),
    },
    {
      timelineContent: (
        <div className="relative overflow-visible">
          <div className="flex items-start">
            {/* Curved white box containing the date */}
            <button className="rounded-lg px-8 py-6 my-1 mx-1 text-xl text-black bg-white border-solid border-2 border-emerald-300 font-bold">
              3 JAN
            </button>
            {/* Content */}
            <div className="flex-grow">
              <p className=" left-0 top-0 mb-2 mx-2 text-2xl text-white font-bold">
                Ideation Submission Deadline
              </p>
              <p className="left-0 text-xs mb-3 mx-2 text-white">
                Join us on the Virtual Kick-off Day where we will release the 4
                Hackathon Problem Statements for the Summit!
              </p>
              <a
                href="https://nfshackathonideation.devpost.com/"
                className="left-0 top-0 py-1 rounded-lg mx-2 px-2 bg-blue-900 border-turquoise text-white text-xs border-solid border-2 border-emerald-300"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      timelineContent: (
        <div className="relative overflow-visible">
          <div className="flex items-start">
            {/* Content */}
            <div className="flex-grow">
              <p className=" mb-2 text-2xl mx-0 text-white font-bold">
                Results Release
              </p>
              <p className="text-xs mb-3 text-white">
                Results Release for ideation stage.
              </p>
              <a className="py-1 rounded-lg mx-0 px-2 bg-blue-900 border-turquoise text-white text-xs border-solid border-2 border-emerald-300">
                Check your email
              </a>
            </div>

            {/* Curved white box containing the date */}
            <button className="rounded-lg px-8 py-6 my-1 mx-3 text-2xl text-black bg-white border-solid border-2 border-emerald-300 font-bold">
              3<br />
              JAN
            </button>
          </div>
        </div>
      ),
    },
    {
      timelineContent: (
        <div className="relative overflow-visible">
          <div className="flex items-start">
            {/* Curved white box containing the date */}
            <button className="rounded-lg px-8 py-6 my-1 mx-1 text-xl text-black bg-white border-solid border-2 border-emerald-300 font-bold">
              5 JAN
            </button>
            {/* Content */}
            <div className="flex-grow">
              <p className=" left-0 top-0 mb-2 mx-2 text-2xl text-white font-bold">
                Opening Ceremony
              </p>
              <p className="left-0 text-xs mb-3 mx-2 text-white">
                An immersive experience designed for participants to delve into
                the intricacies of our four distinct hackathon tracks and the
                fintech scene.
              </p>
              <a
                href="https://www.eventbrite.com/e/nus-fintech-summit-2024-opening-day-tickets-773838691357?aff=erelexpmlt"
                className="left-0 top-0 mx-2 py-1 rounded-lg px-2 bg-blue-900 border-turquoise text-white text-xs border-solid border-2 border-emerald-300"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      timelineContent: (
        <div className="relative overflow-visible">
          <div className="flex items-start">
            {/* Content */}
            <div className="flex-grow">
              <p className=" left-0 top-0 mb-2 text-2xl text-white font-bold">
                Prototype Submission Deadline
              </p>
              <p className="left-0 text-xs mb-3 text-white">
                Show off your creative prototypes!
              </p>
            </div>

            {/* Curved white box containing the date */}
            <button className="rounded-lg px-8 py-6 my-1 mx-2 text-2xl text-black bg-white border-solid border-2 border-emerald-300 font-bold">
              9 JAN
            </button>
          </div>
        </div>
      ),
    },
    {
      timelineContent: (
        <div className="relative overflow-visible">
          <div className="flex items-start">
            {/* Curved white box containing the date */}
            <button className="rounded-lg px-10 py-5 my-1 mx-1 text-xl text-black bg-white border-solid border-2 border-emerald-300 font-bold">
              10-11
              <br />
              JAN
            </button>
            {/* Content */}
            <div className="flex-grow">
              <p className="mb-2 mx-2 text-2xl text-white font-bold">
                Workshops
              </p>
              <p className="text-xs mx-2 mb-3 text-white">
                Conducted by industry leaders, tech innovators, and financial
                experts aimed at providing students with insights into the
                ever-evolving realm of Fintech.
              </p>
              <a
                href="https://nusfintechsummit.com/workshops"
                className="mx-2 py-1 rounded-lg px-2 bg-blue-900 border-turquoise text-white text-xs border-solid border-2 border-emerald-300"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      timelineContent: (
        <div className="relative overflow-visible">
          <div className="flex items-start">
            {/* Content */}
            <div className="flex-grow">
              <p className=" mb-2 text-2xl mx-0 text-white font-bold">
                Results Release
              </p>
              <p className="text-xs mb-3 text-white">
                Results Release for prototyping stage.
              </p>
              <a className="py-1 rounded-lg mx-0 px-2 bg-blue-900 border-turquoise text-white text-xs border-solid border-2 border-emerald-300">
                Check your email
              </a>
            </div>

            {/* Curved white box containing the date */}
            <button className="rounded-lg px-9 py-8 my-1 mx-3 text-2xl text-black bg-white border-solid border-2 border-emerald-300 font-bold">
              11
              <br />
              JAN
            </button>
          </div>
        </div>
      ),
    },
    {
      timelineContent: (
        <div className="relative overflow-visible">
          <div className="flex items-start">
            {/* Curved white box containing the date */}
            <button className="rounded-lg px-10 py-4 my-1 mx-1 text-xl text-black bg-white border-solid border-2 border-emerald-300 font-bold">
              17-18
              <br />
              JAN
            </button>
            {/* Content */}
            <div className="flex-grow">
              <p className=" left-0 top-0 mx-2 mb-2 text-2xl text-white font-bold">
                Hackerhouse
              </p>
              <p className="left-0 text-xs mx-2 mb-3 text-white">
                Consult our experienced judges and code together with other
                hackers!
              </p>
              <a className="left-0 top-0 mx-2 py-1 rounded-lg px-2 bg-blue-900 border-turquoise text-white text-xs border-solid border-2 border-emerald-300">
                Check your email
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      timelineContent: (
        <div className="relative overflow-visible">
          <div className="flex items-start">
            {/* Curved white box containing the date */}
            <button className="rounded-lg px-6 py-6 my-1 mx-1 text-xl text-black bg-white border-solid border-2 border-emerald-300 font-bold">
              18
              <br />
              JAN
            </button>
            {/* Content */}
            <div className="flex-grow">
              <p className=" left-0 top-0 mx-2 mb-2 text-2xl text-white font-bold">
                Finalist Submission Deadline
              </p>
              <p className="left-0 text-xs mx-2 mb-3 text-white">
                Submit your final product!
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      timelineContent: (
        <div className="relative overflow-visible">
          <div className="flex items-start">
            {/* Curved white box containing the date */}
            <button className="rounded-lg px-8 py-6 my-1 mx-1 text-xl text-black bg-white border-solid border-2 border-emerald-300 font-bold">
              19
              <br />
              JAN
            </button>
            {/* Content */}
            <div className="flex-grow">
              <p className=" left-0 top-0 mb-2 mx-2 text-2xl text-white font-bold">
                Demo Day & Career Fair
              </p>
              <p className="left-0 text-xs mb-3 mx-2 text-white">
                Get ready for an epic showcase of cutting-edge fintech
                innovations at Suntec!
              </p>
              <a
                href="https://www.eventbrite.com/e/nus-fintech-summit-2024-demo-day-tickets-779362673737?aff=erelexpmlt"
                className="left-0 mx-2 top-0 py-1 rounded-lg px-2 bg-blue-900 border-turquoise text-white text-xs border-solid border-2 border-emerald-300"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={timelineWrapper}>
      <div style={timelineBox}>
        <h1
          className={`${timelineTitle} flex justify-center text-3xl font-bold my-8`}
        >
          Timeline
        </h1>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          scrollable={{ scrollbar: true }}
          theme={{
            primary: 'black',
            secondary: 'white',
            cardBgColor: '#0c1747',
            detailedText: 'white',
            titleColor: 'white',
            titleColorActive: '#1A237E',
          }}
          contentDetailsHeight={190}
          cardHeight={190}
          cardWidth={700}
        ></Chrono>
      </div>
    </div>
  );
}
