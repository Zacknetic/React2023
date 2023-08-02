export default function NewEventPage(props) {

  function submitEventHandler() {  
    //handle the event submission

    props.submitEvent( )


  }



  return (
    <>
      {/* create a new event */}
      <h1>New Event</h1>

      <form>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" />
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input type="datetime-local" id="date" />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="4"></textarea>
        </div>
        <div className="form-actions">
          <button type="submit">Create Event</button>
          <button type="button">Cancel</button>
        </div>
      </form>

    </>
  );
}
