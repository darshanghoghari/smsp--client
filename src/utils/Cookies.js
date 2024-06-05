import { number } from "yup";

export const SetCookie = (name, value, time) => {
    let expires = '';

    if (time) {
        const type = time.slice(-1); // Get the last character (s, m, h, d)

        let amount = parseInt(time.slice(0, -1)); // Get the numeric part
        console.log(type, amount, ">------------------dbfhjshdfhjsdfnndsf---------------<")
        if (type === 's') {
            expires = `expires=${new Date(Date.now() + amount * 1000).toUTCString()}`;
        } else if (type === 'm') {
            expires = `expires=${new Date(Date.now() + amount * 60 * 1000).toUTCString()}`;
        } else if (type === 'h') {
            expires = `expires=${new Date(Date.now() + amount * 60 * 60 * 1000).toUTCString()}`;
        } else if (type === 'd') {
            expires = `expires=${new Date(Date.now() + amount * 24 * 60 * 60 * 1000).toUTCString()}`;
        }
    }

    document.cookie = `${name}=${value};${expires};path=/`;
}