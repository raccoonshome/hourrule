import React from   'react';
import Img from '../atoms/img.style';
import {FontStyles} from '../style';
import {StyledHeader, H1, Quotes} from './header.style';
const Header = () =>{
    return <StyledHeader>
            <h1>1만 시간의 법칙</h1>
            <H1>
                <Img src='main.png' alt='1만 시간의 법칙'/>
                <Img src='time.png' alt='logo' style={{position: 'absolute', inset: '0',  maxWidth: 'calc(100% / 4)'}}/>
            </H1>
            <FontStyles.Italic>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</FontStyles.Italic>
            <Quotes>
                <p>
                    <FontStyles.Strong>1만 시간의 법칙</FontStyles.Strong>은 <br />
                어떤 분야의 전문가가 되기 위해서는<br />
                최소한 1만 시간의 훈련이 필요하다는 법칙이다.
                </p>
            </Quotes>
        </StyledHeader>
}

export default Header;

