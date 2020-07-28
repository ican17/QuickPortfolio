import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
    position :absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: whitesmoke;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    z-index:100;
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    opacity: ${props => props.show ? '1' : '0'};
    min-width: 50vw;
    min-height: 50vh;
    transition: visibility 0s, opacity 0.5s ease;
    border-radius : 0.3rem;
    padding: 0.3rem;
    box-sizing: border-box;
    button{
        
        background-color:black;
        color:white;
        border: none;
        border-radius : 0.3rem;
        padding: 0.3rem;
        box-sizing: border-box;
    }
`;
const Background = styled.div`
    position :absolute;
    top:0;
    left:0;
    background-color: black;
    opacity: ${props => props.show ? '0.5' : '0'};
    z-index:98;
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    width: 100vw;
    height: 100vh;
    transition: visibility 0s, opacity 0.25s ease;
`;
function withModal(Component) {
    return props => {
        const [showModal, setShowModal] = useState(false);
        const [modalContent, setModalContent] = useState(null);
        const onShowModalHandler = (ModalContent= null) => {
            setShowModal(true);
            setModalContent(ModalContent);
        }
        const onHideModalHandler = () => {
            setShowModal(false);
        }
        return (
            <Fragment>
                <Background show={showModal ? 1 : 0} onClick={onHideModalHandler}></Background>
                <Modal show={showModal ? 1 : 0}>
                    {modalContent}
                    <button onClick={onHideModalHandler}>Close</button>
                </Modal>
                <Component {...props} show = { onShowModalHandler}/>
            </Fragment>
        )
    }

}

export default withModal;
