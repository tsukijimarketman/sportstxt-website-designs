import React from 'react';

const InteractiveMap = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5481220172297!2d4.8853333!3d52.3717535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60964f30f3997%3A0xf78421c1b62193cc!2sNMS%20Productions%20BV!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus" 
        width="100%" 
        height="450" 
        style={{
          border: 0
        }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" 
        title="NMS Productions Location" 
        className="rounded-lg"
      />
    </div>
  );
};

export default InteractiveMap;
