import type { NextPage } from 'next';
import Image from 'next/image';
import { useContext } from 'react';
import { DeviceProvider } from '../constants/context';

const Profile = ({
  profile,
}: {
  profile: {
    name: string;
    position: string;
    organization: string;
    linkedin?: string;
    src?: string;
    role: 'moderator' | 'panelist';
  };
}) => {
  return (
    <div className="flex gap-2 w-full justify-between break-all">
      <div className="w-[100px] h-[100px]  relative">
        <Image
          className="rounded-lg"
          src={profile.src ?? '/profile.jpeg'}
          width={100}
          height={100}
          alt={profile.name}
        />
      </div>
      <div className="w-full">
        <p className="font-bold">{profile.name}</p>
        <p className="font-normal">{profile.position}</p>
        <p className="font-normal">{profile.organization}</p>
        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-blue-500"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
};

const Panel = ({
  title,
  people,
}: {
  title: string;
  people: {
    name: string;
    position: string;
    organization: string;
    linkedin?: string;
    role: 'moderator' | 'panelist';
    src?: string;
  }[];
}) => {
  const { isDesktop } = useContext(DeviceProvider);

  return (
    <div className="bg-white rounded-lg w-[80%] p-8">
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <div
        className={
          isDesktop
            ? 'grid grid-cols-2 flex-col gap-4'
            : 'flex flex-col gap-4 justify-center items-center w-full'
        }
      >
        {people.map((person, i) => (
          <Profile key={i} profile={person} />
        ))}
      </div>
    </div>
  );
};

const PanelDiscussionPage: NextPage = () => {
  return (
    <div
      className={`bg-[#20345b] min-h-screen w-screen flex flex-col items-center justify-center relative gap-10 py-12`}
    >
      <Panel
        title="Panel Discussion 1 (Opening Day)"
        people={[
          {
            name: 'Hassan Ahmed',
            position: 'Country Director, Singapore',
            organization: 'Coinbase',
            linkedin: 'https://www.linkedin.com/in/hassanahmed3/',
            role: 'panelist',
            src: '/Panelists/hassan_ahmed.jpg',
          },
          {
            name: 'Chia Tek Yew',
            position: 'Vice Chairman, Singapore',
            organization: 'Oliver Wyman',
            linkedin: 'https://www.linkedin.com/in/tek-yew-chia-b861b13/',
            role: 'panelist',
          },
          {
            name: 'Andeed Ma',
            position: 'President and Chairperson of Governing Council',
            organization: 'RIMAS',
            role: 'panelist',
            linkedin:
              'https://www.linkedin.com/in/andeedma/?originalSubdomain=sg',
            src: '/Panelists/andeed_ma.jpg',
          },
          {
            name: 'Rachel Lee',
            position: 'Head of Learn',
            organization: 'StackUp',
            linkedin: 'https://www.linkedin.com/in/rachel-kn-lee/',
            role: 'moderator',
            src: '/Panelists/rachel_lee.jpg',
          },
        ]}
      />
      <Panel
        title="Panel Discussion 2 (Demonstration Day) (TBC)"
        people={[
          {
            name: 'Alvin Singh',
            position:
              'Deputy Director of Financial Technology and Innovation Group',
            organization: 'Monetary Authority of Singapore (MAS)',
            role: 'panelist',
            linkedin:
              'https://www.linkedin.com/in/alvin-singh-a787a041/?originalSubdomain=sg',
            src: '/Panelists/alvin_singh.jpg',
          },
          {
            name: 'Alvin Chia',
            position: 'SVP - Head of Digital Assets Innovation (APAC)',
            organization: 'Northern Trust',
            role: 'panelist',
            linkedin:
              'https://www.linkedin.com/in/alvinchiajiahao/?originalSubdomain=sg',
            src: '/Panelists/alvin_chia.jpg',
          },
        ]}
      />
    </div>
  );
};

export default PanelDiscussionPage;
