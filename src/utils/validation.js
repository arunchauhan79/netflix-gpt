export const checkValidData = (email, password) => {
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if (!isValidEmail) {
        return "Email is not valid, try again";
    }
    if (!isValidPassword) {
        return "Password is not valid, try again";
    }
    return null;
}