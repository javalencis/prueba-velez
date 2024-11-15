import React, { useEffect, useState } from "react";

interface VideoProps {
  srcVideoDesktop: string;
  srcVideoMobile: string;
}

export const Video: React.FC<VideoProps> = ({
  srcVideoDesktop,
  srcVideoMobile,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const checkIsMobile = () => window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);

    // Limpieza al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <video
      src={isMobile ? srcVideoMobile : srcVideoDesktop}
      autoPlay
      loop
      playsInline
      preload="auto"
      muted
    ></video>
  );
};
