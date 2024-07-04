'use client'
import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode,
    className?: string,
    onClick?: () => void
}

const Button1 = ({children, ...props}: ButtonProps) => {
    const handleClick = () => {
        props.onClick?.()
    }

    return (
        <button
            className={`px-5 sm:px-8 py-2 rounded-xl bg-hero hover:bg-black-2 focus:bg-white-2 text-neutral-100 font-semibold ${props.className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button1;