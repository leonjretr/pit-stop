import React from 'react';
import Image from "next/image";

const Header = () => {
    
    return (
        <div className={"flex justify-between items-center w-full h-20 p-3 bg-brand-lightgold text-brand-coffee font-poppins font-bold"}>
            <div className={"w-4"}>
                <Image className={"flex w-[400px] h-[100px]"} src={"/images/portafilter.png"} alt={"Portafilter"}
                height={"500"} width={"500"}/>
                pit stop
            </div>

        </div>
    );
};

export default Header;