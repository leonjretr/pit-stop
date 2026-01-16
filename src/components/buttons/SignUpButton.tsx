import React from 'react';

interface SignUpButtonProps {
    text: string;
}

const SignUpButton = ({text}: SignUpButtonProps) => {
    return (
        <button className={"px-2 py-2 bg-white border-2 border-brand-coffee text-brand-coffee font-inter font-medium rounded-lg cursor-pointer"}>
            {text}
        </button>
    );
};

export default SignUpButton;