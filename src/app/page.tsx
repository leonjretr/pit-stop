import ObjectMemoryCard from "@/components/cards/ObjectMemoryCard";
import {IoAdd} from "react-icons/io5";

export default function Home() {
    return (
        <div className={"min-h-screen bg-white"}>
            <div className={"flex flex-col items-center justify-center p-5 gap-y-5"}>
                <div className={"flex items-center w-80 h-14 gap-3 border-x-2 border-brand-walnut p-2 font-nunito"}>
                    <button
                        className={"flex items-center justify-center w-12 hover:scale-110 hover:bg-neutral-100 active:scale-95 transition-transform cursor-pointer h-10 border-2 border-brand-walnut font-bold rounded-lg"}>
                        <IoAdd className={"text-3xl"}/>
                    </button>
                    <div className={"font-semibold"}>
                        Add a new object memory
                    </div>
                </div>
                <ObjectMemoryCard/>
            </div>
        </div>
    );
}
