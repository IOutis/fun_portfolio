import { createSignal ,createEffect, Show} from "solid-js";
import { BsPinAngleFill } from 'solid-icons/bs'
import Section from "./components/Section";
function App() {
  const [isFullScreen, setIsFullScreen] = createSignal(false);
  const [isPortrait, setIsPortrait] = createSignal(false);
  const [screenWidth, setScreenWidth] = createSignal(window.innerWidth);
  const [screenHeight, setScreenHeight] = createSignal(window.innerHeight);
  const [isModalOpen, setIsModalOpen] = createSignal(false);
  const [modalData, setModalData] = createSignal([]);
  const [modalTitle, setModalTitle] = createSignal("");
  const [isProfile, setIsProfile] = createSignal(false);

  const updateScreenDimensions = async () => {
    setScreenWidth(screen.width);
    setScreenHeight(screen.height);
    setTimeout(1000);
    setTimeout(1000);
    console.log("screen width : ",screenWidth(),", Height : ",screenHeight())
    
  };
  createEffect(()=>{

    if(screenWidth<768){
      setIsPortrait(true);
    }

  },screenHeight,screenWidth)

  // Function to check orientation
  const checkOrientation = () => {
    updateScreenDimensions()
    if(screen.width<700){
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }
    console.log("screen width/height : ", (screen.width/screenHeight()))
    console.log("screen width/height : ", (1534/725))
    // console.log("screen width < 700: ",screenWidth() < 700)
  };

  // Effect to add and remove event listeners
  createEffect(() => {
    checkOrientation(); // Initial check
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    console.log("Portrait = ",isPortrait())
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  },isPortrait());

  const openCard = (str)=>{
    const clickSound = new Audio('flip_card.mp3');
    // alert("Playing sound")
    clickSound.play();
    // alert("played")
    console.log("open : ",str);
    const languages= [
      { name: "Python", proficiency: "Competent" },
      { name: "C", proficiency: "Skilled" },
      { name: "C++", proficiency: "Foundational" },
      { name: "Java", proficiency: "Foundational" }
    ]
    const webTechnologies= [
      { name: "HTML", proficiency: "Highly Competent" },
      { name: "CSS", proficiency: "Skilled" },
      { name: "JavaScript", proficiency: "Skilled" },
      { name: "Tailwind CSS", proficiency: "Skilled" },
      { name: "Bootstrap", proficiency: "Skilled" }
    ]
    const librariesAndFrameworks= [
      { name: "React", proficiency: "Proficient" },
      { name: "NextJS", proficiency: "Foundational" },
      { name: "NodeJS", proficiency: "Foundational" },
      { name: "Django", proficiency: "Proficient" }
    ]
    const databases= [
      { name: "SQL", proficiency: "Foundational" },
      { name: "MySQL", proficiency: "Foundational" },
      { name: "MongoDB", proficiency: "Foundational" }
    ]

    const profile = [
      { name: "Name", value: "Rahul" },
      { name: "Age", value: "25" },
      { name: "Location", value: "Bangalore" },

    ]
    if(str==="lang"){
      setModalData(languages);
      setIsModalOpen(true);
      setModalTitle("Programming Languages")
    }
    else if(str==="web"){
      setModalData(webTechnologies);
      setIsModalOpen(true);
      setModalTitle("Web Technologies")
    }
    else if(str==="lib"){
        setModalData(librariesAndFrameworks);
        setIsModalOpen(true);
        setModalTitle("Libraries and Frameworks")
    }
    else if(str==="db"){
          setModalData(databases);
          setIsModalOpen(true);
          setModalTitle("Databases")
    }
    else if(str==="profile"){
      setModalData(profile);
      setIsModalOpen(true);
      setIsProfile(true);
      setModalTitle("Profile")

    }

    console.log("card : ",cardClicked())
  }


  return (
    <>
    <Show when={isPortrait()}>
        <div class="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center text-white p-4">
          <div class="animate-bounce mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold mb-4 text-center">Please Rotate Your Device</h2>
          <p class="text-center">This experience is best viewed in landscape mode</p>
        </div>
      </Show>
    <div class="relative h-[725px] max-h-[725px] w-[1534px] aspect-[1534/725] bg-gray-800  flex items-center justify-center overflow-hidden">

      <main
        class="relative w-[90%] h-[85%] bg-[#431407] border-orange-900 border-8 shadow-black shadow-2xl transition-all duration-500 cursor-pointer shadow-inner shadow-black"
        classList={{
          "scale-100": !isFullScreen(),
          "scale-105 mt-16": isFullScreen(),
        }}
        style={{ transformOrigin: "center" }}
        
        // onClick={toggleFullScreen}
      >
        
        



        {/* Profile/Image Section (Center) */}
        <section
          id="image"

          className="absolute bg-white w-[20%] h-[20%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-orange-900 shadow-black shadow-md  rotate-3 "
        >
          <div class="h-full w-full flex flex-col items-center justify-center bg-white/90 p-4" onClick={()=>openCard("profile")}>
            <div class="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
            <p class="font-mono font-bold text-gray-800 text-xl mb-2">AGENT PROFILE</p>
            <p class="font-mono text-gray-600 text-sm">TOP SECRET</p>
            <p class="font-mono text-gray-600 text-sm">View Intel</p>
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
          {/* children of the skills start here */}
          
          
          <div className=" group absolute top-[129%] -left-[21%] bg-white w-full h-[120px] p-4 rotate-12 shadow-black shadow-md transition-all duration-300 ease-in-out origin-top hover:rotate-0 " onClick={()=>{openCard("lang")}}>            
            <p class="font-mono text-gray-800 text-md">Languages</p>
            
                  <div>
                    <div className="absolute top-[42%] w-10 h-10 rounded-full  border-2 border-white bg-white z-40">
                    <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="full" width="full" style="overflow: visible; color: currentcolor;"><path d="m14.25.18.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path></svg>
                    </div>
                    <div className="absolute top-[42%] left-[25%] w-10 h-10 rounded-full border-2 border-white bg-white border-2 z-30">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="full" height="full" viewBox="0 0 48 48">
                          <path fill="#000000" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path fill="#222222" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path fill="#111111" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path>
                          </svg>
                    </div>
                    <div className="absolute top-[42%] left-[40%] w-10 h-10 rounded-full border-2 border-white bg-white z-20">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="full" height="full" viewBox="0 0 50 50">
                        <path d="M 43.910156 12.003906 L 27.070313 2.539063 C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.929688 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.070313 47.460938 L 43.910156 37.996094 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 Z M 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 C 28.78125 13 32.273438 14.753906 34.542969 17.742188 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.257813 C 32.273438 35.246094 28.78125 37 25 37 Z M 37 26 L 35 26 L 35 28 L 33 28 L 33 26 L 31 26 L 31 24 L 33 24 L 33 22 L 35 22 L 35 24 L 37 24 Z M 44 26 L 42 26 L 42 28 L 40 28 L 40 26 L 38 26 L 38 24 L 40 24 L 40 22 L 42 22 L 42 24 L 44 24 Z"></path>
                        </svg>              
                    </div>
                    <div className="absolute top-[42%] left-[55%] w-10 h-10 rounded-full border-2 border-white bg-white z-10">
                    <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="full" width="full" style="overflow: visible; color: currentcolor;"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>
                    </div>
                  </div>
                  <p className="font-mono text-gray-800 text-xs absolute bottom-[10%] left-[25%]">View Intel</p>
                  {/* <div className="absolute z-100 -bottom-6 left-[24%] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:block bg-black text-white text-md rounded-md px-2 py-1">
                      Click to view intel
                  </div> */}
            </div>

          
       



          {/* web technologies */}
          <div className="absolute top-[24%] left-[150%] bg-white w-full h-[120px] p-4 origin-[90%_3%] rotate-[12deg] shadow-black shadow-md transition-all duration-300 ease-in-out origin-[100%_10%] hover:rotate-[3deg]" onClick={()=>{openCard("web")}}>
            <p className="font-mono text-gray-800 mb-2 text-sm">Web Technologies</p>
            <div>
                <div className="absolute w-10 h-10 rounded-full left-[0] z-50 border-1 p-[3px] border-white bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="full" height="full" viewBox="0 0 48 48">
                    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                    </svg>
                </div>
                <div className="absolute w-10 h-10 bg-white  p-[3px] top-[38%] left-[20%]  rounded-full z-30">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="full" height="full" viewBox="0 0 48 48">
                    <linearGradient id="TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1" x1="16.33" x2="32.293" y1="-2.748" y2="41.109" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1)" d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"></path><path fill="#35c1f1" d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"></path><path fill="#fff" d="M33.1,13H24v4h4.9l-0.3,4H24v4h4.4l-0.3,4.5L24,30.9v4.2l7.9-2.6L32.6,21l0,0L33.1,13z"></path><path fill="#d6e0e9" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4	L19.8,27z"></path><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M34.164,12H33.1H24h-9.2h-1.078l0.081,1.075l0.3,4L14.172,18H15.1H24h3.822l-0.15,2H24h-4.6h-1.051 l0.052,1.05l0.2,4L18.649,26H15.8h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6 l0.644-0.212l0.041-0.677l0.7-11.5l0.5-7.998L34.164,12L34.164,12z M20.761,26H24h3.331l-0.185,2.769L24,29.843l-3.128-1.068 l-0.073-1.815L20.761,26L20.761,26z" opacity=".05"></path><path d="M33.1,13l-0.5,8l-0.7,11.5L24,35.1l-7.9-2.6L15.8,27h4l0.1,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-4.4l-0.2-4H24h4.6l0.3-4H24 h-8.9l-0.3-4H24H33.1 M33.632,12.5H33.1H24h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463H15.1H24h4.361l-0.225,3H24h-4.6h-0.526 l0.026,0.525l0.2,4l0.024,0.475H19.6H24h3.866l-0.242,3.634L24,30.372l-3.614-1.234L20.3,26.98L20.28,26.5H19.8h-4h-0.528 l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6L24,35.626l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.5-7.999 L33.632,12.5L33.632,12.5z" opacity=".07"></path>
                    </svg>
                </div>
                <div className="absolute w-10 bg-white h-10 border-2 border-white top-[38%] p-[3px] left-[37%]  rounded-full z-20">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="full" height="full" viewBox="0 0 48 48">
                  <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
                  </svg>
                </div>
                <div className="absolute w-10 bg-white h-10 top-[38%] left-[53%] p-[7px]  rounded-full z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="full" height="full" viewBox="0 0 50 50">
                    <path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"></path>
                    </svg>
                </div>
                <span className=" absolute top-[43%] left-[71%] bg-green-500 px-2 py-1 rounded text-sm text-gray-900">+1</span>
                {/* <div class="absolute -bottom-3 -left-2 w-6 h-6 bg-yellow-300 rotate-45 shadow-md shadow-black"></div> */}
                <p className="font-mono text-gray-800 text-xs absolute bottom-[10%] left-[25%]">View Intel</p>

          </div>



          </div>
          <div
              className="absolute top-[27%] left-[238%] bg-white w-full h-[120px] p-4 -rotate-[5deg] shadow-black shadow-md transition-all duration-300 ease-in-out origin-[10%_3%] hover:rotate-[0deg]"
              onClick={() => { openCard("lib"); }}
          >
                  <p className="font-mono text-sm text-gray-900 ml-[15%]">Frameworks</p>
                  <div>
                  <div className="absolute top-[45%] left-[5%] w-10 h-10 rounded-full z-50 border-[2px] border-white p-[3px] border-white bg-white">
                      <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="full" width="full" style="overflow: visible; color: currentcolor;"><path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9Zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 0 0-64.18-10.16 481.27 481.27 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0 1 16.12 42.32 434.44 434.44 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48Zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 0 1-15.37 41.39Zm-98.24-107.45a439.75 439.75 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18ZM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 0 0 201 160.51a499.12 499.12 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83Zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0 0 23.4 60.75 502.46 502.46 0 0 0-23.69 61.58Zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0 0 64.69 9.39 501.2 501.2 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 0 1-28.2 34.74Zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0 0 40.23-51.2 477.84 477.84 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47Zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 0 0-24.31-60.94 481.52 481.52 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52Z"></path><path d="M256 298.55a43 43 0 1 0-42.86-43 42.91 42.91 0 0 0 42.86 43Z"></path></svg>
                  </div>

                  <div className="absolute top-[44%] left-[25%] w-10 h-10 rounded-full z-40 border-[2px] border-white p-[3px] border-white bg-white" >
                  <svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-solidjs" width="full" height="full" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 17.5c4.667 3 8 4.5 10 4.5c2.5 0 4 -1.5 4 -3.5s-1.5 -3.5 -4 -3.5c-2 0 -5.333 .833 -10 2.5z"></path><path d="M5 13.5c4.667 -1.667 8 -2.5 10 -2.5c2.5 0 4 1.5 4 3.5c0 .738 -.204 1.408 -.588 1.96l-2.883 3.825"></path><path d="M22 6.5c-4 -3 -8 -4.5 -10 -4.5c-2.04 0 -2.618 .463 -3.419 1.545"></path><path d="M2 17.5l3 -4"></path><path d="M22 6.5l-3 4"></path><path d="M8.581 3.545l-2.953 3.711"></path><path d="M7.416 12.662c-1.51 -.476 -2.416 -1.479 -2.416 -3.162c0 -2.5 1.5 -3.5 4 -3.5c1.688 0 5.087 1.068 8.198 3.204a114.76 114.76 0 0 1 1.802 1.296l-2.302 .785"></path></svg>
                  </div>
                  <div className="absolute top-[43%] left-[45%] w-10 h-10 rounded-full z-30 border-[2px] border-white p-[3px] border-white bg-white" >
                  <svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-nextjs" width="full" height="full" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path><path d="M15 12v-3"></path></svg>
                  </div>
                  <div className="absolute top-[42%] left-[65%] w-10 h-10 rounded-full z-20 border-[2px] border-white p-[3px] border-white bg-white" >
                  <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="full" width="full" style="overflow: visible; color: currentcolor;"><path d="M7.533 12.249c-.011 1.985 1.445 3.168 3.768 2.63V9.618c-2.352-.716-3.758.733-3.768 2.631m3.839-10.238h3.199v15.143c-3.066.501-6.004.819-8.104-.355-2.705-1.513-2.923-6.319-.782-8.46 1.085-1.085 3.271-1.85 5.616-1.351V2.225c-.006-.101-.012-.202.071-.214m8.389 3.342h-3.199V2.011h3.199v3.342z"></path><path d="M19.761 7.044c-.003 2.356-.003 4.048-.003 6.911-.136 2.813-.104 5.052-1.135 6.398-.203.266-.634.652-.995.924-.303.228-.881.691-1.208.711-.331.021-1.18-.459-1.564-.64-.505-.237-.971-.553-1.493-.71 1.218-.754 2.372-1.32 2.844-2.844.41-1.326.355-3.247.355-5.119 0-1.849.009-3.998.009-5.63l3.19-.001z"></path></svg>
                  </div>
                  </div>
                  <p className="font-mono text-gray-800 text-xs absolute bottom-[8%] left-[25%]">View Intel</p>

          </div>




          <div className="absolute top-[135%] left-[110%] bg-white w-full h-[120px] p-4 rotate-12 shadow-black shadow-md transition-all duration-300 ease-in-out origin-top hover:rotate-0 " onClick={()=>{openCard("db")}}>
            <p className="font-mono text-gray-900 text-sm">DataBases and other tools</p>
            <div>
            <div className="absolute top-[47%] left-[5%] w-10 h-10 rounded-full z-50 border-[2px] border-white p-[3px] border-white bg-white">
                <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="full" width="full" style="overflow: visible; color: currentcolor;"><path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 0 1-.48-.48L12 9l.45 10a3.57 3.57 0 0 1-.45.48z"></path></svg>            
            </div>

            <div className="absolute top-[48%] left-[25%] w-11 h-11 rounded-full z-40 border-[2px] border-white p-[3px] border-white bg-white" >
                <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="full" width="full" style="overflow: visible; color: currentcolor;"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 0 0 .3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 0 0-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 0 0-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 0 0-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 0 0-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 0 1-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 0 1-.35-.4 8.76 8.76 0 0 1-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 0 1-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 0 1 2.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path></svg>            
            </div>
            <div className="absolute top-[52%] left-[50%] w-10 h-10 rounded-full z-30 border-[2px] border-white p-[3px] border-white bg-white" >
                {/* <svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sql" width="full" height="full" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"></path><path d="M17 8v8h4"></path><path d="M13 15l1 1"></path><path d="M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1"></path></svg>             */}
                <svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sql" width="full" height="full" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"></path><path d="M17 8v8h4"></path><path d="M13 15l1 1"></path><path d="M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1"></path></svg>
            </div>
            <div className="absolute top-[52%] left-[75%] w-10 h-10 rounded-full z-20 border-[2px] border-white p-[3px] border-white bg-white" >
                  <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="full" width="full" style="overflow: visible; color: currentcolor;"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>            
            </div>

            </div>
            <p className="font-mono text-gray-800 text-xs absolute bottom-[5%] left-[25%]">View Intel</p>
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
        <div className="z-[45]">
          <div class="absolute top-[40.5%] left-[42%] w-6 h-6 bg-red-500 rounded-full border-2 border-red-700 shadow-lg shadow-black z-40"></div>
          <div class="absolute top-[42%] right-[42%] w-6 h-6 bg-red-500 rounded-full border-2 border-red-700 shadow-lg shadow-black z-50"></div>
          <div class="absolute bottom-[42%] left-[42%] w-6 h-6 bg-red-500 rounded-full border-2 border-red-700 shadow-lg shadow-black z-40"></div>
          <div class="absolute bottom-[41%] right-[42%] w-6 h-6 bg-red-500 rounded-full border-2 border-red-700 shadow-lg shadow-black z-40"></div>
        </div>

        {/* key findings section -strengths */}
        <div class="absolute top-[76.5%] left-[10.5%] z-20 shadow-lg shadow-black  w-6 h-6 bg-red-500 rounded-full border-2 border-red-700"></div>

        {/* case files - projects */}
        <div class="absolute top-[75.5%] right-[11%] z-20 shadow-lg shadow-black  w-6 h-6 bg-red-500 rounded-full border-2 border-red-700"></div>

        {/* evidence list - skills */}
        <div class="absolute top-[6.5%] left-[9.5%] z-20 shadow-lg shadow-black  w-6 h-6 bg-red-500 rounded-full border-2 border-red-700"></div>
      
        {/* background info - education */}
        <div class="absolute top-[4.5%] right-[10%] z-20 shadow-lg shadow-black  w-6 h-6 bg-red-500 rounded-full border-2 border-red-700"></div>

         {/* skills */}
        {/* connecting pin of skills */}
        <div class="absolute top-[19%] left-[10%] z-20 shadow-lg shadow-black  w-6 h-6 bg-red-500 rounded-full border-2 border-red-700"></div>
        {/* programming languages */}
        <div class="absolute top-[31.5%] left-[8.9%] z-20 shadow-lg shadow-black  w-4 h-4 bg-red-500 rounded-full border-2 border-red-700"></div>

        {/* webtechnologies and frameworks */}
        {/* common pin */}
        <div class="absolute top-[5.5%] left-[35%] z-20 shadow-lg shadow-black  w-4 h-4 bg-red-500 rounded-full border-2 border-red-700"></div>
        
        {/* databases */}
        <div class="absolute top-[29%] left-[25%] z-20 shadow-lg shadow-black  w-4 h-4 bg-red-500 rounded-full border-2 border-red-700"></div>



        {/* lines or red strings */}
        <div class="absolute inset-0 pointer-events-none">
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
              {/* Evidence list - programming languages */}
              <line x1="10.8%" y1="21.5%" x2="9.5%" y2="33%" stroke="#EF4444" stroke-width="1"/>
              {/* Evidence list - web technologies + framework */}
              <line x1="10.8%" y1="21.5%" x2="35.5%" y2="7%" stroke="#EF4444" stroke-width="1"/>
              {/* Evidence list- databases */}
              <line x1="10.8%" y1="21.5%" x2="25.5%" y2="30.5%" stroke="#EF4444" stroke-width="1"/>



              {/* background info string */}
              <line x1="89%" y1="7%" x2="57%" y2="45%" stroke="#EF4444" stroke-width="2"/>

              {/* key findings */}
              <line x1="11%" y1="79%" x2="43%" y2="56%" stroke="#EF4444" stroke-width="2"/>

              {/* case files */}
              <line x1="87.5%" y1="77.5%" x2="56.5%" y2="57%" stroke="#EF4444" stroke-width="2"/>
            </g>
          </svg>
        </div>


        <Section data={modalData()} title={modalTitle()} isProfile={isProfile()}  isOpen={isModalOpen()} onClose={() => {setIsModalOpen(false); setIsProfile(false)}} />

      </main>
    </div>
    </>
  );
}

export default App;