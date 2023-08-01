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
                    {props.user.name}<br />{props.user.number}<br />{props.user.email}
                    <button onClick={() => setIsEditing(!isEditing)}>수정</button>
                    { isEditing && (
                        <input></input>
                    )
                    }

            </div>
        </div>
    );
}