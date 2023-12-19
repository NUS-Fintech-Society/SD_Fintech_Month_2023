import { Img } from '@chakra-ui/react';
import Image from 'next/image';
import BubbleEffect2 from '../../public/BubbleEffect2.png';
import AboutImage1 from '../../public/AboutImage1.png';
import AboutImage3 from '../../public/AboutImage3.png';
import AboutImage2 from '../../public/AboutImage2.png';
import AboutNewImage1 from '../../public/AboutNewImage1.png';
import AboutNewImage2 from '../../public/AboutNewImage2.png';
import TimelineSummit from '../../public/TimelineSummit.png';
import { useContext } from 'react';
import { DeviceProvider } from '../../constants/context';

function About() {
  const { isDesktop } = useContext(DeviceProvider);

  return (
    <div
      className={` min-h-screen w-screen flex flex-col items-center justify-center relative`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center relative lg:mx-16">
        <div className="flex flex-col p-4 md:p-6 my-4 w-3/4 lg:w-1/2 lg:items-end justify-center">
          <p className="lg:text-right mb-4 text-white lg:w-3/4">
            NUS Fintech Month constitutes a series of workshops and panel
            discussions designed to give university and polytechnic students an
            insight into the world of Fintech. The workshops range from beginner
            to advanced levels, allowing everyone to participate regardless of
            background.
          </p>
          <p className="lg:text-right text-white lg:w-3/4">
            Additionally, there will be a hackathon where a real-world problem
            will be tackled using Fintech, thus demonstrating the usefulness of
            this technology in a real-world context. We are anticipating rapid
            sign-ups, with more than 300 students participating, so be sure to
            register early with your team of 2 - 5 to ensure your slot is
            reserved!
          </p>
        </div>
        <div className="lg:w-1/2 flex lg:flex-row lg:items-center gap-4 sm:px-16 md:p-0 px-12">
          <Image
            src={AboutNewImage1}
            alt="pic 1"
            className="object-scale-down"
          />
          <Image
            src={AboutNewImage2}
            alt="pic 2"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex w-full h-full justify-center sm:px-20 sm:py-12 md:py-10 px-12 mt-12">
        <Image
          alt="Timeline"
          src={TimelineSummit}
          // layout="fill"
          // objectFit="contain"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col text-center text-white w-3/4 2xl:w-1/2 gap-2 2xl:px-20 xl:px-16 mt-14">
        <div className="text-3xl font-bold mb-2">About Fintech Summit</div>
        <div className="text-left">
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
