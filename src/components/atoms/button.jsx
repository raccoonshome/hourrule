import React, { useState } from 'react';
import StyledButton from './button.style';
import Modal from '../modal/modal';


const Button = (props) =>{
    return <StyledButton variant={props.variant} onSubmit={props.onSubmit}>{props.children}</StyledButton>
}

const ModalBtn = ({value, contents, variant}) => {
    const [modal, setModal] = useState(false);
    const handleOpenModal = () => setModal(true);
    const handleCloseModal = () => setModal(false);
    
    return <>
    <StyledButton variant={variant} onSubmit={handleOpenModal}>{value}</StyledButton>
    {modal && <Modal onClick={handleCloseModal}>{contents}</Modal>}
    </>
}

export { Button, ModalBtn };

