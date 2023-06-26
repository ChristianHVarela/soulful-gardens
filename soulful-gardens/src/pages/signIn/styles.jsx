import styled from 'styled-components';
import gardens from '../../assets/gardens.jpg';

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
    height: 69vh;
    border-radius: 8px;
    background-image: url(${gardens});
    background-size: cover;
    background-position: center;
    transform: scaleX(-1);
    filter: brightness(1.2);
`;

const ContainerForm = styled.form`
    width: 40%;
    height: 100%;
    background-color: #FFFFFF;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scaleX(-1);
    a {
        margin-bottom: 0.5rem;
        cursor: pointer;
        text-decoration: none;
        color: #3d2a8d;
        font-weight: bold;
    }
`;

const Logo = styled.p`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 38px;
    margin-top: 8rem;
    color: #3d2a8d;
`;

const ButtonLogin = styled.button`
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

const RememberContainer = styled.div`
    width: 85%;
    display: flex;
    margin-top: 0.5rem;
`;

const RememberCheckBox = styled.input`
    margin-right: 0.5rem;
    transform: scale(1.5);
    cursor: pointer;
    color: #3d2a8d;
    accent-color: #3d2a8d;
    mix-blend-mode: multiply;
`;

export { Background, ContainerPrincipal, ContainerForm, Logo, ButtonLogin, RememberCheckBox, RememberContainer };