"use client"
import {motion} from 'motion/react';
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ObjectMemoryCardBase from './ObjectMemoryCardBase';

const ObjectMemoryCard = () => {

    return (
        <div className={""}>
            <Dialog>
                <DialogTrigger asChild>
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
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            <div className={"flex items-center justify-center font-nunito font-semibold text-2xl"}>
                                Dad&#39;s watches
                            </div>
                        </DialogTitle>
                        <DialogDescription>Hello</DialogDescription>
                    </DialogHeader>
                    <div className={"flex flex-col text-xl"}>
    Hello guys!
                    </div>
                </DialogContent>
            </Dialog>
        </div>

    )
        ;
};

export default ObjectMemoryCard;