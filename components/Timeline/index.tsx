import { useContext } from 'react';
import { Chrono, TimelineItem } from 'react-chrono';
import { DeviceProvider } from '../../constants/context';

const items: {
  title: string;
  description: string;
  date: string;
  buttonText?: string;
  href?: string;
}[] = [
  {
    title: 'Virtual Kick-off Day',
    description:
      'Join us on the Virtual Kick-off Day where we will release the 4 Hackathon Problem Statements for the Summit!',
    date: '20 Dec 2023',
    buttonText: 'Find out more',
    href: 'https://www.eventbrite.com/e/nus-fintech-summit-virtual-kick-off-day-tickets-773549416127?aff=oddtdtcreator',
  },
  {
    title: 'Ideation Submission Deadline',
    description: 'Share your most creative ideas!',
    date: '3 Jan 2024 3PM',
    buttonText: 'Submit',
    href: 'https://nfshackathonideation.devpost.com/',
  },
  {
    title: 'Results Release',
    description: 'Results Release for ideation stage.',
    date: '3 Jan 2024',
    buttonText: 'Check your email',
  },
  {
    title: 'Opening Ceremony',
    description:
      'An immersive experience designed for participants to delve into the intricacies of our four distinct hackathon tracks and the fintech scene.',
    date: '5 Jan 2024',
    buttonText: 'Find out more',
    href: 'https://www.eventbrite.com/e/nus-fintech-summit-2024-opening-day-tickets-773838691357?aff=erelexpmlt',
  },
  {
    title: 'Prototype Submission Deadline',
    description: 'Show off your creative prototypes!',
    date: '9 Jan 2024',
  },
  {
    title: 'Workshops',
    description:
      'Conducted by industry leaders, tech innovators, and financial experts aimed at providing students with insights into the ever-evolving realm of Fintech.',
    date: '10 - 12 Jan 2024',
    buttonText: 'Workshops',
    href: '/workshops',
  },
  {
    title: 'Results Release',
    description: 'Results Release for prototyping stage.',
    date: '11 Jan 2024',
    buttonText: 'Check your email',
  },
  {
    title: 'Hackerhouse',
    description:
      'Consult our experienced judges and code together with other hackers!',
    date: '17 - 18 Jan 2024',
    buttonText: 'Check your email',
  },
  {
    title: 'Finalist Submission Deadline',
    description: 'Submit your final product!',
    date: '18 Jan 2024',
  },
  {
    title: 'Demo Day & Career Fair',
    description:
      'Get ready for an epic showcase of cutting-edge fintech innovations at Suntec!',
    date: '19 Jan 2024',
    buttonText: 'Find out more',
    href: 'https://www.eventbrite.com/e/nus-fintech-summit-2024-demo-day-tickets-779362673737?aff=erelexpmlt',
  },
];

function TimelineCard({
  title,
  description,
  date,
  buttonText,
  href,
}: {
  title: string;
  description: string;
  date: string;
  buttonText?: string;
  href?: string;
}) {
  const { isDesktop } = useContext(DeviceProvider);

  return (
    <div
      className={`flex p-1 z-10 gap-4 justify-between w-full ${
        !isDesktop ? 'flex-col-reverse' : 'items-center'
      }`}
    >
      <div className="flex-grow">
        <h1 className="text-2xl text-white font-bold mb-2">{title}</h1>
        <p className="text-xs mb-3 text-white">{description}</p>

        {buttonText && (
          <button>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="py-1 rounded-lg px-2 bg-blue-900 border-turquoise text-white text-xs border-solid border-2 border-emerald-300"
            >
              {buttonText}
            </a>
          </button>
        )}
      </div>

      <div
        className={`flex rounded-lg aspect-square ${
          isDesktop ? 'w-28 h-28 text-2xl' : 'w-24 h-24 text-xl'
        }  bg-white border-solid border-2 border-emerald-300 font-bold flex-col break-words justify-center items-center text-center`}
      >
        {date}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="flex flex-col w-full mt-8 items-center justify-center relative gap-4 bg-white rounded-[20px] shadow-lg">
      <h1 className="flex justify-center text-3xl font-bold my-8">Timeline</h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: 'black',
          secondary: 'white',
          cardBgColor: '#0c1747',
          cardTitleColor: 'white',
        }}
        contentDetailsHeight={300}
        cardHeight={100}
        hideControls
      >
        {items.map((item, index) => {
          const { title, description, date, buttonText, href } = item;
          return (
            <TimelineCard
              key={index}
              title={title}
              description={description}
              date={date}
              buttonText={buttonText}
              href={href}
            />
          );
        })}
      </Chrono>
    </div>
  );
}
