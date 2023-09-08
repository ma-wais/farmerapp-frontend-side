import React from 'react'
import '../../styles/app/components/BottomSheet.css';

export const BottomSheetHeader = ({ children}) => {
    return (
        <div className="header">
            {children}
        </div>
    )
}
export const BottomSheetContent = ({ children }) => {
    return (
        <div className="content">
            {children}

        </div>
    )
}

const BottomSheet = ({ children, show, handleClose }) => {
    if (!show) return null;

    const [expend, setExpend] = React.useState(false);

    return (
        <>
            <div className="cover" onClick={handleClose}></div>
            <div className={`bottomSheet ${expend && 'expend'}`}>
                <div className="dragArea" onClick={() => { setExpend(!expend) }}></div>
                {children}
            </div>
        </>
    )
}

export default BottomSheet