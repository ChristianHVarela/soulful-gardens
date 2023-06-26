import { Container, Input, Label, SpanRequired } from "./styles";

function InputForm({ label, required, type, value, setValue }) {

    return (
        <Container>
            <Label>{`${label}: `}
                {required ? <SpanRequired>*</SpanRequired> : ''}
            </Label>
            <Input type={type ? type : 'text'} name={label.replace(/\s/g, "")} required={required ? required : false} value={value} onChange={e => setValue(e.target.value)} />
        </Container>
    )
}

export { InputForm };