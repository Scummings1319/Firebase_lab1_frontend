import React, { useEffect, useState } from "react";
import ShoutoutList from "../components/ShoutoutList";
import "./allShoutouts.css";

import ShoutOut from "../models/shoutoutInterface";

import { addShoutout, fetchAllShoutouts } from "../services/shoutoutAPIservice";

export default function AllShoutoutsRoute() {
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);
  useEffect(() => {
    fetchAllShoutouts().then((res) => setShoutOuts(res));
  }, [shoutOuts]);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [textArea, setTextArea] = useState("");

  return (
    <div>
      <ShoutoutList shoutouts={shoutOuts} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addShoutout({ to: to, from: from, shoutout: textArea });
          setTo("");
          setFrom("");
          setTextArea("");
        }}
      >
        <h1>Leave a Shout out! </h1>
        <label htmlFor="to" className="to">
          To
        </label>
        <input
          className="toInput"
          type="text"
          name="to"
          id="to"
          value={to}
          onChange={(e) => {
            setTo(e.target.value);
          }}
        />
        <label htmlFor="from" className="from">
          From
        </label>
        <input
          className="fromInput"
          type="text"
          name="from"
          id="from"
          value={from}
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        />

        <label htmlFor="shoutout" className="shoutout">
          Shoutout
        </label>
        <textarea
          className="shoutoutInput"
          name="shoutout"
          id="shoutout"
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        ></textarea>
        <input
          className="submitButton"
          type="submit"
          value="Submit Shout out!"
        />
      </form>
    </div>
  );
}
