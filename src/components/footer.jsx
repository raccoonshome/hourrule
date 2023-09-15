import React from   'react';
import styled from 'styled-components';

const Footer = () =>{
    return <footer>
        <img src='logo.svg' alt='weniv'/>
        <CopyRight>※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
            <br />
        수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</CopyRight>
    </footer>
}

export default Footer;

const CopyRight = styled.p`
    font-family: Noto Sans KR;
    font-size: 12px;
    font-weight: 400;
`;