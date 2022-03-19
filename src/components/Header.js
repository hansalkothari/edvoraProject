import React from 'react'
import styled from 'styled-components'
import avt from "../assets/ppic.jpg"

export default function Header() {
  return (
    <Container>
        <Logo>
            <p>Edvora</p>
        </Logo>
        <User>
            <Name>
                <p>Dhruv Singh</p>
            </Name>
            <Avatar src  = {avt}/>
                
            
        </User>
    </Container>
  )
}

const Container = styled.div`
    background-color: #101010;
    height: 84px;
    display: flex;
    justify-content: space-between;
    
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 36px;
    margin-left: 43px;
    font-weight: bold;
    color: white;
    
`
const User = styled.div`
    width:10%;
    height: 100%;
    display: flex;
    margin-right: 43px;
    justify-content: space-between;
    align-items: center;
`

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    
`
const Name = styled.div`
color: white;
`
