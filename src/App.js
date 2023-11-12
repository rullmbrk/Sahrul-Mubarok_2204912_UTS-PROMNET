import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import GalleryComp from "./components/GalleryComp";
import ServicesComp from "./components/ServicesComp";
import FaqComp from "./components/FaqComp";
import FooterComp from "./components/FooterComp";

function App() {
  return(
  <div>
    <HeroComp />

    {/* Content */}
    <NavbarComp />
    <GalleryComp />
    <ServicesComp />
    <FaqComp />
    {/* Content */}

    <FooterComp />
  </div>
  );
}

export default App;