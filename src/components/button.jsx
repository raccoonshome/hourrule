import React, { useState } from 'react';
import { StyledButton, MoreBtn } from './button.style';
import {Modal, Title, Content} from './modal.style';


const Button = (props) =>{
    return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
}
const WhiteBtn = (props) =>{
    return <MoreBtn onClick={props.onClick}>{props.children}</MoreBtn>
}

const ModalBtn = (props) => {
    const [modal, setModal] = useState(false);
    const handleOpenModal = () => setModal(true);
    const handleCloseModal = () => setModal(false);
    return <><StyledButton onClick={handleOpenModal}>{props.children}</StyledButton>
    {modal && <>
        <Modal>
            <Title>화이팅!!♥♥♥</Title>
            <Content>당신의 꿈을 응원합니다!</Content>
            <Button onClick={handleCloseModal}>종료하고 진짜 훈련하러 가기 GO!GO!</Button>
        </Modal>
        </>
    }
    </>
}

export { Button, WhiteBtn, ModalBtn };

