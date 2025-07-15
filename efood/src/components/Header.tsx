import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background: #e66767;
    color: #fff;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.h1`
    font-size: 24px;
    font-weight: bold;
`

const Header: React.FC = () => (
    <HeaderContainer>
        <Logo>efood</Logo>
        {/* Adicione outros elementos do header conforme o layout do Figma */}
    </HeaderContainer>
)

export default Header