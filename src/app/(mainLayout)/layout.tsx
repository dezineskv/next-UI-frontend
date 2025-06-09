import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousel from './../../components/Carousel';
import Songs from './../../components/Songs';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Carousel/>
      <Songs/>
      <Footer />
    </>
  );
};

export default MainLayout;
