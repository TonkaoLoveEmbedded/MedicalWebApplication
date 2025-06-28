import './Detect.css'
import { useState } from 'react';
import './components/FractureUploader.css'
import { AnimatePresence, motion } from 'framer-motion';
import ResultContainer from "./components/ResultContainer.jsx";
import FractureUploader from "./components/FractureUploader.jsx";


export default function Detect() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  return (
    <div
      className="AllPage"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="AllLayout">
        <div className="AllComponentDetect">
          {/* ───────────────── Sidebar ───────────────── */}
          
            <div className="LeftComp">
              {/* Header + Menu */}
              <div className="LeftCompNoLogout">
                <h2 className="text-[#111418] text-base font-medium leading-normal">Fracture Finder</h2>

                <div className="ItemLeftBar">
                  
                  <MenuItem 
                    icon={HouseIcon}
                    label="Dashboard" 
                    active={activeItem === "Dashboard"}
                    onClick={() => {
                      console.log("Dashboard")
                      setActiveItem("Dashboard")
                      }
                    }/>
                  
                  <MenuItem 
                    icon={PlusIcon} 
                    label="New Scan" 
                    active={activeItem === "New Scan"}
                    onClick={() => {
                      console.log("New Scan")
                      setActiveItem("New Scan")
                      }}
                    />
                  
                  <MenuItem 
                    icon={ClockIcon} 
                    label="History" 
                    active = {activeItem === "History"}
                    onClick={() => {
                      console.log("History")
                      setActiveItem("History");
                      }}
                    />
          
                  <MenuItem 
                  icon={GearIcon} 
                  label="Settings" 
                  active={activeItem === "Settings"}
                  onClick={() => {
                    console.log("Settings");
                    setActiveItem("Settings");
                    }}
                  />

                  <MenuItem 
                  icon={QuestionIcon} 
                  label="Help" 
                  active={activeItem === "Help"}
                  onClick={() => {
                    console.log("Help")
                    setActiveItem("Help")
                    }}
                  />
                </div>
              </div>

              {/* Logout */}
              <div className="LeftCompLogout">
                <MenuItem 
                icon={ArrowLeftIcon} 
                label="Logout" 
                active={activeItem === "Logout"}
                onClick={() => {
                  console.log("Logout");
                  setActiveItem("Logout");
                }}
              />
              </div>
            </div>
          

          {/* ───────────────── Main Content ───────────────── */}
          <div className="result-scroll-wrapper">
            {activeItem === "Dashboard" && <ResultContainer />}
            {activeItem === "New Scan" && <FractureUploader />}
          </div>
          
        </div>
      </div>
    </div>
  );
}

/* ───────────────── Helper Components ───────────────── */

// เมนูด้านข้าง
function MenuItem({ icon: Icon, label, active, onClick }) {
  return (
    <div className= {`EachIconAndText ${active ? "active" : ""}`}  onClick={onClick} aria-current={active ? "page" : undefined}>
      <Icon />
      <p className="TextUnderIcon">{label}</p>
    </div>
  );
}


function HouseIcon() {
  return (
    <svg
      className="text-[#111418]"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      style={{ marginRight: "8px" }}
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77Z" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg
      className="text-[#111418]"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      style={{ marginRight: "8px" }}
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      className="text-[#111418]"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      style={{ marginRight: "8px" }}
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M224,128A96,96,0,0,1,62.11,197.82a8,8,0,1,1,11-11.64A80,80,0,1,0,71.43,71.43C67.9,75,64.58,78.51,61.35,82L77.66,98.34A8,8,0,0,1,72,112H32a8,8,0,0,1-8-8V64a8,8,0,0,1,13.66-5.66L50,70.7c3.22-3.49,6.54-7,10.06-10.55A96,96,0,0,1,224,128Z" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      style={{ marginRight: "8px" }}
      viewBox="0 0 56 56">
        <path fill="currentColor" 
          fillRule="evenodd" d="M22.792 51.433a23.847 23.847 0 0 1-6.878-2.694l.124-2.425c.169-3.307-2.384-5.85-5.682-5.682l-2.68.137a23.871 23.871 0 0 1-2.854-6.517l2.104-1.9c2.458-2.218 2.452-5.822 0-8.035l-2.243-2.025A23.852 23.852 0 0 1 7.28 15.88l3.076.157c3.307.169 5.85-2.384 5.682-5.682L15.88 7.28a23.852 23.852 0 0 1 6.41-2.597l2.026 2.243c2.22 2.458 5.823 2.452 8.036 0l1.9-2.104a23.871 23.871 0 0 1 6.516 2.853l-.137 2.68c-.169 3.308 2.384 5.851 5.682 5.683l2.425-.124a23.847 23.847 0 0 1 2.694 6.878l-1.69 1.525c-2.457 2.22-2.45 5.823 0 8.036l1.561 1.408a23.864 23.864 0 0 1-2.958 6.975l-2.032-.104c-3.307-.169-5.85 2.384-5.682 5.682l.104 2.032a23.864 23.864 0 0 1-6.975 2.958l-1.408-1.56c-2.22-2.458-5.823-2.452-8.036 0zM28 38c5.523 0 10-4.477 10-10s-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10"
        />
    </svg>
  );
}
function QuestionIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="22" 
    height="22" 
    style={{ marginRight: "10px", marginLeft: "1px"}}
    viewBox="0 0 1024 1024">
      <path 
        fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512.017-229.216 512.017-512C1024.017 229.232 794.785 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448.017 200.977 448.017 448S759.025 961.009 512 961.009zm-47.056-160.529h80.512v-81.248h-80.512zm46.112-576.944c-46.88 0-85.503 12.64-115.839 37.889c-30.336 25.263-45.088 75.855-44.336 117.775l1.184 2.336h73.44c0-25.008 8.336-60.944 25.008-73.84c16.656-12.88 36.848-19.328 60.56-19.328c27.328 0 48.336 7.424 63.073 22.271c14.72 14.848 22.063 36.08 22.063 63.664c0 23.184-5.44 42.976-16.368 59.376c-10.96 16.4-29.328 39.841-55.088 70.322c-26.576 23.967-42.992 43.231-49.232 57.807c-6.256 14.592-9.504 40.768-9.744 78.512h76.96c0-23.68 1.503-41.136 4.496-52.336c2.975-11.184 11.504-23.823 25.568-37.888c30.224-29.152 54.496-57.664 72.88-85.551c18.336-27.857 27.52-58.593 27.52-92.193c0-46.88-14.176-83.408-42.577-109.568c-28.416-26.176-68.272-39.248-119.568-39.248z"
        />
    </svg>
  );
}
function ArrowLeftIcon() {
  return (
    <svg
      className="text-[#111418]"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      style={{ marginRight: "8px" }}
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
    </svg>
  );
}

// หัวข้อย่อย
function SectionTitle({ children }) {
  return (
    <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
      {children}
    </h3>
  );
}

// บรรทัด Measurement
function Measurement({ label, value }) {
  return (
    <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
      <p className="text-[#60758a] text-sm font-normal leading-normal">{label}</p>
      <p className="text-[#111418] text-sm font-normal leading-normal">{value}</p>
    </div>
  );
}
