import { Img } from '@chakra-ui/react';

function About() {
  return (
    <div className="lg:h-screen min-h-screen flex flex-col items-center justify-center relative">
      <Img
        src="BubbleEffect2.png"
        className="h-full -z-10 absolute object-cover"
        placeholder=""
      />
      <div className="text-xl md:text-4xl text-[#001158] font-bold mb-6">
        ABOUT FINTECH MONTH
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center relative lg:mx-16">
        <div className="grid grid-cols-12 grid-rows-[12] w-2/3 lg:w-1/2">
          <Img
            src="AboutImage1.png"
            objectFit="cover"
            className="col-start-3 col-span-6 z-10 row-span-2 row-start-1"
          />
          <Img
            src="AboutImage3.png"
            objectFit="cover"
            className="col-start-5 col-span-8 z-0 row-span-3 row-start-2"
          />
          <Img
            src="AboutImage2.png"
            objectFit="cover"
            className="col-start-2 col-span-6 z-10 row-span-2 row-start-4"
          />
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
