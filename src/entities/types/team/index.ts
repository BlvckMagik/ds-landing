import { StaticImageData } from "next/image";

export interface ITeamMember {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  role: string;
  subjects: { name: string; level: string }[];
  studyFormats?: string[];
  studyTypes?: string[];
  degree?: string;
  specialty?: string;
  totalExperience?: string;
  examPreparationExperience?: string;
  additionalInfo?: string;
}
