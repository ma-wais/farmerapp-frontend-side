import React from "react";
import "../../../styles/app/components/TabPanel.css";

const TabPanel: React.FC<{
  children: any;
  value: number;
  index: number;
  style?: React.CSSProperties;
}> = ({ children, value, index, style }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={style}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

export default TabPanel;
