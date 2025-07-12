import Medium2card from "../components/Medium2card";
import ProjectCard from "../components/ProjectCard";

export default function Projects (){
    return (
        <>

        <div>
            <div className="text-2xl text-white py-5 border-b">
                Projects
            </div>
            <div className="py-5">
                <div className="py-5">
                    <a
  href="https://juniorme.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
> <ProjectCard/> </a>
               
                </div>
                <div className="py-5">
                     <a
  href="https://medium2-eosin.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
> 
                    
                <Medium2card/></a>
                </div>
                   
                
            </div>
        </div>
        </>
    )
}