import React from "react";
import { motion } from "framer-motion";
import HeaderOgnisko from "./HeaderOgnisko";

const title = [
    {
        name: "Ś",
        delay: 0.1,
    },
    { 
        name: "p",
        delay: 0.15,
    },
    { 
        name: "i",
        delay: 0.2,
    },
    { 
        name: "e",
        delay: 0.25,
    },
    { 
        name: "w",
        delay: 0.3,
    },
    { 
        name: "n",
        delay: 0.35,
    },
    { 
        name: "i",
        delay: 0.4,
    },
    {
        name: "k",
        delay: 0.45,
    },
]


const Header = () => {
    return (
            <div className="text-dmbneutro-600 dark:text-white w-full h-[100vh] bg-dmbneutro-100 dark:bg-dmbneutro-700 flex items-center justify-center text-center
            text-8xl xs:text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-[12rem]">
                <HeaderOgnisko/>

                {title.map((title) => (
                    <motion.p
                    className="relative py-10"
                    key={title.delay}
                    initial={{ scale: 0 }} 
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        damping: 10,
                        stiffness: 90,
                        restDelta: 0.001,
                        delay: `${title.delay}`,
                    }}>
                        {title.name}
                    </motion.p>
                ))}
            </div>
    )
}

export default Header;