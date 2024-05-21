import { useState, useEffect } from 'react';

const CookieAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Showalert
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setShowAlert(false);
  };

  const handleDeny = () => {
    alert("Hey, just click on it, since we also don't know what we are going to do with your cookies. 😅");
  };

  return (
    <div className={`fixed bottom-5 left-0 transition-transform duration-500 transform ${showAlert ? 'translate-x-0' : '-translate-x-full'}`}>
      <div role="alert" className="flex flex-col bg-gray-800 text-white py-4 px-6 shadow-md rounded-lg">
        <div className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6 mr-2"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>We use cookies for no reason. 💀</span>
        </div>
        <div className="flex justify-center mt-2">
          <button className="btn btn-sm btn-accent btn-outline" onClick={handleDeny}>Deny</button>
          <button className="btn btn-sm btn-accent btn-primary ml-2" onClick={handleAccept}>Accept</button>
        </div>
      </div>
    </div>
  );
};

export default CookieAlert;
