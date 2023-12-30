import { PageContainer } from './styles';

export default function ContactUsPage() {
  return (
    <PageContainer>
      <div className="flex flex-col justify-center items-center text-lg text-white">
        <p>For any enquiries, please contact us at</p>
        <a href="mailto:nusfintech.ops@gmail.com" className="underline">
          nusfintech.ops@gmail.com
        </a>
      </div>
    </PageContainer>
  );
}
