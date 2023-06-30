import React from 'react'
import styled from 'styled-components'
interface iButton1{
    col: string
    bg: string
    desc: string
    bd: string
}
const Button2:React.FC<iButton1> = ({col, bg, desc, bd}) => {
  return (
    <div>
        <Container>
            <Main col={col} bg={bg} bd={bd}>
                {desc}
            </Main>
        </Container>
    </div>
  )
}

export default Button2

const Container = styled.div`
display: flex;
margin-right: 20px;

`
const Main = styled.div<{col: string, bg: string, bd: string}>`
    
    padding: 25px 45px;
    border-radius: 40px;
    font-weight: 400;
    font-size: 17px;
    border: ${({bd})=>bd};
    color: ${({col})=>col};
    background-color: ${({bg})=>bg};
    transition: all 300ms;
    cursor: pointer;
    :active{
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
    :hover{
        transform: scale(1.04)
    }


`
