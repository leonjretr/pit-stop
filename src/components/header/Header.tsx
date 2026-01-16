import React from 'react';

const Header = () => {

    return (
        <div
            className={"flex justify-between items-center w-full px-2 py-4 bg-white text-brand-coffee border-b-2 border-solid border-brand-coffee"}>
            <div className="flex items-center">
                <div>
                    About us
                </div>
            </div>
            <div className="flex items-center">
                <button
                    className={"cursor-pointer justify-self-center"}>
                    <div className={"flex flex-col justify-center"}>
                        <div className={"flex text-start font-poppins font-bold text-3xl p-2 leading-0.5"}>
                            things talk
                        </div>
                        <div className={"flex justify-center font-poppins italic text-xs pt-3 leading-[0.75]"}>
                            what&#39;s their language?
                        </div>
                    </div>
                </button>
            </div>
            <div className="flex items-center gap-x-3">
                <button>
                    Login
                </button>
                <button>
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default Header;