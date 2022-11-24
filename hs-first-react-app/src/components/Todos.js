import { useState } from 'react'
import Modals from './Modals';
import Backdrop from './Backdrop';

function Todos(props){
    const[ modalIsOpen, setMoalIsOpen] = useState(false);
    function deleteHandler(){
        setMoalIsOpen(true);
    };
    function cancleModals(){
        setMoalIsOpen(false);
    };
    return(
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>delete</button>
            </div>
            { modalIsOpen ? <Modals onCancel={cancleModals}></Modals> : null}
            { modalIsOpen ? <Backdrop onCancel={cancleModals}></Backdrop> : null}
        </div>
        
    )
}

export default Todos;