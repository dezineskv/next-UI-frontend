"use client";

import Hero from "@/components/Hero";
import TodosTop from "./todo/page";
import Carousel from "@/components/Carousel";
import Songs from "@/components/Songs";
import ModuleHero from "@/components/ModuleHero";
import Sorting from "@/components/Sorting";
import ProductsTop from "./product/page";
import Services from "./services/page";
import UseSlider from "@/components/UseSlider";
import Other from './../../components/Other';

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
      <Other/>
      <Sorting />
      <UseSlider/>

    </>
  );
};

export default Home;
