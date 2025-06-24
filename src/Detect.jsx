import React from "react";
import './BoneHome.css'

export default function Detect() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          {/* ───────────────── Sidebar ───────────────── */}
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-white p-4">
              {/* Header + Menu */}
              <div className="flex flex-col gap-4">
                <h1 className="text-[#111418] text-base font-medium leading-normal">Fracture Finder</h1>

                <div className="flex flex-col gap-2">
                  {/* Dashboard */}
                  <MenuItem icon={HouseIcon} label="Dashboard" />
                  {/* New Scan */}
                  <MenuItem icon={PlusIcon} label="New Scan" />
                  {/* History (active) */}
                  <MenuItem icon={ClockIcon} label="History" active />
                  {/* Settings */}
                  <MenuItem icon={GearIcon} label="Settings" />
                  {/* Help */}
                  <MenuItem icon={QuestionIcon} label="Help" />
                </div>
              </div>

              {/* Logout */}
              <div className="flex flex-col gap-1">
                <MenuItem icon={ArrowLeftIcon} label="Logout" />
              </div>
            </div>
          </div>

          {/* ───────────────── Main Content ───────────────── */}
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Title */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Detection Result
              </p>
            </div>

            {/* Image */}
            <div className="flex w-full grow bg-white @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] rounded-lg flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcQ6N6WbdmgEbCRYYSWt4sanxlwU1YaxRCcVhj1BCeEMk4oayeg2y-Awye15Saf8yq89K5pFG1tfyzA-IVwi0phnW3DpgB5UDrZCBlC44NLAMaS_XxVGt6jZTNZa3j4T55AMaB2vsNKCywBFGXs_sbQ55HCvwcDq-Z761srwkNcbfa7Xv786wAiMvNq-c152l7NV2uURAhKvTz0MLa_iMCGVwbkqifpKXtO0hi3OUHDAXjnT-gvXlxe91kiQ-GIpMs6fQznUNuzQk")',
                  }}
                />
              </div>
            </div>

            {/* Measurements */}
            <SectionTitle>Measurements</SectionTitle>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <Measurement label="Distance A" value="12.5 mm" />
              <Measurement label="Distance B" value="8.2 mm" />
              <Measurement label="Angle" value="35 degrees" />
            </div>

            {/* Analysis Summary */}
            <SectionTitle>Analysis Summary</SectionTitle>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              The AI model detected a fracture in the provided x-ray image. The fracture is located
              in the distal radius, with a displacement of 12.5&nbsp;mm. Further evaluation by a
              medical professional is recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────── Helper Components ───────────────── */

// เมนูด้านข้าง
function MenuItem({ icon: Icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 ${
        active ? "bg-[#f0f2f5] rounded-lg" : ""
      }`}
    >
      <Icon />
      <p className="text-[#111418] text-sm font-medium leading-normal">{label}</p>
    </div>
  );
}

// ไอคอน SVG (คัดมาจากต้นฉบับ)
function HouseIcon() {
  return (
    <svg
      className="text-[#111418]"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M224,128A96,96,0,0,1,62.11,197.82a8,8,0,1,1,11-11.64A80,80,0,1,0,71.43,71.43C67.9,75,64.58,78.51,61.35,82L77.66,98.34A8,8,0,0,1,72,112H32a8,8,0,0,1-8-8V64a8,8,0,0,1,13.66-5.66L50,70.7c3.22-3.49,6.54-7,10.06-10.55A96,96,0,0,1,224,128Z" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg
      className="text-[#111418]"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Z" />
    </svg>
  );
}
function QuestionIcon() {
  return (
    <svg
      className="text-[#111418]"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Z" />
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
