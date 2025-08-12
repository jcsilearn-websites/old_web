import Home from "./sections/home";
import AboutUs from "./sections/aboutus";
import SkillBoost from "./sections/skillboost";
import ServicesCarousel from "./sections/services-carousel";
import Testimonial from "./sections/testimonials";
import Careers from "./sections/careers";
import ContactUs from "./sections/contactus";

export default function Page() {
  return (
    <>
      <Home />
      <AboutUs />
      <SkillBoost />
      <Testimonial />
      <ServicesCarousel />
      <Careers />
      <ContactUs />
    </>
  );
}
