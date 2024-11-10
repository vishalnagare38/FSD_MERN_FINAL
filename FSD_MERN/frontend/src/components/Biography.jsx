import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At ZEECARE Medical Institute, our mission is to deliver exceptional healthcare services with compassion, innovation, and efficiency. Founded on the principles of excellence and patient-centered care, we are dedicated to enhancing the well-being of our community through advanced medical practices and state-of-the-art facilities.
          </p>
          <p>
          Our team of highly skilled professionals includes top-tier physicians, nurses, and support staff who work collaboratively to provide comprehensive medical services. We prioritize patient safety, comfort, and satisfaction, ensuring that every individual receives personalized attention and cutting-edge treatments.
          </p>
          <p>
          With a commitment to integrating technology and continuous improvement, our hospital management system is designed to streamline operations, improve patient outcomes, and enhance overall healthcare delivery. We strive to create an environment where every patient feels valued and every staff member is empowered to make a positive impact.
          </p>
          <p>
          At ZEECARE Medical Institute, we believe in a future where exceptional care is accessible to all, and we are proud to lead the way in transforming healthcare through innovation and dedication
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
