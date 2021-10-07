import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/material/icons/close'

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="/">Model S</a>
                <a href="/">Model Y</a>
                <a href="/">Model 3</a>
                <a href="/">Model X</a>
            </Menu>
            <RightMenu>
                <a href="/">Shop</a>
                <a href="/">Tesla Account</a>
                <a href="/">Menu</a>
            </RightMenu>

            <BurgerMenu>
                <CloseWrapper>
                <CustomClose/>  
                </CloseWrapper>
                
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">USed Inventory</a></li>
                <li><a href="">Trade-in</a></li>
                <li><a href="">CyberTruck</a></li>
                <li><a href="">Roadaster</a></li>
                <li><a href=""></a>Existings</li>
                <li><a href=""></a>Existings</li>
                <li><a href=""></a>Existings</li>
                <li><a href=""></a>Existings</li>
            </BurgerMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
right: 0;
left: 0;
z-index: 1;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}
`
const RightMenu = styled.div`
a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right 10px;
  }
`
const BurgerMenu = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;

li{
    padding: 15px 0;
border-bottom: 1px solid rgba(0, 0, 0, .2);
}
a{
    font-weight: 600;
}
`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`



