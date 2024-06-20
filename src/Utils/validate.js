export const checkValidData= (email, password) =>{

    const isEmailValid= /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPassWordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email is Not Valid";
    if(!isPassWordValid) return "PassWord is Wrong! Try Again";

    return null;
};