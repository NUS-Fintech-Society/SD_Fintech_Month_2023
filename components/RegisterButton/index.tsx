import Link from 'next/link';

export default function RegisterButton() {
  return (
    <button className="bg-[#67C3C6] relative rounded-lg py-2 px-20">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScrGvQgY0tgpHwXndRT1oq3iZtZwQPzd5kuPedF4RlROPFCgA/viewform"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-col gap-1 text-black font-bold ">
          <div className="text-base">Register Now!</div>
          <div className="text-xs underline">By 01 Jan 2024</div>
        </div>
      </a>
    </button>
  );
}
