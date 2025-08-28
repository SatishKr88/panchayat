import { panchayatData } from "./data";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import News from "./components/News";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Header name={panchayatData.name} />
      <About about={panchayatData.about} />
      <Gallery photos={panchayatData.gallery} />
      <News posts={panchayatData.news} />
      <Members members={panchayatData.members} />
      <Contact contact={panchayatData.contact} />
      <Footer social={panchayatData.social} />
    </div>
  );
}