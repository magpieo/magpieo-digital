import { StaticImageData } from "next/image";

export interface ICreation {
  heading: string;
  tag: string;
  image: StaticImageData;
  link: string;
}

export interface ICreationCardProps {
  creation: ICreation;
  index: number;
  isMobile: boolean;
  isActive: boolean;
  setActive: (index: number) => void;
}
