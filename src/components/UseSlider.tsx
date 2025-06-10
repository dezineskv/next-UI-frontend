// pages/index.tsx
import Slider from "@/components/Slider";

const UseSlider = () => {
  const images = [
    "https://th.bing.com/th/id/OIP.J2uMlzoVVTPSj3v870bw3wHaEi?r=0&rs=1&pid=ImgDetMain?text=Slide+1",
    "	https://colorlib.com/wp/wp-content/uploads/sites/2/canna-html-professional-website-template.jpg?text=Slide+2",
    "https://www.bizmilk.com/wp-content/uploads/2021/09/professional-website.jpg?text=Slide+3",
  ];

  return (
    <>
      <h2 className="mx-auto text-center pt-5 mb-10 text-5xl font-bold text-amber-500">
        Testimonials
      </h2>

      <div className="flex items-center justify-center bg-gray-100 py-10">
        <Slider images={images} />
      </div>
    </>
  );
};

export default UseSlider;
