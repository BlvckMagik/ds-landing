import Nadia from "@/public/home-page/Nadia.jpg";
import Ndriy from "@/public/home-page/Ndriy.jpg";
import Kshusha from "@/public/home-page/Kshusha.jpg";
import { ITeamMember } from "@/src/entities/types/team";
export const teamMembers: ITeamMember[] = [
  {
    id: 1,
    name: "Ксенія",
    description: "Старший викладач нашого центру",
    image: Kshusha,
    role: "Викладач німецької мови",
    subjects: [{ name: "Німецька мова", level: "C1" }],
    studyFormats: ["Індивідуальні", "Групові"],
    studyTypes: ["Діти", "Підлітки", "Дорослі"],
    degree: "Бакалавр",
    specialty: "Філологія (німецька)",
    totalExperience: "з 2019 року",
    examPreparationExperience: "Goethe Zertifikat, TELC",
    additionalInfo:
      "Обожнюю тваринок. Раніше працювала з кіньми інструктором. Також люблю собачок і маю німецьку вівчарку)) Захоплююсь автоспортом, велосипедами та активним відпочинком. До онлайн викладання, працювала в дитячому центрі в садочку та потім таборі викладачем англійської",
  },
  {
    id: 2,
    name: "Надія",
    description: "Викладач англійської мови",
    image: Nadia,
    role: "Викладач англійської мови",
    subjects: [{ name: "Англійська мова", level: "C1" }],
    studyFormats: ["Індивідуальні", "Групові"],
    studyTypes: ["Діти", "Підлітки", "Дорослі"],
    degree: "Бакалавр. здобувач магістерського ступеню",
    specialty: "Філологія (англійська)",
    totalExperience: "з 2020 року",
    examPreparationExperience: "CLB (Canada), CELPIP (Canada), IELTS, НМТ",
    additionalInfo:
      "займаюсь популяризацією та розвитком української культури, виготовляючи етнічні прикраси з бісеру. Відвідую уроки вокалу та теорії музики щотижня, тож на уроках також залучаю музику і пісні до опанування. Паралельно працюю графічним дизайнером та займаюсь розробкою освітніх матеріалів",
  },
  {
    id: 3,
    name: "Андрій",
    description: "Викладач німецької мови",
    image: Ndriy,
    role: "Вчитель німецької мови",
    subjects: [{ name: "Німецька мова", level: "C1" }],
    studyFormats: ["Індивідуальні", "Групові"],
    studyTypes: ["Діти", "Підлітки", "Дорослі"],
    degree: "Бакалавр з відзнакою, здобувач магістерського ступеню",
    specialty: "Філологія (німецька)",
    totalExperience: "з 2023 року",
    additionalInfo:
      "Мені подобається музика, грати на гітарі, співати, подорожувати та читати. Більше року прожив в Німеччині. Маю досвід у співпраці з німцями",
  },
];
