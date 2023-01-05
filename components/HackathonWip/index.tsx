import { WIPContainer, Title } from './styles';
import Image from 'next/image';
import Background from '../../public/Background/workshop-background.png';

export default function HackathonWip() {
  return (
    <WIPContainer>
      <Image
        src={Background}
        objectFit="cover"
        layout="fill"
        className="h-screen w-full -z-10 absolute"
        alt="background image"
      />
      <Title>
        Please check back here shortly for more details on the FinTech
        Hackathon!
      </Title>
    </WIPContainer>
  );
}
