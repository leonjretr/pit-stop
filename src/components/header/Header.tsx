import React from 'react';

const Header = () => {

    return (
        <div
            className={"flex justify-center w-full p-3 bg-white text-brand-coffee border-b border-solid border-black"}>
            <button className={"flex items-center"}>
                {/*<Image src={"/images/portafilter.png"} alt={"Portafilter"}*/}
                {/*       height={40} width={40}/>*/}
                <div className={"flex justify-center"}>
                    <div className={"flex font-poppins italic text-md p-2 leading-0.5"}>
                        objects you've carried
                    </div>
                    <div className={"flex text-start font-poppins font-bold text-xl p-2 leading-0.5"}>
                        things<br/> talk
                    </div>
                    <div className={"flex font-poppins italic text-md p-2 leading-0.5"}>
                        and why?
                    </div>
                </div>

            </button>
        </div>
    );
};

export default Header;