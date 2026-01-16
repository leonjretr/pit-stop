import React from 'react';

interface LoginButtonProps {
    text: string;
}

const LoginButton = ({text}: LoginButtonProps) => {
    return (
        <button className={"px-3 py-2 bg-brand-coffee border-2 border-brand-coffee text-white font-inter font-medium rounded-lg cursor-pointer"}>
            {text}
        </button>
    );
};

export default LoginButton;