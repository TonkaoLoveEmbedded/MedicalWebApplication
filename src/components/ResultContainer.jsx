import "../Detect.css";
import { useState } from 'react';
export default function ResultContainer() {

    return(
        
        <div className="result-container">
            <div className="result-header">
              <p className="result-title">Detection Result</p>
            </div>

            {/* Image */}
            <div className="result-image-wrapper">
              <div className="result-image-container">
                <div
                  className="result-image"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcQ6N6WbdmgEbCRYYSWt4sanxlwU1YaxRCcVhj1BCeEMk4oayeg2y-Awye15Saf8yq89K5pFG1tfyzA-IVwi0phnW3DpgB5UDrZCBlC44NLAMaS_XxVGt6jZTNZa3j4T55AMaB2vsNKCywBFGXs_sbQ55HCvwcDq-Z761srwkNcbfa7Xv786wAiMvNq-c152l7NV2uURAhKvTz0MLa_iMCGVwbkqifpKXtO0hi3OUHDAXjnT-gvXlxe91kiQ-GIpMs6fQznUNuzQk")',
                  }}
                />
              </div>
            </div>

            {/* Measurements */}
            <SectionTitle>Measurements</SectionTitle>
            <div className="result-measurements">
              <Measurement label="Distance A" value="12.5 mm" />
              <Measurement label="Distance B" value="8.2 mm" />
              <Measurement label="Angle" value="35 degrees" />
            </div>

            {/* Analysis Summary */}
            <SectionTitle>Analysis Summary</SectionTitle>
            <p className="result-summary">
              The AI model detected a fracture in the provided x-ray image. The fracture is located in the
              distal radius, with a displacement of 12.5&nbsp;mm. Further evaluation by a medical
              professional is recommended.
            </p>
          </div>

    )
}


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