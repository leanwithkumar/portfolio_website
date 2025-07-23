import Blogcard from "../components/Blogcad";
import Blogcard2 from "../components/Blogcard2";

export default function Blogs(){
    return(
        <>
        <div className="pb-5">
            <div>
                <div className="text-white text-2xl border-b py-5">
                    Recents Articles
                </div>

                    <div className="border-b py-5">
  <div className="py-5 text-2xl">Latest Article</div>

  <div className="flex flex-wrap justify-center ">
    <div className="m-4">
       <a
        href="https://medium.com/@leanwithkumar/node-a-runtime-environment-82e153c66864"
        target="_blank"
        rel="noopener noreferrer"
      > <Blogcard /></a>
    </div>
    <div className="m-4">
      <a
        href="https://medium.com/@leanwithkumar/api-api-api-1967f1ca9e13"
        target="_blank"
        rel="noopener noreferrer"
      > <Blogcard2 /></a>
    </div>
  </div>






</div>

                
            </div>
        </div>
        </>
    )
}