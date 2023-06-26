import styled from "styled-components";

const Container = styled.div`
    width: 85%;
    font-family: 'Roboto';
    margin-top: 2rem;
`;

const Label = styled.p`
    font-size: 18px;
`;

const SpanRequired = styled.span`
    color: #f79341;
`;

const Input = styled.input`
    width: 100%;
    margin-top: 0.4rem;
    font-size: 15px;
    height: 2rem;
`;

export { Label, Container, SpanRequired, Input };