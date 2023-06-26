import { useState } from "react";
import { InputForm } from "../../components/inputform";
import { Background, ButtonLogin, ContainerForm, ContainerPrincipal, Logo, RememberCheckBox, RememberContainer } from "./styles";
import { Link } from 'react-router-dom';

function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <Background>
            <ContainerPrincipal>
                <ContainerForm>
                    <Logo>SoulFul Gardens</Logo>
                    <InputForm label="Email" required={true} value={email} setValue={setEmail} type="email" />
                    <InputForm label="Password" required={true} value={password} setValue={setPassword} type="password" />
                    <RememberContainer>
                        <RememberCheckBox type="checkbox" />
                        Remember me?
                    </RememberContainer>
                    <ButtonLogin>Sign In</ButtonLogin>
                    <Link to="sign-up">Does not have an account ?</Link>
                    <Link>Forgot password ?</Link>
                </ContainerForm>
            </ContainerPrincipal>
        </Background>
    )
}

export { SignIn };