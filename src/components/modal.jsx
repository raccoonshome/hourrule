import React from "react";
import { Wrap, Title, Content } from './modal.style';
import { Button } from "./button";
import Img from "./img.style";

const Modal = ({children, onClick}) => {
    return <Wrap>
        <Title>{children.title}</Title>
        {children.content && <Content>{children.content}</Content>}
        {children.img && <Img src={children.img} alt={children.alt ?? ``}/>}
        <Button onClick={onClick}>{children.close}</Button>
    </Wrap>
}

export default Modal;