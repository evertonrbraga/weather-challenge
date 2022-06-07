import styled from 'styled-components'
import background from '../../assets/bg.jpg'

export const Container = styled.div`
    background-image: url(${background});
    background-size: cover;
    height: 100vh;
    background-position-y: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 70px;
    display: flex;
    justify-content: center;
    color: white;
    font-family: 'Pacifico', cursive;
    text-shadow: 3px 3px 3px #C34100;
`

export const Box = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

`

export const Column = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Item = styled.div`
    height: 160px;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
    border: 2px solid gray;
    margin: 10px;
    border-radius: 10px;
    background: hsl(166deg 54% 51% / 70%);
    border: none;
    box-shadow: -1px 2px 6px #00462f;

    h2 {
        color: white;
        font-size: 24px;
        margin-bottom: 7px;
    }

    p {
        font-size: 33px;
        color: #fff700;
        font-family: 'Patua One', cursive;
        text-shadow: -1px 2px 2px #00000040;
    }
`

export const Button = styled.button`
    align-self: center;
    padding: 10px 25px;
    border-radius: 25px;
    color: white;
    background: #f05;
    border: none;
    box-shadow: 0px 3px 6px #762424;
    font-size: 16px;
    transition: 0.2s;
    
    &:hover {
        transition: 0.2s;
        outline: 2px solid #f05;
        color: #f05;
        background: rgba(255, 255, 255, 0.75);
    }
`
