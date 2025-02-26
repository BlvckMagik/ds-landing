import AboutUs from "@/src/widgets/AboutUs";
import ApplyForm from "@/src/widgets/ApplyForm";
import ApplySteps from "@/src/widgets/ApplySteps";
import Benefits from "@/src/widgets/Benefits";
import Contacts from "@/src/widgets/Contacts";
import Faq from "@/src/widgets/Faq";
import Team from "@/src/widgets/Team";
import Welcome from "@/src/widgets/Welcome";

export default function Home() {
  return (
    <>
      <Welcome />
      <AboutUs />
      <Benefits />
      <ApplySteps />
      <Team />
      <Faq />
      <ApplyForm />
      <Contacts />
    </>
  );
}
