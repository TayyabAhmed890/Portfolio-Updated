
import CategorySection from "./components/Category";
import Hero from "./components/Hero";
import Service from "./components/Services";
import SkillsSection from "./components/Skill";


export default function Home() {
  return (
    <>
   <section className="min-h-screen bg-gray-900">
    <Hero/>
    <Service/>
    <SkillsSection/>
    <CategorySection/>
   </section>

  
   
    </>
  );
}
