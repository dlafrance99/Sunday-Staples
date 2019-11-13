import React from "react";
import styled from "styled-components"

const ModalStyle = styled.div`
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  
  .modal-main {
    position:fixed;
    background: white;
    width: 80%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    text-align: center;
    padding: 10px;
  }
  
  .display-block {
    display: block;
  }
  
  .display-none {
    display: none;
  }
  h1{
      margin: 0;
  }
  .delete{
      float: right;
      background-color: transparent;
      color: red;
      border: none;
      font-weight: bolder;
  }
  .subButt{
    background-color: transparent;
    margin-top: 22px;
    border: 2px solid black;
    border-radius: 5px;
    padding: 3px;
}
`


const ReviewModal = ({ handleClose, show, children, id, saveRev, handleInputChange, comment, rating }) => {


    const showHideClassName = show ? "modal display-block" : "modal display-none";


    return (
        <>
            <ModalStyle>

                <div className={showHideClassName}>
                    <section className="modal-main">
                        {children}
                        <button
                            onClick={handleClose}
                            className="delete"
                        >
                            X
                    </button>
                        <h1>Review this {id.name}</h1>
                        <h2>Comment:</h2>
                        <input 
                            value={comment}
                            onChange={handleInputChange}
                            className="comment"
                            name="comment"
                            placeholder="enter comment"
                        />
                        <h2>Rating:</h2>
                        <select
                            value={rating}
                            onChange={handleInputChange}
                            className="rating"
                            name="rating"
                        >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br />
                        <button
                            className="subButt"
                            onClick={saveRev}
                        >
                            Submit
                            </button>
                    </section>
                </div>
            </ModalStyle>
        </>
    )

}

export default ReviewModal;
