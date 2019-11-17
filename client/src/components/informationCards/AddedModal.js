import React from "react"
import styled from "styled-components"

const AddedStyled = styled.div`
.added{
    background-color: #A6CFBE;
    position: fixed;
    bottom: 10vh;
    left: 47%;
    padding: 10px;
    border-radius: 5px;
}

`

const AddedModal = (props) => {
    return (
        <>
        <AddedStyled>
            <div className={props.added ? "added": null}>
                {props.added ? "Added to Shopping List!" : null}
            </div>
        </AddedStyled>
        </>
    )
}

export default AddedModal;