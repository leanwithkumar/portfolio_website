import Medium2card from "../components/Medium2card";
import ProjectCard from "../components/ProjectCard";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

export default function Projects() {
  return (
    <div>
         <FadeInWhenVisible delay={0.2}>
      <div className="text-2xl text-white py-5 border-b">Projects</div>
      <div className="py-5 border-b">
        <div className="py-5">
         
            <a
              href="https://juniorme.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectCard />
            </a>
          
        </div>
        <div className="py-5">
          <FadeInWhenVisible delay={0.3}>
            <a
              href="https://medium2-new.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Medium2card />
            </a>
          </FadeInWhenVisible>
        </div>
      </div>
      </FadeInWhenVisible>
    </div>
  );
}
