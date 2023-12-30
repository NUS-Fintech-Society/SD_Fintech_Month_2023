import type { NextPage } from 'next';
import ContactUsComponent from '../components/ContactUsPage';

const ContactUs: NextPage = () => {
  return (
    <div className="bg-[#20345b] h-[92vh]">
      <div className="flex flex-col text-lg text-white h-full justify-center items-center">
        <p>For any enquiries, please contact us at</p>
        <a href="mailto:nusfintech.ops@gmail.com" className="underline">
          nusfintech.ops@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
