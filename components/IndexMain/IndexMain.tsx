import { Button, Img, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { importantDates } from '../../data/ImportantDates';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import LeaderBoard from '../LeaderBoard';
import { Title } from './styles';
import WaterEffect from '../../public/WaterEffect.png';
import LinesEffect from '../../public/LinesEffect.png';

type Props = {
  scrollToThemePage: () => void;
};

function ImportantDatesSection() {
  const router = useRouter();

  const handleHackathonClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.open('https://nus-ftm-ideation-hackathon.devpost.com/');
    //router.push('/fintechHackathon');
  };

  const handleWorkshipClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('/workshops');
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 h-full">
      <div className="flex flex-col p-6 rounded-2xl shadow-xl bg-[#ffffffB3] ">
        <Title fontSize={{ base: '2xl' }}>IMPORTANT DATES</Title>
        <UnorderedList className="px-2">
          {importantDates.map((date) => {
            return (
              <ListItem key={date.id}>
                <div className="underline font-bold underline-offset-1 text-[#001158] border-[#001158]">{`${date.date}:`}</div>
                <div>{` ${date.description}`}</div>
              </ListItem>
            );
          })}
        </UnorderedList>
      </div>

      <div className="justify-center items-center flex space-x-4">
        <Button
          colorScheme="brand"
          fontWeight="bold"
          fontSize={{ base: 'md', lg: 'lg' }}
          zIndex={'1000'}
          onClick={handleHackathonClick}
        >
          Hackathon
        </Button>
        <Button
          colorScheme="brand"
          fontWeight="bold"
          fontSize={{ base: 'md', lg: 'lg' }}
          zIndex={'1000'}
          onClick={handleWorkshipClick}
        >
          Workshops
        </Button>
      </div>
    </div>
  );
}

export default function IndexMain(props: Props) {
  const { scrollToThemePage } = props;

  return (
    <div className="lg:w-full relative">
      <Image
        src={WaterEffect}
        objectFit="cover"
        layout="fill"
        className="h-screen w-full -z-10 absolute"
        alt="background image"
      />
      <div className="lg:grid lg:grid-cols-3 flex h-screen">
        <div className="lg:col-span-2 flex flex-col items-center justify-center h-full space-y-6 w-full">
          <Title className="">NUS FINTECH MONTH 2023</Title>
          <Button
            onClick={scrollToThemePage}
            colorScheme="brand"
            fontWeight="bold"
            fontSize="2xl"
            rounded="3xl"
            p="6"
          >
            Fintech-as-a-Service
          </Button>
          <CountdownTimer />
        </div>
        <div className="hidden lg:flex lg:col-span-1 lg:h-full">
          <ImportantDatesSection />
        </div>
      </div>

      <div className="lg:hidden flex">
        <Image
          src={LinesEffect}
          objectFit="cover"
          layout="fill"
          className="h-screen w-full -z-10 absolute"
          alt="background image 2"
        />
        <div className="w-screen h-screen px-8">
          <ImportantDatesSection />
        </div>
      </div>

      <LeaderBoard />
    </div>
  );
}
