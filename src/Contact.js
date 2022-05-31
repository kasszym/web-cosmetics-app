import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-container1">
        <div id="update">
          stay updated
          <br />
          and receive the latest news
        </div>
        <div className="mail">
          <p>Enter your email here *</p>
          <form>
            <label id="label">
              <input id="labelText" type="text" name="mail" />
            </label>
            <input id="join" type="submit" value="Join" />
          </form>
        </div>
        <div className="design">
          Design inspiration: <a href="https://www.wix.com/">Wix.com</a>
          <br />
          Design Studio:{" "}
          <a href="https://www.wix.com/templateslp/links">BARBARO</a>
        </div>
      </div>

      <div className="contact-container2">
        <div id="biggerLogo">
          <p>SHU</p>
          <p>SHU</p>
        </div>
      </div>
    </div>
  );
}
