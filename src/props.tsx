export interface NavbarProps {
    pageTitle?: string,
    goBack?: boolean,
    showIcons?: boolean,
    community?: boolean,
}

export interface LayoutProps extends NavbarProps {
    children: any,
    className?: string,
    style?: React.CSSProperties,
    showUI: boolean
}