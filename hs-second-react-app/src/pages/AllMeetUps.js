import MeetUpList from "../components/meetups/MeetUpList";
const Dummy_data = [
  {
    id: "1",
    title: "octMeeting",
    address: "白石路二号",
    description: "A important meeting",
  },
  {
    id: "2",
    title: "stuMeeting",
    address: "大学路243号",
    description: "A important meeting",
  },
];
function AllMeetUpsPage() {
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetUpList meetups={Dummy_data}/>
    </div>
  );
}
export default AllMeetUpsPage;
