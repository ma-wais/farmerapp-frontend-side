import { ReactNode } from "react";

export interface NavbarProps {
  pageTitle?: string;
  goBack?: boolean;
  showIcons?: boolean;
  community?: boolean;
}

export interface LayoutProps extends NavbarProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showUI: boolean;
}
