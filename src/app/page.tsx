"use client"
import AddMemoryCard from "@/components/cards/AddMemoryCard";
import ObjectMemoryCard from "@/components/cards/ObjectMemoryCard";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose
} from "@/components/ui/drawer";

export default function Home() {
    return (
        <div className={"min-h-screen bg-white overflow-visible"}>
            <div className={"flex flex-col items-center justify-center p-5 gap-y-5"}>
                <AddMemoryCard/>
                <ObjectMemoryCard/>
                <Drawer>
                    <DrawerTrigger className="border px-4 py-2">
                        Open drawer
                    </DrawerTrigger>

                    <DrawerContent className={"overflow-visible"}>
                        <DrawerHeader>
                            <DrawerTitle>Hello</DrawerTitle>
                        </DrawerHeader>
                        <div className="p-4">Drawer works</div>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    );
}
