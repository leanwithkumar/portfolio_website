import About from "./About/page";
import Header from "./components/Header";




export default function App() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-5 max-w-screen-xl mx-auto">
      
      <div className="block lg:hidden p-4 text-center font-semibold text-white bg-[#333] rounded-lg mb-4">
        This is a mobile-only top bar!
      </div>

      
      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="hidden lg:block w-full lg:w-1/3">
          <Header />
        </div>

        
        <div className="w-full lg:w-2/3">
        <About/>
          
        </div>
      </div>
    </div>
  );
}
