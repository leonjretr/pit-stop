"use client"
import {motion} from 'motion/react';
import React from 'react';
import {IoAdd} from "react-icons/io5";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import {Field, FieldGroup, FieldLabel, FieldSet, FieldDescription } from '../ui/field';
import {Input } from '../ui/input';

const AddMemoryCard = () => {
    return (
        <div className={"flex items-center w-80 gap-x-3  p-2 font-nunito"}>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.95}}
                            className={"flex items-center justify-center w-12 cursor-pointer h-10 border-2 border-brand-walnut font-bold rounded-lg"}>
                            <IoAdd className={"text-3xl"}/>
                        </motion.button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                <div
                                    className={"flex flex-col items-center justify-center font-inter font-semibold text-2xl"}>
                                    Adding a memory
                                </div>
                            </DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you&apos;re
                                done.
                            </DialogDescription>
                        </DialogHeader>
                        <FieldSet>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="username">Username</FieldLabel>
                                    <Input id="username" type="text" placeholder="Max Leiter" />
                                    <FieldDescription>
                                        Choose a unique username for your account.
                                    </FieldDescription>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <FieldDescription>
                                        Must be at least 8 characters long.
                                    </FieldDescription>
                                    <Input id="password" type="password" placeholder="••••••••" />
                                </Field>
                            </FieldGroup>
                        </FieldSet>
                        <DialogFooter>
                            <DialogClose>
                                <div
                                    className={" bg-red-500 hover:bg-red-700  cursor-pointer font-inter text-white p-2 rounded-lg text-md"}>
                                    Cancel
                                </div>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>

            <HoverCard>
                <HoverCardTrigger asChild>
                    <div className={"font-semibold"}>
                        Add a new object memory
                    </div>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className={"flex flex-col font-poppins"}>
                        <div className={"font-bold text-md"}>
                            Adding a new memory
                        </div>
                        <div className={"text-sm"}>
                            Tell a story: whether it&#39;s a pen gifted by your father, or a camera you
                            bought last week - doesn&#39;t matter. Any story is great.
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>

        </div>
    )
        ;
};

export default AddMemoryCard;