import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Detect from './Detect'; // <--- สำคัญมาก
import { useNavigate, Routes, Route } from 'react-router-dom';
//import './App.css'
import './BoneHome.css'
function BoneHome() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/Detect'); // เปลี่ยนเส้นทางไปหน้าต่อไป
  };
  return (
  <div
    className="AllComponent"
    style={{ fontFamily: 'Inter, "Noto Sans", sans-serif'}}
  >
    <div className="AllLayoutContainer">
      <header className="HeadMenu">
        <div className="HeaderMenuSubLogoAndText">
          <div className="SizeSvg" >
            <svg viewBox="0 0 48 48" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
            Fracture Finder
          </h2>
        </div>
        <div className="HeadMenuSubButton">
          <div className="HeadMenuSubTextBot">
            <a className="EachTextButtom" id='HowWorks' href="#">
              How it works
            </a>
            <a className="EachTextButtom" id='Pricing' href="#">
              Pricing
            </a>
            <a className="EachTextButtom" id='Contact' href="#">
              Contact
            </a>
          </div>
          <div className="ButtomUpAndLogBroder">
            <button className="ButtomUpAndLog">
              <span className="truncate">Upload</span>
            </button>
            <button className="ButtomUpAndLog" onClick={handleLoginClick}>
              <span className="truncate">Login</span>
            </button>
          </div>
        </div>
      </header>

      <div className="AllBody">
        <div className="AllBody2">
          <div className="ContainerIm">
            <div className="ContainerImNd">
              <div
                className="BgImage"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzAJch6_1POaCsQZafThhc6jonPj-HRTNSnWHuDsXDdiSYL-UauYsu4xxbZDPR1ovW6Vzu1O36KdpVW48GFAbpJF-O5njRly8cK1Tu1b3ZyiNhP15pHtzpx0uva1WQTfnuQjDEoPZUkgnUiUXcsNCxi4EzG0RUQt6c3G2KEgN5gVsMuT1mrIwgKCfUTyRjWVR-OREs7A1k3m5T-9qtYmh4zbGc7TsnAD92cC9uymjaeMCaG7RJpifSi4uwB8g0Z_3xfbGQvfrlbCc")',
                }}
              >
                <div className="HeaderInBg">
                  <h1 className="TextDiscriptHeat" >
                   Detect
                  </h1>
                  <h2 className="TextDiscriptHeat" >
                    Bone Fractures
                  </h2>
                  <h1 className="TextDiscriptHeat">
                    With AI
                  </h1>
                  <h4 className="DiscriptionHeader" style={{ textIndent: '4em' }}>
                    Upload your x-ray images and let our advanced AI algorithms analyze them for potential
                    fractures. Get results in seconds.
                  </h4>
                </div>
                <button className="UploadButtonContain">
                  <span className="truncate">Upload Image</span>
                </button>
              </div>
            </div>
          </div>

          <div className="AboutUs">
            <div className="AboutUsHowWork">
              <h2 className="HowItWork" style={{alignItems: "start", marginBottom: "5px"}}>
                How it works
              </h2>
              <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]" style={{ textIndent: '2em' }}>
                Our AI-powered system analyzes x-ray images to detect potential bone fractures. Simply upload your
                image, and our algorithms will provide a detailed analysis within seconds.
              </p>
            </div>

            <div className="ButtomComp">
              <div className="ButtomCompSub">
                <div
                  className="text-[#111418]"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight">Accurate Detection</h2>
                  <p className="text-[#60758a] text-sm font-normal leading-normal" style={{ textIndent: '2em' }}>
                    Our AI algorithms are trained on a vast dataset of x-ray images to ensure high accuracy in fracture detection.
                  </p>
                </div>
              </div>

              <div className="ButtomCompSub">
                <div className="text-[#111418]" data-icon="Clock" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight">Fast Results</h2>
                  <p className="text-[#60758a] text-sm font-normal leading-normal" style={{ textIndent: '2em' }}>
                    Receive analysis results within seconds, allowing for quick decision-making.
                  </p>
                </div>
              </div>

              <div className="ButtomCompSub">
                <div className="text-[#111418]" data-icon="ShieldCheck" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#111418] text-base font-bold leading-tight">Secure &amp; Private</h2>
                  <p className="text-[#60758a] text-sm font-normal leading-normal" style={{ textIndent: '2em' }}>
                    Your data is encrypted and stored securely, ensuring complete privacy and confidentiality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="BottomContainer">
            <div className="SubCon">
              <div className="UnderComp">
                <h2 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-[720px]">
                  Ready to get started?
                </h2>
                <p className="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
                  Upload your x-ray image now and experience the power of AI-driven fracture detection.
                </p>
              </div>
              <div className="GetStartButton">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                  <span className="truncate">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex justify-center">
        <div className="SubTextCon">
          <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
              <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="#">
                Terms of Service
              </a>
              <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="#">
                Privacy Policy
              </a>
              <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="#">
                Contact Us
              </a>
            </div>
            <p className="text-[#60758a] text-base font-normal leading-normal">
              © 2024 Fracture Finder. All rights reserved.
            </p>
          </footer>
        </div>
      </footer>
    </div>
  </div>
);

}

export default BoneHome
