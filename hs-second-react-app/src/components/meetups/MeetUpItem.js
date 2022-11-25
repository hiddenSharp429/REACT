import classes from "./MeetUpItem.module.css"
import Card from "../UI/Card"
function MeetUpItem(props){
    return (
        <Card>
        <li>
            <h3>
                {props.title}
            </h3>
            <div>
                {props.address}
            </div>
            <div>
                {props.description}
            </div>
        </li>
        </Card>
    )
}
export default MeetUpItem