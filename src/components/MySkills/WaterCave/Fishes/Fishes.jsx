import { motion } from "framer-motion";

import Fish from "../Fish/Fish";
import styles from "./styles.module.css";

import cpp from "@/src/assets/images/skills/skills_cpp.svg";
import css from "@/src/assets/images/skills/skills_css.svg";
import electron from "@/src/assets/images/skills/skills_electron.svg";
import express from "@/src/assets/images/skills/skills_express.svg";
import golang from "@/src/assets/images/skills/skills_golang.svg";
import html from "@/src/assets/images/skills/skills_html.svg";
import javascript from "@/src/assets/images/skills/skills_javascript.svg";
import mysql from "@/src/assets/images/skills/skills_mysql.svg";
import next from "@/src/assets/images/skills/skills_next.svg";
import node from "@/src/assets/images/skills/skills_node.svg";
import php from "@/src/assets/images/skills/skills_php.svg";
import postgres from "@/src/assets/images/skills/skills_postgres.svg";
import python from "@/src/assets/images/skills/skills_python.svg";
import react from "@/src/assets/images/skills/skills_react.svg";
import redux from "@/src/assets/images/skills/skills_redux.svg";
import three from "@/src/assets/images/skills/skills_three.svg";
import typescript from "@/src/assets/images/skills/skills_typescript.svg";
import ubuntu from "@/src/assets/images/skills/skills_ubuntu.svg";
import vue from "@/src/assets/images/skills/skills_vue.svg";

// Список логотипов в виде массива
const logos = [
    golang,
    javascript,
    next,
    node,
    postgres,
    react,
    redux,
    three,
    typescript,
    vue,
];

export default function MotionFish() {
    return (
        <>
            {logos.map((logo, index) => (
                <motion.div
                    className={styles.motionFish}
                    key={index}
                    style={{
                        position: "absolute",
                        bottom: `${Math.random() * 100 + 50}px`,
                    }} // Разное вертикальное положение
                    initial={{ x: -200 }} // Начальная позиция вне экрана
                    animate={{ x: "100vw" }} // Конечная позиция
                    transition={{
                        duration: 15, // Случайная продолжительность
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: index * 1.5, // Разные задержки для рыбы
                    }}
                >
                    <Fish logoSrc={logo} />
                </motion.div>
            ))}
        </>
    );
}
