import Blogcard from "../components/Blogcad";

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
      <Blogcard />
    </div>
    <div className=" m-4">
      <Blogcard />
    </div>
  </div>
   <div className="flex flex-wrap justify-center">
    <div className="m-4">
      <Blogcard />
    </div>
    <div className="m-4">
      <Blogcard />
    </div>
  </div>






</div>

                
            </div>
        </div>
        </>
    )
}