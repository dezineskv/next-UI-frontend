"use client";

import Hero from "@/components/Hero";
import TodosTop from "./todo/page";
import Carousel from "@/components/Carousel";
import Songs from "@/components/Songs";
import ModuleHero from "@/components/ModuleHero";
import Sorting from "@/components/Sorting";
import ProductsTop from "./product/page";
import Services from "./services/page";

const Home = () => {
 
  return (
    <>
      <Hero />
      <TodosTop />
      <ProductsTop/>
      <Services/>
      <Carousel
      />
      <Songs />
      <ModuleHero />
      <Sorting />
    </>
  );
};

export default Home;
