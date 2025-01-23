import Faq from "@/src/widgets/Faq";
import Footer from "@/src/widgets/Footer";
import Header from "@/src/widgets/Header";
import Team from "@/src/widgets/Team";
import Welcome from "@/src/widgets/Welcome";

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}
