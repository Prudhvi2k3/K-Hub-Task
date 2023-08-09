import React from "react";
import "./index.css";
function JVD_Registration() {
  return (
    <body>
      <div id="contain">
        <center>
          <h1>JVD Form</h1>
          <form>
            <label>Name:</label>
              <input type="text" name="name" />
            <label>Mother Name:</label>
              <input type="text" name="text" />
            <label>Phone No:</label>
              <input type="tel" name="phone" required />
            <label>College:</label>
              <input type="text" name="college" />
            <label>Account Number:</label>
              <input type="tel" name="number" />
          </form>
          <input type="submit" value="Submit" />
          </center>
      </div>
    </body>
  );
}
export default JVD_Registration;