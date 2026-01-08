import React from 'react';

const Header = () => {

    return (
        <div
            className={"flex justify-center w-full p-3 bg-white text-brand-coffee border-b border-solid border-black"}>
            <button className={"flex items-center"}>
                {/*<Image src={"/images/portafilter.png"} alt={"Portafilter"}*/}
                {/*       height={40} width={40}/>*/}
                <div className={"flex flex-col justify-center"}>
                    <div className={"flex text-start font-poppins font-bold text-3xl p-2 leading-0.5"}>
                        things talk
                    </div>
                    <div className={"flex justify-center font-poppins italic text-xs pt-3 leading-[0.75]"}>
                        and what do they say?
                    </div>
                </div>

            </button>
        </div>
    );
};

export default Header;