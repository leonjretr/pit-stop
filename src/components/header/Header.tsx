import React from 'react';
import Image from "next/image";

const Header = () => {
    
    return (
        <div className={"flex justify-between w-full h-20 p-3 bg-brand-lightgold text-brand-coffee font-poppins font-bold"}>
            <div className={"flex items-center"}>
                    <Image src={"/images/portafilter.png"} alt={"Portafilter"}
                           height={"60"} width={"60"}/>
                <h1 className={"font-poppins text-xl px-12 w-4"}>
                    pit stop
                </h1>
            </div>
        </div>
    );
};

export default Header;