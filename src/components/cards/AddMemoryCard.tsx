"use client"
import {motion} from 'motion/react';
import React from 'react';
import {IoAdd} from "react-icons/io5";

const AddMemoryCard = () => {
    return (
        <div className={"flex items-center w-80 gap-x-3  p-2 font-nunito"}>
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                className={"flex items-center justify-center w-12 cursor-pointer h-10 border-2 border-brand-walnut font-bold rounded-lg"}>
                <IoAdd className={"text-3xl"}/>
            </motion.button>
            <div className={"font-semibold"}>
                Add a new object memory
            </div>
        </div>
    );
};

export default AddMemoryCard;