import React from 'react';

const ObjectMemoryCard = () => {
    return (
        <div className={"flex flex-col justify-center w-96 h-16 gap-3 border-y-2 hover:border-x-2 hover:border-y-0 border-brand-walnut p-2 font-nunito"}>
            <div className={"font-semibold text-lg"}>
                My first memory
            </div>
            <div className={"text-sm"}>
                Description of the first memory!
            </div>
        </div>
    );
};

export default ObjectMemoryCard;