import Card from "../UI/Card";
import classes from "./NewMeetup.module.css";

function NewMeetup() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.div}>
          <label htmlFor="title">MeetUp title</label>
          <input type="text" required id="title" />
        </div>
        <div>
          <label htmlFor="image">MeetUp image</label>
          <input type="url" required id="image" />
        </div>
        <div>
          <label htmlFor="address">MeetUp address</label>
          <input type="text" required id="address" />
        </div>
        <div>
          <label htmlFor="discription">MeetUp description</label>
          <textarea id="discription" required rows="5"></textarea>
        </div>
        <div className={classes.action}>
          <button>add meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetup;
