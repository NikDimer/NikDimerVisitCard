import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cloud1 from "../../../assets/images/cloud1.png";
import cloud2 from "../../../assets/images/cloud2.png";
import cloud3 from "../../../assets/images/cloud3.png";
import cloud4 from "../../../assets/images/cloud4.png";
import cloud5 from "../../../assets/images/cloud5.png";
import cloud6 from "../../../assets/images/cloud6.png";
import cloud7 from "../../../assets/images/cloud7.png";
import cloud8 from "../../../assets/images/cloud8.png";
import cloud9 from "../../../assets/images/cloud9.png";

const cloudsData = [
    { src: cloud1, left: 0, top: "36%", speed: 40, delay: 0 },
    { src: cloud2, left: 0, top: "11%", speed: 40, delay: 8 },
    { src: cloud3, left: 0, top: "21%", speed: 40, delay: 10 },
    { src: cloud4, left: 0, top: "32%", speed: 40, delay: 16 },
    { src: cloud5, left: 0, top: "40%", speed: 40, delay: 23 },
    { src: cloud6, left: 0, top: "25%", speed: 40, delay: 28 },
    /*{ src: cloud7, left: 0, top: "45%", speed: 40, delay: 22 },
    { src: cloud8, left: 0, top: "26%", speed: 40, delay: 27 },
    { src: cloud9, left: 0, top: "50%", speed: 40, delay: 30 },*/
];

const Cloud = ({ src, speed, left, top, sizeMultiplier, delay }) => {
    const [windowWidth, setWindowWidth] = useState(1400);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.img
            src={src}
            alt="cloud"
            initial={{ x: windowWidth + 300 + left }}
            animate={{
                x: -600 + left,
                transition: {
                    duration: speed,
                    delay: delay,
                    repeat: Infinity,
                    ease: "linear",
                },
            }}
            style={{
                position: "absolute",
                top: top,
                width: `${292 * sizeMultiplier}px`,
                height: "auto",
                zIndex: -1,
                opacity: 0.8,
            }}
        />
    );
};

const CloudAnimation = () => {
    const [sizeMultiplier, setSizeMultiplier] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setSizeMultiplier(
                window.innerWidth <= 980
                    ? 0.5
                    : window.innerWidth <= 1600
                    ? 0.75
                    : 1
            );
        };
        handleResize(); // Установить начальное значение
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
            }}
        >
            {cloudsData.map((cloud, index) => (
                <Cloud
                    key={index}
                    src={cloud.src.src}
                    left={cloud.left}
                    top={cloud.top}
                    speed={cloud.speed}
                    sizeMultiplier={sizeMultiplier}
                    delay={cloud.delay}
                />
            ))}
        </div>
    );
};

export default CloudAnimation;
