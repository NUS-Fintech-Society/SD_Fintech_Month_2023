import { Img } from '@chakra-ui/react';
import Image from 'next/image';
import BubbleEffect2 from '../../public/BubbleEffect2.png';
import AboutImage1 from '../../public/AboutImage1.png';
import AboutImage3 from '../../public/AboutImage3.png';
import AboutImage2 from '../../public/AboutImage2.png';

function About() {
  return (
    <div className="lg:h-screen min-h-screen flex flex-col items-center justify-center relative">
      <Image
        src={BubbleEffect2}
        objectFit="cover"
        layout="fill"
        className="h-screen w-full -z-10 absolute"
        alt="background image 3"
      />
      <div className="text-xl md:text-4xl text-[#001158] font-bold mb-6">
        ABOUT FINTECH MONTH
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center relative lg:mx-16">
        <div className="grid grid-cols-12 grid-rows-[12] w-2/3 lg:w-1/2">
          <div className="col-start-3 col-span-6 z-10 row-span-2 row-start-1">
            <Image src={AboutImage1} objectFit="cover" alt="pic 1" />
          </div>
          <div className="col-start-5 col-span-8 z-0 row-span-3 row-start-2">
            <Image src={AboutImage3} objectFit="cover" alt="pic 3" />
          </div>
          <div className="col-start-2 col-span-6 z-10 row-span-2 row-start-4">
            <Image src={AboutImage2} objectFit="cover" alt="pic 2" />
          </div>
        </div>
        <div className="flex shadow-xl rounded-3xl p-4 md:p-6  backdrop-blur-sm bg-[#ffffffcf] my-4 w-3/4 lg:w-1/2 ">
          <div className="text-[#001158]">
            NUS FinTech month is a series of workshops and panel discussions
            designed to give university and polytechnic students an insight into
            the world of Fintech. The theme for this year will revolve around
            Fintech as a Service. There will be workshops ranging from beginner
            levels to more advanced levels allowing everyone, no matter their
            background, to participate in this. The workshops will be held in
            person as well as broadcast online. The workshops will be held in
            person and broadcasted online. A hackathon will also be held where
            participants will be able to tackle current challenges faced in the
            world of financial technology.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
