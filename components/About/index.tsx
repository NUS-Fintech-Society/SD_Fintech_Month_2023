import { Img } from '@chakra-ui/react';
import Image from 'next/image';
import BubbleEffect2 from '../../public/BubbleEffect2.png';
import AboutImage1 from '../../public/AboutImage1.png';
import AboutImage3 from '../../public/AboutImage3.png';
import AboutImage2 from '../../public/AboutImage2.png';
import AboutNewImage1 from '../../public/AboutNewImage1.png';
import AboutNewImage2 from '../../public/AboutNewImage2.png';

function About() {
  return (
    <div
      className="lg:h-screen min-h-screen flex flex-col items-center justify-center relative"
      style={{ backgroundColor: '#172554' }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center relative lg:mx-16">
        <div className="p-4 md:p-6 my-4 w-3/4 lg:w-1/2">
          <div className="text-[#001158] text-right mb-4 text-white">
            NUS Fintech Month constitutes a series of workshops and panel
            discussions designed to give university and polytechnic students an
            insight into the world of Fintech. The workshops range from beginner
            to advanced levels, allowing everyone to participate regardless of
            background.
          </div>
          <div className="text-[#001158] text-right text-white">
            Additionally, there will be a hackathon where a real-world problem
            will be tackled using Fintech, thus demonstrating the usefulness of
            this technology in a real-world context. We are anticipating rapid
            sign-ups, with more than 300 students participating, so be sure to
            register early with your team of 2 - 5 to ensure your slot is
            reserved!
          </div>
        </div>
        <div className="lg:w-1/2 lg:flex lg:flex-row lg:items-center lg:justify-center">
          <Image
            src={AboutNewImage1}
            objectFit="cover"
            alt="pic 1"
            className="mb-4"
            style={{ marginRight: '10px' }}
          />
          <Image
            src={AboutNewImage2}
            objectFit="cover"
            alt="pic 2"
            style={{ marginLeft: '10px' }}
          />
        </div>
      </div>
      <div className="text-center text-white px-64">
        <div className="text-2xl font-bold">About Fintech Summit</div>
        <div className="text-left mb-2">
          NUS Fintech Month constitutes a series of workshops and panel
          discussions designed to give university and polytechnic students an
          insight into the world of Fintech. The workshops range from beginner
          to advance levels, allowing everyone to participate regardless of
          background.
        </div>
        <div className="text-left">
          Additionally, there will be a hackathon where a real-world problem
          will be tackled using Fintech, thus demonstrating the usefulness of
          this technology in a real world context. We are anticipating rapid
          sign ups, with more than 300 students participating, so be sure to
          register early with your team of 2 - 5 to ensure your slot is
          reserved!
        </div>
      </div>
    </div>
  );
}

export default About;
