import React from 'react'
import { FooterContainer, Logo, Socials, SocialIcon, Copy } from './styles'
import logoImg from '../../assets/images/efoodLogo.svg'
import instagramImg from '../../assets/images/instagramLogo.svg'
import facebookImg from '../../assets/images/facebookLogo.svg'
import twitterImg from '../../assets/images/twitterLogo.svg'

const Footer: React.FC = () => (
    <FooterContainer>
        <Logo src={logoImg} alt="efood" />
        <Socials>
            <SocialIcon src={instagramImg} alt="Instagram" />
            <SocialIcon src={facebookImg} alt="Facebook" />
            <SocialIcon src={twitterImg} alt="Twitter" />
        </Socials>
        <Copy>
            A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
        </Copy>
    </FooterContainer>
)

export default Footer