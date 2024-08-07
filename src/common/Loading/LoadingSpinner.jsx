import React from "react";
import { ClimbingBoxLoader, RingLoader, PacmanLoader } from "react-spinners";
import "./LoadingSpinner.style.css";

const LoadingSpinner = ({version}) => {
    
  if (version=="version1"){
    return (
        <div className="spinner-section">
          <PacmanLoader
            color="white"
            //   loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )
  }
    
  if (version=="version2"){
    return (
        <div className="spinner-section">
          <ClimbingBoxLoader
            color="white"
            //   loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )
  }
    
  return (
    <div className="spinner-section">
      <RingLoader
        color="white"
        //   loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
