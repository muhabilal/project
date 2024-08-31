
import React, { useEffect, useRef, useState } from "react";
 import "./PortFolioComponent.css"; // Import the CSS file
function PortFolioComponent({ title, desc, imageUrl, link }) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
  }, []);

  return (
    <div className="col-md-4" style={{ marginBottom: 20 }}>
      <a href={link} rel="noopener noreferrer" style={{ cursor: "pointer" }}>
        <div
          ref={imgRef}
          className="portfolio-card"
          style={{
            backgroundImage: isVisible ? `url(${imageUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
          }}
        >
          <div className="portfolio-card-img-overlay">
            <div>
              <h5 className="portfolio-card-title">{title}</h5>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
export default PortFolioComponent