import { createSignal } from "solid-js";
import { BsPinAngleFill } from 'solid-icons/bs'
function App() {
  const [isFullScreen, setIsFullScreen] = createSignal(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen());
  };

  return (
    <div class="relative h-screen w-full bg-gray-900 flex items-center justify-center overflow-hidden">
      {isFullScreen() && (
        <nav class="fixed top-0 left-0 w-full bg-gray-800/90 text-white flex justify-around p-3 z-20 backdrop-blur-sm">
          <button class="hover:text-orange-400 transition-colors" onClick={() => scrollToSection("image")}>Profile</button>
          <button class="hover:text-orange-400 transition-colors" onClick={() => scrollToSection("skills")}>Evidence List</button>
          <button class="hover:text-orange-400 transition-colors" onClick={() => scrollToSection("projects")}>Case Files</button>
          <button class="hover:text-orange-400 transition-colors" onClick={() => scrollToSection("strengths")}>Key Findings</button>
          <button class="hover:text-orange-400 transition-colors" onClick={() => scrollToSection("education")}>Background Info</button>
        </nav>
      )}

      <main
        class="relative w-[90%] h-[85%] bg-[#431407] border-orange-900 border-8 shadow-2xl transition-all duration-500 cursor-pointer shadow-inner shadow-black"
        classList={{
          "scale-100": !isFullScreen(),
          "scale-105 mt-16": isFullScreen(),
        }}
        style={{ transformOrigin: "center" }}
        // onClick={toggleFullScreen}
      >
        
        {/* lines or red strings */}
        <div class="absolute inset-0 z-[6]">
          <svg class="w-full h-full">
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="240%" height="240%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
                <feOffset in="blur" dx="7" dy="7" result="offsetBlur"/>
                <feMerge>
                  <feMergeNode in="offsetBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#shadow)">
              {/* evidence list string */}
              <line x1="10%" y1="8.5%" x2="43%" y2="43%" stroke="#EF4444" stroke-width="2"/>

              {/* background info string */}
              <line x1="89%" y1="7%" x2="57%" y2="45%" stroke="#EF4444" stroke-width="2"/>

              {/* key findings */}
              <line x1="11%" y1="79%" x2="43%" y2="56%" stroke="#EF4444" stroke-width="2"/>

              {/* case files */}
              <line x1="87.5%" y1="77.5%" x2="56.5%" y2="57%" stroke="#EF4444" stroke-width="2"/>
            </g>
          </svg>
        </div>



        {/* Profile/Image Section (Center) */}
        <section
          id="image"

          className="absolute bg-white w-[20%] h-[20%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-orange-900 shadow-black shadow-md  rotate-3 z-[5]"
        >
          <div class="h-full w-full flex flex-col items-center justify-center bg-white/90 p-4">
            <div class="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
            <p class="font-mono text-gray-800 text-xl mb-2">SUSPECT PROFILE</p>
            <p class="font-mono text-gray-600 text-sm">TOP SECRET</p>
            <p class="font-mono text-gray-600 text-sm">Click me</p>
          </div>
          
          {/* <svg fill="#FF3131" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="25px" width="25px" style="overflow: visible; color: currentcolor; position:absolute; top:-1%; left:50% ; box-shadow: 10px 10px"><path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"></path></svg> */}
        </section>

        {/* Skills Section */}
        <section id="skills" class="absolute top-[5%] left-[5%] transform -rotate-6 z-0">
          <div class="relative w-[170px] h-[120px]">
            {/* Background layers */}
            <div class="absolute -top-2 -left-2 w-full h-full bg-green-50 border-2 border-orange-900 shadow-black shadow-lg rotate-3"></div>
            <div class="absolute -top-1 -left-1 w-full h-full bg-green-100 border-2 border-orange-900 shadow-black shadow-lg rotate-1"></div>
            {/* Top layer with content */}
            <div class="relative w-full h-full bg-green-200 border-2 border-orange-900 shadow-black shadow-md">
              <div class="w-full h-full flex items-center justify-center">
                <p class="font-mono text-gray-800">EVIDENCE LIST</p>
              </div>
              <div class="absolute -top-3 -right-2 w-6 h-6 bg-yellow-300 rotate-45"></div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" class="absolute bottom-[5%] right-[5%] transform rotate-6 z-0">
          <div class="relative w-[170px] h-[120px]">
            <div class="absolute -top-2 -left-2 w-full h-full bg-blue-50 border-2 border-orange-900 shadow-black shadow-lg -rotate-3"></div>
            <div class="absolute -top-1 -left-1 w-full h-full bg-blue-100 border-2 border-orange-900 shadow-black shadow-lg -rotate-1"></div>
            <div class="relative w-full h-full bg-blue-200 border-2 border-orange-900 shadow-black shadow-md">
              <div class="w-full h-full flex items-center justify-center">
                <p class="font-mono text-gray-800">CASE FILES</p>
              </div>
              <div class="absolute -top-3 -left-2 w-6 h-6 bg-yellow-300 rotate-45"></div>
            </div>
            {/* <div class="absolute top-[0%] left-[30%]  w-8 h-8 bg-red-500 rounded-full border-2 border-red-700"></div> */}

          </div>
        </section>

        {/* Strengths Section */}
        <section id="strengths" class="absolute bottom-[5%] left-[5%] transform rotate-3 z-0">
          <div class="relative w-[170px] h-[120px]">
            <div class="absolute -top-2 -left-2 w-full h-full bg-yellow-50 border-2 border-orange-900 shadow-black shadow-lg rotate-3"></div>
            <div class="absolute -top-1 -left-1 w-full h-full bg-yellow-100 border-2 border-orange-900 shadow-black shadow-lg rotate-1"></div>
            <div class="relative w-full h-full bg-yellow-200 border-2 border-orange-900 shadow-black shadow-md">
              <div class="w-full h-full flex items-center justify-center">
                <p class="font-mono text-gray-800">KEY FINDINGS</p>
              </div>
              <div class="absolute -top-3 -right-2 w-6 h-6 bg-yellow-300 rotate-45"></div>
            </div>
            {/* <div class="absolute top-[6%] left-[38%]  w-8 h-8 bg-red-500 rounded-full border-2 border-red-700"></div> */}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" class="absolute top-[5%] right-[5%] transform rotate-6 z-0">
          <div class="relative w-[170px] h-[120px]">
            <div class="absolute -top-2 -left-2 w-full h-full bg-purple-50 border-2 border-orange-900 shadow-black shadow-lg -rotate-3"></div>
            <div class="absolute -top-1 -left-1 w-full h-full bg-purple-100 border-2 border-orange-900 shadow-black shadow-lg -rotate-1"></div>
            <div class="relative w-full h-full bg-purple-200 border-2 border-orange-900 shadow-black shadow-md">
              <div class="w-full h-full flex items-center justify-center">
                <p class="font-mono text-gray-800">BACKGROUND INFO</p>
              </div>
              <div class="absolute -top-3 -left-2 w-6 h-6 bg-yellow-300 rotate-45"></div>
            </div>
          </div>
        </section>

        {/* Decorative Elements */}
        <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div class="absolute top-4 left-4 w-8 h-8 border-2 border-orange-900 rounded-full"></div>
          <div class="absolute bottom-4 right-4 w-8 h-8 border-2 border-orange-900 rounded-full"></div>
          <div class="absolute top-8 right-8 w-4 h-4 bg-red-600 rounded-full shadow-black shadow-md"></div>
          <div class="absolute bottom-8 left-8 w-4 h-4 bg-red-600 rounded-full shadow-black shadow-md"></div>
          <div class="absolute bottom-1/4 right-1/3 w-16 h-16 bg-brown-900 rounded-full opacity-10"></div>
        </div>

        {/* pins */}
        {/* profile section */}
        <div clasName="z-[45]">
          <div class="absolute top-[40%] left-[42%] w-8 h-8 bg-red-500 rounded-full border-2 border-red-700 shadow-lg shadow-black z-40"></div>
          <div class="absolute top-[42%] right-[42%] w-8 h-8 bg-red-500 rounded-full border-2 border-red-700 shadow-lg shadow-black z-50"></div>
          <div class="absolute bottom-[42%] left-[42%] w-8 h-8 bg-red-500 rounded-full border-2 border-red-700 shadow-lg shadow-black z-40"></div>
          <div class="absolute bottom-[40%] right-[42%] w-8 h-8 bg-red-500 rounded-full border-2 border-red-700 shadow-lg shadow-black z-40"></div>
        </div>

        {/* key findings section */}
        <div class="absolute top-[76%] left-[10%] z-20 shadow-lg shadow-black  w-8 h-8 bg-red-500 rounded-full border-2 border-red-700"></div>

        {/* case files */}
        <div class="absolute top-[75%] right-[11%] z-20 shadow-lg shadow-black  w-8 h-8 bg-red-500 rounded-full border-2 border-red-700"></div>

        {/* background info */}
        <div class="absolute top-[5%] left-[9%] z-20 shadow-lg shadow-black  w-8 h-8 bg-red-500 rounded-full border-2 border-red-700"></div>
      
        {/* background info */}
        <div class="absolute top-[4.5%] right-[10%] z-20 shadow-lg shadow-black  w-8 h-8 bg-red-500 rounded-full border-2 border-red-700"></div>

      
      </main>
    </div>
  );
}

export default App;