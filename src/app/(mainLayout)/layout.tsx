import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousel from './../../components/Carousel';
import Songs from './../../components/Songs';
import ModuleHero from './../../components/ModuleHero';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Carousel/>
      <Songs/>
      <ModuleHero/>
      <Footer />
    </>
  );
};

export default MainLayout;
