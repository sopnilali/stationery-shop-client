import Hero from "@/extra/Hero/Hero";
import Products from "@/extra/Products/Products";
import Services from "@/extra/Services/Services";
import Testimonials from "@/extra/Testimonials/Testimonials";
import SectionTitle from "@/shared/SectionTitle/SectionTitle";

const Homepage = () => {
  return (
    <div> 
        <Hero/>
        <Services/>
        <SectionTitle Title="Feature Products"/>
        <Products/>
        <SectionTitle Title="Testimonial"/>
        <Testimonials/>
    </div>
  );
};

export default Homepage;
