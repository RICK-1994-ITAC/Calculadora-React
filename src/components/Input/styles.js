import styled from "styled-components";

export const StyleInput = styled.div `
   width: 90%;
   height: 12%;
   display: flex;
   align-items: center;
   justify-content: center;

    input {
        width: 100%;
        height: 80%;
        background-color: #ffff;
        border-radius: 1rem;
        padding-right: 1rem;
        font-size: 2rem;
        text-align: end;
        border: none; 
        
        @media(max-width: 905px){
            height: 100%;
            font-size: 1.5rem;
            margin-bottom: .5rem;
        }
    }
`
