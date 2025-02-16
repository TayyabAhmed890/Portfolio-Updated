
import CategorySection from "./components/Category";
import Hero from "./components/Hero";
import ProjectsSection from "./components/Projects";
import Service from "./components/Services";
import SkillsSection from "./components/Skill";


export default function Home() {
  return (
    <>
   <section className="min-h-screen flex flex-col  bg-gray-900">
    <Hero/>
    <Service/>
    <SkillsSection/>
    {/* <ProjectsSection/> */}
    <CategorySection/>
   </section>

  
   
    </>
  );
}
