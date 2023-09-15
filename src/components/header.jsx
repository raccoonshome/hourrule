import React from   'react';
import styled from 'styled-components';
import { Italic, Strong } from './section.style';
import Img, { Logo } from './img.style';
import * as styles from './style';

const Header = () =>{
    return <StyledHeader>
            <h1>1만 시간의 법칙</h1>
            <H1>
                <Img src='main.png'/>
                <Logo src='time.png'/>
            </H1>
            <Italic>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</Italic>
            <Quotes>
                <p>
                    <Strong>1만 시간의 법칙</Strong>은 <br />
                어떤 분야의 전문가가 되기 위해서는<br />
                최소한 1만 시간의 훈련이 필요하다는 법칙이다.
                </p>
            </Quotes>
        </StyledHeader>
}

export default Header;

const StyledHeader = styled.header`
    max-width: 1200px;
    padding: 5vh;
`;

const H1 = styled.div`
    margin: ${styles.Margin} 0;
    position: relative;
`;

const Quotes = styled.p`
    display: flex;
    flex-basis: 373px;
    min-width: 0;
    flex-shrink: 0;
    flex-grow: 0;
    gap: 14px;
    &::before{
        content: url("openQuotes.svg");
        margin-left: auto;
    }
    &::after{
        content: url("closeQuotes.svg");
        margin-right: auto;
    }
`;