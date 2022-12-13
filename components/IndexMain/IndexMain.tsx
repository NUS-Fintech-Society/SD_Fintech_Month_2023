import { Button, Img, ListItem, UnorderedList } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { importantDates } from '../../data/ImportantDates';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import LeaderBoard from '../LeaderBoard';
import { Title } from './styles';

type Props = {
  scrollToThemePage: () => void;
};

function ImportantDatesSection() {
  const router = useRouter();

  const handleHackathonClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.open('https://forms.gle/woaewfoX4pW9nJMZA');
    //router.push('/fintechHackathon');
  };

  const handleWorkshipClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('/workshops');
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full h-full">
      <div className="flex flex-col p-8 rounded-2xl shadow-xl bg-[#ffffffB3] w-full">
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

      <div className="justify-center items-center w-full flex space-x-16">
        <Button
          colorScheme="brand"
          fontWeight="bold"
          fontSize="lg"
          onClick={handleHackathonClick}
        >
          Hackathon
        </Button>
        <Button
          colorScheme="brand"
          fontWeight="bold"
          fontSize="lg"
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
    <div className="h-screen">
      <Img
        src="WaterEffect.png"
        className="h-screen -z-10 absolute object-cover"
        placeholder=""
      />

      <div className="lg:grid lg:grid-cols-3 flex mt-40 mx-16">
        <div className="lg:col-span-2 flex flex-col items-center justify-center w-full h-full ">
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
        <div className="hidden lg:flex col-span-1">
          <ImportantDatesSection />
        </div>
      </div>

      <div className="lg:hidden flex">
        <Img
          src="LinesEffect.png"
          className="h-screen -z-10 absolute object-cover"
          placeholder=""
        />
        <div className="flex items-center justify-center w-screen h-screen px-10">
          <ImportantDatesSection />
        </div>
      </div>

      <LeaderBoard />
    </div>
  );
}
