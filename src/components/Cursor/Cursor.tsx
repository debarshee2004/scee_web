import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleTextEnter = () => {
      textEnter(); // Call textEnter function when mouse enters h1
    };

    const handleTextLeave = () => {
      textLeave(); // Call textLeave function when mouse leaves h1
    };

    window.addEventListener("mousemove", mouseMove);
    document
      .querySelector("h1")
      .addEventListener("mouseenter", handleTextEnter);
    document
      .querySelector("h1")
      .addEventListener("mouseleave", handleTextLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document
        .querySelector("h1")
        .removeEventListener("mouseenter", handleTextEnter);
      document
        .querySelector("h1")
        .removeEventListener("mouseleave", handleTextLeave);
    };
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
        x: mousePosition.x - 75,
        y: mousePosition.y - 75,
        height: 150,
        width: 150,
        backgroundColor: "#faf9f6",
        mixBlendMode: "difference"
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
    ></motion.div>
  );
};

export default Cursor;
