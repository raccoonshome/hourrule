import React, { useState } from 'react';
import StyledButton from './button.style';
import Modal from './modal';


const Button = (props) =>{
    return <StyledButton variant={props.variant} onClick={props.onClick}>{props.children}</StyledButton>
}

const ModalBtn = ({value, contents, variant}) => {
    const [modal, setModal] = useState(false);
    const handleOpenModal = () => setModal(true);
    const handleCloseModal = () => setModal(false);
    
    return <>
    <StyledButton variant={variant} onClick={handleOpenModal}>{value}</StyledButton>
    {modal && <Modal onClick={handleCloseModal}>{contents}</Modal>}
    </>
}

export { Button, ModalBtn };

