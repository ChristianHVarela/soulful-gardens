import styled from "styled-components";
import signupimg from "../../assets/signupimg.jpg";

const Background = styled.div`
    background-color: #ebedf0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
`;

const ContainerPrincipal = styled.div`
    width: 80vw;
    height: 75vh;
    border-radius: 8px;
    background-image: url(${signupimg});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    filter: brightness(1.2);
`;

const ContainerForm = styled.form`
    width: 40%;
    height: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.p`
    width: 85%;
    text-align: left;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 38px;
    margin-top: 5rem;
    color: #3d2a8d;
`;

const ButtonSignUp = styled.button`
    width: 85%;
    margin-top: 1.5rem;
    height: 2rem;
    font-family: 'Roboto';
    font-size: 18px;
    background-color: #3d2a8d;
    border: hidden;
    border-radius: 5px;
    color: #FFFFFF;
    cursor: pointer;
    &&:hover {
        background-color: #7e69d1;
    }
    margin-bottom: 5rem;
`;

export { Background, ContainerPrincipal, ContainerForm, Title, ButtonSignUp };