
function validatePassword(password, confirmPassword) {
    if (password.length < 8 || confirmPassword.length < 8) {
        return "Passwords must have exactly 8 characters.";
    }
    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }
    return null;
}

export { validatePassword };