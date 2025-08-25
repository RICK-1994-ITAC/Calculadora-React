import styled from "styled-components";


export const Divbuttons = styled.div`
    height: 85%;
    width: 90%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: .5rem;
    

    button {
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
        font-weight: bolder;
        border-radius: 1rem;
        background-color: rgba(0, 0, 0, 1);
        color: #fff;

        @media(max-width: 905px){
            font-size: 1rem;
        }
    }
    
    .orange{
        background-color: orange;
    }

    button:last-child {
        grid-column: span 2;
    }

    button:hover {
        background-color: rgba(252, 247, 247, 0.2);
    }

`