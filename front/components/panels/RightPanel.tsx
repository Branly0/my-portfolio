import ContactBox from "@/components/sections/ContactBox";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";

export default function RightPanel() {
  return (
    <div className="space-y-16">
      <ContactBox />
      <Projects />
      <Skills />
      <Experience />
    </div>
  );
}