import { useState } from "react";
import { Background, ButtonSignUp, ContainerForm, ContainerPrincipal, Title } from "./styles";
import { InputForm } from "../../components/inputform"; 
import signUpService from "../../services/SignUpService";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    function onSubmitForm(e){
        e.preventDefault();
        const isValid = signUpService.validateForm(e.target.elements, navigate);
        console.log(isValid);
    }

    return (
        <Background>
            <ContainerPrincipal>
                <ContainerForm onSubmit={onSubmitForm}>
                    <Title>Create New User</Title>
                    <InputForm label="Name" required={true} value={name} setValue={setName} />
                    <InputForm label="Email" required={true} value={email} setValue={setEmail} type="email"/>
                    <InputForm label="Password" required={true} value={password} setValue={setPassword} type="password"/>
                    <InputForm label="Confirm Password" required={true} value={confirmPassword} setValue={setConfirmPassword} type="password" />
                    <ButtonSignUp>Sign Up</ButtonSignUp>
                </ContainerForm>
            </ContainerPrincipal>
        </Background>
    )
}

export { SignUp };