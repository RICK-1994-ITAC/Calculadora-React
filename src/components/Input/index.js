import {StyleInput} from "./styles"

export const Input = ({value})=> {
    return (
        <StyleInput>
            <input type="text" disabled value={value}/>
        </StyleInput>
    )
}
