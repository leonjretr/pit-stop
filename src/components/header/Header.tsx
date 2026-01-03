import React from 'react';
import Image from "next/image";

const Header = () => {
    
    return (
        <div className={"flex justify-between items-center w-full h-20 p-3 bg-brand-lightgold text-brand-coffee font-poppins font-bold"}>
            <div className={"flex gap-x-1"}>
                <div className={"flex w-full p-0"}>
                    <Image src={"/images/portafilter.png"} alt={"Portafilter"}
                           height={"50"} width={"50"}/>
                </div>
                <h1 className={"font-poppins text-xl p-0"}>
                    pit stop
                </h1>
            </div>
        </div>
    );
};

export default Header;