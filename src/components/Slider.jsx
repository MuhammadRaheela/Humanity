import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import humanity1 from "../images/humanity1.jpg";
import humanity2 from "../images/humanity2.jpg";
import humanity3 from "../images/humanity3.jpg";
import humanity4 from "../images/humanity4.jpg";
import humanity5 from "../images/humanity5.jpg";
import humanity6 from "../images/humanity6.jpg";
import humanity7 from "../images/humanity6.jpg";



const Slider = () => {
  const slidesRef = useRef([]);
  const [current, setCurrent] = useState(0);

  const slides = [
  {
    image: humanity1,
    content: (
      <div>
        <h1 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
          Humanity in the Mountains 
        </h1>
        <p style={{ fontSize: "13px", lineHeight: "1.5" }}>
          Just like these mountains have stood for thousands of years, humanity
          must stand together through challenges and storms. True greatness is
          not in wealth or power, but in the ability to care for those around
          us. Every kind gesture is like planting a seed on a mountain slope —
          it may seem small now, but over time, it can grow into a forest of
          compassion that shelters generations.
        </p>
      </div>
    ),
    position: "left",
  },
  {
    image: humanity2,
    content: (
      <div>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          Peaceful Waters of Humanity 
        </h2>
        <p style={{ fontSize: "13px", lineHeight: "1.5" }}>
          Calmness flows when we help one another without expecting anything in
          return. The lake reflects the sky just as our actions reflect the
          purity of our hearts. In a world often filled with noise and division,
          humanity shines brightest when we listen, understand, and share. Every
          drop of kindness joins to create a vast ocean of peace, and that ocean
          has the power to heal wounds we cannot see.
        </p>
      </div>
    ),
    position: "center",
  },
  {
    image: humanity3,
    content: (
      <div>
        <h1 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
          Sun of Kindness 
        </h1>
        <p style={{ fontSize: "13px", lineHeight: "1.5" }}>
          The warmth of kindness can brighten even the darkest corners of the
          world. Just as the sun gives without asking for anything back, true
          humanity lies in giving selflessly. When we offer a helping hand, we
          do more than solve a problem — we restore hope, dignity, and trust. In
          every smile we inspire and every tear we dry, we keep the flame of
          humanity burning for generations to come.
        </p>
      </div>
    ),
    position: "right",
  },
    {
    image: humanity4,
    content: (
      <div>
        <h1 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
          Sun of Kindness 
        </h1>
        <p style={{ fontSize: "13px", lineHeight: "1.5" }}>
          The warmth of kindness can brighten even the darkest corners of the
          world. Just as the sun gives without asking for anything back, true
          humanity lies in giving selflessly. When we offer a helping hand, we
          do more than solve a problem — we restore hope, dignity, and trust. In
          every smile we inspire and every tear we dry, we keep the flame of
          humanity burning for generations to come.
        </p>
      </div>
    ),
    position: "right",
  },
    {
    image: humanity5,
    content: (
      <div>
        <h1 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
          Sun of Kindness 
        </h1>
        <p style={{ fontSize: "13px", lineHeight: "1.5" }}>
          The warmth of kindness can brighten even the darkest corners of the
          world. Just as the sun gives without asking for anything back, true
          humanity lies in giving selflessly. When we offer a helping hand, we
          do more than solve a problem — we restore hope, dignity, and trust. In
          every smile we inspire and every tear we dry, we keep the flame of
          humanity burning for generations to come.
        </p>
      </div>
    ),
    position: "right",
  },
    {
    image: humanity6,
    content: (
      <div>
        <h1 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
          Sun of Kindness 
        </h1>
        <p style={{ fontSize: "13px", lineHeight: "1.5" }}>
          The warmth of kindness can brighten even the darkest corners of the
          world. Just as the sun gives without asking for anything back, true
          humanity lies in giving selflessly. When we offer a helping hand, we
          do more than solve a problem — we restore hope, dignity, and trust. In
          every smile we inspire and every tear we dry, we keep the flame of
          humanity burning for generations to come.
        </p>
      </div>
    ),
    position: "right",
  },
    {
    image: humanity7,
    content: (
      <div>
        <h1 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
          Sun of Kindness 
        </h1>
        <p style={{ fontSize: "13px", lineHeight: "1.5" }}>
          The warmth of kindness can brighten even the darkest corners of the
          world. Just as the sun gives without asking for anything back, true
          humanity lies in giving selflessly. When we offer a helping hand, we
          do more than solve a problem — we restore hope, dignity, and trust. In
          every smile we inspire and every tear we dry, we keep the flame of
          humanity burning for generations to come.
        </p>
      </div>
    ),
    position: "right",
  },
];


  const addToRefs = (el) => {
    if (el && !slidesRef.current.includes(el)) {
      slidesRef.current.push(el);
    }
  };

  useEffect(() => {
    const slideCount = slidesRef.current.length;

    const interval = setInterval(() => {
      const next = (current + 1) % slideCount;

      gsap.to(slidesRef.current[current], {
        x: "-100%",
        opacity: 0,
        duration: 0.8,
      });

      gsap.fromTo(
        slidesRef.current[next],
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.8 }
      );

      setCurrent(next);
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const getPositionStyles = (position) => {
    if (position === "left") {
      return {
        top: "50%",
        left: "5%",
        transform: "translateY(-50%)",
        textAlign: "left",
      };
    }
    if (position === "right") {
      return {
        top: "50%",
        right: "5%",
        transform: "translateY(-50%)",
        textAlign: "right",
      };
    }
    return {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    };
  };

  return (
  <div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    zIndex: 10,   // 👈 slider ka zIndex chhota rakho
  }}
>
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={addToRefs}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <img
            src={slide.image}
            alt={`slide-${index}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          {/* Dynamic Text Content */}
          <div
            style={{
              position: "absolute",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
              padding: "15px 25px",
              background: "rgba(0, 0, 0, 0.4)",
              borderRadius: "10px",
              maxWidth: "500px",
              lineHeight: "1.4",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
              ...getPositionStyles(slide.position),
            }}
          >
            {slide.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
