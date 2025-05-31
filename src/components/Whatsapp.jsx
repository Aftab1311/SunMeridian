import React from 'react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/919555855275?text=Hi%20Vridhee%20Classes%2C%20I%20want%20to%20know%20more%20about%20your%20courses.', '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.9 11.9 0 0012.05 0C5.4 0 .01 5.39 0 12.04a11.89 11.89 0 001.67 6.14L0 24l6.03-1.58a11.94 11.94 0 006.02 1.6h.01c6.65 0 12.04-5.39 12.04-12.04a11.91 11.91 0 00-3.58-8.52zM12.06 21.5c-1.88 0-3.71-.5-5.32-1.45l-.38-.23-3.58.94.95-3.49-.25-.36a9.49 9.49 0 01-1.58-5.3c0-5.26 4.28-9.54 9.55-9.54 2.55 0 4.95 1 6.76 2.8a9.49 9.49 0 012.8 6.75c0 5.27-4.29 9.55-9.55 9.55zm5.52-7.33c-.3-.15-1.77-.88-2.05-.98-.27-.1-.46-.15-.65.15s-.75.97-.92 1.17c-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.5-1.76-1.67-2.05-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.9-2.15-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.08 2.87 1.24 3.06.15.2 2.14 3.3 5.2 4.62.73.31 1.3.49 1.75.63.74.23 1.41.2 1.94.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.09-.12-.27-.2-.57-.35z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;
