export default function ContactForm() {
  // Each input has it's own div
  return (
    <form method="GET" action="https://www.sait.ca">
      <div>
        <label>Full Name: </label>
        <input type="text" value="Derrick"/>
      </div>
      <div>
        <label>Phone Number: </label>
        <input type="tel" />
      </div>
      <div>
        <label>Email Address: </label>
        <input type="email" />
      </div>
      <div>
        <label>Birthdate: </label>
        <input type="date"></input>
      </div>
      {/* <div>
        <h2>Contact Type</h2>
        <div>
          <input type="radio" name="contact_type" id="ct_personal" />
          <label for="">Personal</label>
        </div>
        <div>
          <input type="radio" name="contact_type" id="ct_business" />
          <label>Business</label>
        </div>
      </div> */}

      <div>
        <label>Contact Type</label>
        <select>
          <option value="personal">Personal</option>
          <option value="business">Business</option>
        </select>
      </div>


      <div>
        <label>Message: </label>
        <textarea></textarea>
      </div>

      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
