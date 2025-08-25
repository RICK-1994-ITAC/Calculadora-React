import styled from "styled-components"

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #232730;

    h1 {
        font-size: 3rem;
        color: #7de0fcff;

        @media(max-width: 905px){
            display: flex;
            font-size: 2.5rem;
            margin-top: 1rem;
            padding: 0 1rem;
            text-align: center;
            justify-content: center;
        }
    }

    img {
        position: relative;
        width: 150px;
        animation: reactAnimation 3s ease-in-out infinite;

        @media(max-width: 905px){
            width: 100px;
        }
        
    }

    @keyframes reactAnimation{
        0% {
            transform:translateY(0);
        }

        50% {
            transform: translateY(-2rem);
        }

        100% {
            transform: translateY(0);
        }
    }

    .description{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5rem;
    }

    @media(max-width: 905px){
        flex-direction: column;
   }
`

export const Content = styled.div `
    width: 500px;
    height: 90%;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border-radius: 2rem;
    padding-top: 1rem;

   @media(max-width: 1024px){
        width: 450px;
   }

   @media(max-width: 905px){
        width: 80%;
        margin-bottom: 1rem;
   }
`