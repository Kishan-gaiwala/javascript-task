export const validateName = (name) => {
    if (!name || !name.match("^[a-zA-Z]*$")) return false;
    return true;
}

export const validateEmail = (email) => {
    if (!email || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) return false
    return true
}

export const validateAge = (age) => {
    if (!age || !/^[0-9]+$/.test(age) || age < 25 || age > 45) return false
    return true
}

export const validateMessage = (message) => {
    if (!message || !message.match("^[a-zA-Z]*$") || message.length > 255) return false;
    return true;
}


