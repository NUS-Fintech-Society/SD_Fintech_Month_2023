import { Button, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { DeviceProvider } from '../../constants/context';
import { importantDates } from '../../data/ImportantDates';
import GreetingSection from '../../public/GreetingSection.png';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import RegisterButton from '../RegisterButton';
import { SubTitle, Title } from './styles';

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
      <div className="flex flex-col p-6 rounded-2xl shadow-xl bg-[#ffffffB3]">
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
          zIndex={'40'}
          onClick={handleHackathonClick}
        >
          Hackathon
        </Button>
        <Button
          colorScheme="brand"
          fontWeight="bold"
          fontSize={{ base: 'md', lg: 'lg' }}
          zIndex={'40'}
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

  const { isDesktop } = useContext(DeviceProvider);

  return (
    <div
      className={`h-[calc(100vh-${
        isDesktop ? '100px' : '70px'
      })] w-screen h-screen flex relative justify-center items-center`}
      style={{ backgroundColor: '#20345B' }}
    >
      <Image
        src={GreetingSection}
        objectFit="cover"
        layout="fill"
        alt="background image"
      />

      <div
        className={`flex flex-col w-full h-full items-center justify-center space-y-12 ${
          isDesktop ? 'mb-[100px]' : 'mb-[70px]'
        } mx-8`}
      >
        <div className="flex gap-12 leading-tight">
          <Title className="flex flex-col">
            <h1>2</h1>
            <h1>0</h1>
            <h1>2</h1>
            <h1>4</h1>
          </Title>
          <div className="flex flex-col gap-4">
            <Title className="flex flex-col space-y-1">
              <h1>NUS</h1>
              <h1>FINTECH</h1>
              <h1>SUMMIT</h1>
            </Title>

            <SubTitle>
              <div className="text-3xl">THEME: Fintech-As-A-Service</div>

              <div className="text-base">
                07 JAN - 19 JAN 2024 @ NATIONAL UNIVERSITY OF SINGAPORE
              </div>
            </SubTitle>
          </div>
        </div>

        <CountdownTimer />
        <RegisterButton />
      </div>
    </div>
  );
}
