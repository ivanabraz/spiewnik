import React from "react";
import { motion } from "framer-motion";

const HeroText = (HeroTextProps) => {
    return (
        <div className={`${HeroTextProps.backgroundColor} absolute z-100 flex top-0 justify-center items-center text-center w-full h-screen
        text-xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl`}>
            <motion.div
            className=""
            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                damping: 10,
                stiffness: 90,
                restDelta: 0.001,
            }}>
                {HeroTextProps.title}
            </motion.div>
        </div>
    )
}

export default HeroText;