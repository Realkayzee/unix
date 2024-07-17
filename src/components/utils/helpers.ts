export const parseAddress = (address: string) => {
    switch (address.length) {
        case 64:
            return `${address.slice(0, 2)}00${address.slice(2)}`
        case 65:
            return `${address.slice(0,2)}0${address.slice(2)}`
        default:
            return address
    }
}