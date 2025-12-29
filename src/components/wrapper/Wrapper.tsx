import React, {FC} from 'react';
import Headroom from "react-headroom";

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper: FC<WrapperProps> = ({children}) => {
    return (
        <>
            <Headroom>
                {children}
            </Headroom>
        </>
    );
};

export default Wrapper;