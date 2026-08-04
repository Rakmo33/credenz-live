import React, { useEffect, useState } from "react";
import "./BackendWakeNotice.css";

const BackendWakeNotice = () => {
  const [slowRequests, setSlowRequests] = useState([]);

  useEffect(() => {
    const showNotice = (event) => {
      setSlowRequests((current) => [...current, event.detail.id]);
    };
    const hideNotice = (event) => {
      setSlowRequests((current) =>
        current.filter((id) => id !== event.detail.id)
      );
    };

    window.addEventListener("api-request-slow", showNotice);
    window.addEventListener("api-request-finished", hideNotice);
    return () => {
      window.removeEventListener("api-request-slow", showNotice);
      window.removeEventListener("api-request-finished", hideNotice);
    };
  }, []);

  if (slowRequests.length === 0) return null;

  return (
    <div className='backend-wake-notice' role='status' aria-live='polite'>
      The server is waking up after a period of inactivity. This may take up to
      a minute—thanks for your patience.
    </div>
  );
};

export default BackendWakeNotice;

