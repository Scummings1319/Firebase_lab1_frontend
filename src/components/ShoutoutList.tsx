import ShoutOut from "../models/shoutoutInterface";

interface Props {
  shoutouts: ShoutOut[];
}

export default function ShoutoutList({ shoutouts }: Props) {
  return (
    <div>
      <h2>All Shout Outs</h2>
      <ul>
        {shoutouts.map((shoutout, index) => {
          return (
            <li key={index}>
              <p className="shoutoutTo">Shoutout to {shoutout.to}</p>
              <p>-from {shoutout.from}</p>
              <p className="message">{shoutout.shoutout}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
