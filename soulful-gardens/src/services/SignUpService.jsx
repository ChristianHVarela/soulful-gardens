import { validateEmail } from "../utils/validEmail";
import { validatePassword } from "../utils/validatePassword";
import { toast } from "react-toastify";

function validateForm(elements, navigate){
    let errors = [];
    if (!validateEmail(elements.Email.value)) {
        errors.push("Invalid email address.");
    }
    const verifyPassword = validatePassword(elements.Password.value, elements.ConfirmPassword.value);
    if (verifyPassword){
        errors.push(verifyPassword);
    }
    if (errors.length > 0) {
        errors.forEach((item) => {
            toast.error(item, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        });
        return false;
    }
    return true;
}

export default { validateForm };