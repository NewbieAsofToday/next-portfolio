import React from "react";

const about = () => {
  return (
    <div>
      <div className='container'>
        <p>
          Since I was a kid I was always interested and curious about computers.
          I am constantly learning more about web development and I'm aiming to
          be a full stack dev.
        </p>
      </div>
      <style jsx>{`
        .container {
          width: 50vw;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default about;
