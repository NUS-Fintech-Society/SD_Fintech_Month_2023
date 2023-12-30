import { Badge } from '@chakra-ui/react';
import Image from 'next/image';
import { Workshops } from '../../data/Workshops';
import { Workshop } from '../../types/Workshop';
import {
  EventContainer,
  HeadingContainer,
  SpeakerImage,
  SpeakerLabel,
  WorkshopContainer,
} from './styles';
import { useContext } from 'react';
import { DeviceProvider } from '../../constants/context';

function SingleDesktopWorkshopComponent({ workshop }: { workshop: Workshop }) {
  const { isDesktop } = useContext(DeviceProvider);

  return (
    <EventContainer
      className={workshop.organization.includes('(TBC)') ? 'grayscale' : ''}
    >
      <div className="bg-white w-full h-full rounded-lg p-6">
        <div className="flex w-full justify-between items-center mb-6">
          <div className="font-bold text-lg">
            {workshop.name ?? 'Topic: TBC'}
          </div>
          <Badge
            borderRadius="full"
            px="2"
            borderColor="red"
            borderWidth="1px"
            fontWeight={'bold'}
            backgroundColor="white"
            dropShadow="lg"
          >
            Workshop
          </Badge>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col w-[32%] h-30 px-4 justify-between items-center">
              {workshop.logo && (
                <a
                  href={workshop.logo.url}
                  target="_blank"
                  rel="noreferrer"
                  {...(workshop.organization.includes('Tokka Labs') && {
                    className:
                      'bg-[#0C1747] rounded-lg shadow-lg px-4 py-2 w-fit h-full flex justify-center items-center',
                  })}
                >
                  <Image
                    src={workshop.logo.src}
                    alt={workshop.organization}
                    width={workshop.logo.width}
                    height={workshop.logo.height}
                  />
                </a>
              )}
              <div className="font-bold text-center text-xs">
                Organization: {workshop.organization}
              </div>
            </div>

            <div className="flex gap-4">
              {workshop.speaker.length > 0 ? (
                workshop.speaker.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center w-full h-full"
                  >
                    <SpeakerImage
                      src={workshop.image}
                      fallbackSrc="https://via.placeholder.com/150"
                    />

                    <SpeakerLabel fontWeight={'bold'} className="text-center">
                      {speaker.name}
                    </SpeakerLabel>
                    <SpeakerLabel className="text-center">
                      {speaker.position}
                    </SpeakerLabel>
                  </div>
                ))
              ) : (
                <div className="flex flex-col h-full justify-center items-center w-28">
                  <SpeakerLabel fontWeight={'bold'} className="text-center">
                    Speaker: TBC
                  </SpeakerLabel>
                </div>
              )}
            </div>

            {isDesktop && (
              <div>
                <div className="flex">
                  <p className="font-bold">Date:</p>
                  <p className="font-normal ml-2">{workshop.date}</p>
                </div>
                <div className="flex">
                  <p className="font-bold">Time:</p>
                  <p className="font-normal ml-2">{workshop.time}</p>
                </div>
                <div className="flex">
                  <p className="font-bold">Venue:</p>
                  <p className="font-normal ml-2">{workshop.venue ?? 'TBD'}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {!isDesktop && (
          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <p className="font-bold">Date:</p>
                <p className="font-normal ml-2">{workshop.date}</p>
              </div>
              <div className="flex">
                <p className="font-bold">Time:</p>
                <p className="font-normal ml-2">{workshop.time}</p>
              </div>
            </div>

            <div className="flex">
              <p className="font-bold">Venue:</p>
              <p className="font-normal ml-2">{workshop.venue ?? 'TBD'}</p>
            </div>
          </div>
        )}
      </div>
    </EventContainer>
  );
}

export default function AllWorkshops() {
  return (
    <WorkshopContainer className="bg-[#20345b]">
      <HeadingContainer>
        <h1 className="text-white mb-10 text-4xl font-bold text-center">
          Workshops (10 - 12 Jan 2024)
        </h1>
      </HeadingContainer>

      <div className="flex flex-col w-full justify-center items-center gap-10">
        {Object.entries(Workshops).map(([date, { link, workshops }], i) => {
          return (
            <div
              key={i}
              className="flex flex-col w-full justify-center items-center gap-6"
            >
              <h1 className="text-white text-3xl font-medium">
                Day {i + 1} ({date})
              </h1>
              <button className="bg-[#67C3C6] relative rounded-lg h-10 w-[70%]">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-full w-full justify-center items-center"
                >
                  Register
                </a>
              </button>
              {workshops.map((workshop, j) => (
                <SingleDesktopWorkshopComponent key={j} workshop={workshop} />
              ))}
            </div>
          );
        })}
      </div>
    </WorkshopContainer>
  );
}
