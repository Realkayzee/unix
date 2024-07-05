'use client'
import { ButtonProps } from "./Button1";

const Button2 = ({children, ...props}: ButtonProps) => {
    const handleClick = () => {
        props.onClick?.()
    }

    return (
        <button className="rounded-xl bg-transparent border-2 border-button text-white font-semibold outline-none px-5 lg:px-8 py-2 hover:text-white-1" onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button2;