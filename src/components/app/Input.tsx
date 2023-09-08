import React from 'react'
import '../../styles/app/components/Form.css';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    icon?: any,
}

const Input: React.FC<InputProps> = ({ label, icon, ...props }): React.ReactElement => {
    return (
        <div className='input'>
            <label htmlFor={props.id}>{label}</label>
            <input {...props} />
            {icon}
        </div>
    )
}

export default Input