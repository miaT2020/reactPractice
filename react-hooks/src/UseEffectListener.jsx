import { useEffect, useState } from "react";

export default function UseEffectListener() {
  const [windwonWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Specify how to clean up after this effect:
    return () => window.removeEventListener("resize", handleResize);
  }, []); //only run when component mounts, so leave the array empty

  return <div>{windwonWidth}</div>;
}
