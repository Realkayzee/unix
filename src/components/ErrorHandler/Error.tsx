import { LiteralUnion } from "react-hook-form"

interface ErrorProps {
    error: LiteralUnion<any, string>
    message?: string | undefined
    patternMessage?: string
    minMessage?: string
}

export const Error = ({error, message, patternMessage, minMessage}: ErrorProps) => {
    if(error == "required") {
        return (
            <p className="text-sm text-red-500 -mt-1 text-left">
                This field is required
            </p>
        )
    } else if (error == "pattern") {
        return (
            <p className="text-sm text-red-500 -mt-1 text-left">
                {patternMessage}
            </p>
        )
    } else if (error == "min") {
        return (
            <p className="text-sm text-red-500 -mt-1 text-left">
                {minMessage}
            </p>
        )
    } else {
        return (
            <p className="text-sm text-red-500 -mt-1 text-left">
                {message}
            </p>
        )
    }
}