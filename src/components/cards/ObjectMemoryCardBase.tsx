import React from 'react';
import {motion} from "motion/react";

const ObjectMemoryCardBase = () => {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
            className={"flex flex-col justify-center cursor-pointer w-96 gap-3 border-2 rounded-lg border-brand-walnut p-2 font-nunito"}>
            <div className={"font-semibold text-lg"}>
                My first memory
            </div>
            <div className={"text-sm"}>
                Description of the first memory!
            </div>
        </motion.div>
    );
};

export default ObjectMemoryCardBase;