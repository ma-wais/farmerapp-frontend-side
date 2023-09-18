import React from "react";
import "../../styles/app/components/Form.css";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  ...props
}): React.ReactElement => {
  return (
    <div className="select">
      <label htmlFor={props.id}>{label}</label>
      <select {...props}>{props.children}</select>
    </div>
  );
};

export default Select;
