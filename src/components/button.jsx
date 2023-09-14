import React, { useState } from 'react';
import { StyledButton, MoreBtn } from './button.style';
import Modal from './modal';


const Button = (props) =>{
    return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
}
const WhiteBtn = (props) =>{
    return <MoreBtn onClick={props.onClick}>{props.children}</MoreBtn>
}

const ModalBtn = ({value, contents}) => {
    const [modal, setModal] = useState(false);
    const handleOpenModal = () => setModal(true);
    const handleCloseModal = () => setModal(false);
    
    return <>
    <StyledButton onClick={handleOpenModal}>{value}</StyledButton>
    {modal && <Modal onClick={handleCloseModal}>{contents}</Modal>}
    </>
}

export { Button, WhiteBtn, ModalBtn };

