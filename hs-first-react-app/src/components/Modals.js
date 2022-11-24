function Modals (props){

    return(
        <div className="Modals">
            <p>你确定吗</p>
            <button className="" onClick={props.onCancel}>Confirm</button>
            <button className=""onClick={props.onCancel}>Cancle</button>
        </div>
    )
}
export default Modals