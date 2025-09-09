import Home from "./sections/home";
import AboutUs from "./sections/aboutus";
import SkillBoost from "./sections/skillboost";
import ServicesCarousel from "./sections/services-carousel";
import Testimonial from "./sections/testimonials";
import Careers from "./sections/careers";
import ContactUs from "./sections/contactus";
import Hiring from "./sections/hiring";

export default function Page() {
  return (
    <>
      <Home />
      <AboutUs />
      <Careers />
      <ServicesCarousel />
      <SkillBoost />
      <Testimonial />
      <Hiring />
      <ContactUs />
    </>
  );
}
