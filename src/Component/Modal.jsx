import { useState } from "react";

export default function Modal(props)
{
const[isEditing,setIsEditing] = useState(false);

    function closeModal()
    {
        props.closeModal();
    }

    return(
        <div className="Modal">
            <div className="modalBody" >
                <button id="modalCloseBtn" onClick={closeModal}>
                    ❌
                </button>
                { isEditing && (
                        <>
                        <input value ={props.user.name}></input>
                        <input value ={props.user.number}></input>
                        <input value ={props.user.mail}></input>
                        </>
                    )
             }
                    <div >{props.user.name} <br />{props.user.number}<br />{props.user.mail}
                    <button onClick={() => setIsEditing(!isEditing)}>수정</button> </div> 
                  

            </div>
        </div>
    );
}