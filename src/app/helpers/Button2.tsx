'use client'
import { ButtonProps } from "./Button1";

const Button2 = ({children, ...props}: ButtonProps) => {
    const handleClick = () => {
        props.onClick?.()
    }

    return (
        <button className="p-[2px] rounded-xl bg-white text-hero font-semibold outline-none" onClick={handleClick}>
            <p className={`rounded-xl w-full h-full px-5 lg:px-8 py-2 hover:border-hero hover:border-2 ${props.className}`}>
                {children}
            </p>
        </button>
    );
}

export default Button2;