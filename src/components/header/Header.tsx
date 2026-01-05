import React from 'react';
import Image from "next/image";

const Header = () => {
    
    return (
        <div className={"flex justify-between w-full h-20 p-3 bg-brand-lightgold text-brand-coffee font-poppins font-bold"}>
            <button className={"flex items-center"}>
                    <Image src={"/images/portafilter.png"} alt={"Portafilter"}
                           height={"40"} width={"40"}/>
                <div className={"flex text-start font-poppins text-xl p-2 leading-[1.2]"}>
                    pit<br/> stop
                </div>
            </button>
        </div>
    );
};

export default Header;