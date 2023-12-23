import internal from 'stream';

export type Workshop = {
  id?: number;
  day: string;
  date: string;
  time: string;
  name: string | string[] | null;
  organization: string;
  logo?: {
    src: string;
    height: string;
    width: string;
    url: string;
  };
  speaker: {
    name: string;
    position: string;
  }[];
  venue?: string;
  link?: string;
  image?: string;
  description?: string;
};
