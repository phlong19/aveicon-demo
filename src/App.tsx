import { AIFlag } from "aveicon";
import "./App.css";
import {
  arrows,
  communication,
  editing,
  finance,
  general,
  media,
  notifications,
  social,
} from "./data";
import { Tooltip } from "react-tooltip";

function App() {
  return (
    <div className="flex gap-10 flex-wrap container">
      {/* getting started */}
      <div className="box flex flex-col gap-4">
        <h3
          data-tooltip-id="logo"
          data-tooltip-content="No logo yet :("
          className="logo"
          id="logo"
        >
          Aveicon
        </h3>
        <Tooltip id="logo" />
        {/* install */}
        <p>Getting started</p>
        <code>
          <p>
            <span className="npm">npm </span>
            install --save aveicon
          </p>
          <p style={{ marginBlock: 5, color: "red" }}>or</p>
          <p>
            <span className="yarn">yarn </span>
            add aveicon
          </p>
        </code>
        {/* usage */}
        <p>How to use?</p>
        <code>
          {String(`<AIFlag fill="green" stroke="white" strokeWidth={1.3} />`)}
        </code>
        <p>turn into</p>
        <code>
          <AIFlag fill="green" stroke="white" strokeWidth={1.3} />
        </code>
      </div>
      {/* general */}
      <div className="box flex flex-col gap-4">
        <p>General</p>
        <div className="flex flex-wrap gap-6">
          {general.map(({ component }) => component)}
        </div>
      </div>
      {/* editing */}
      <div className="box flex flex-col gap-4">
        <p>Editing</p>
        <div className="flex flex-wrap gap-6">
          {editing.map(({ component }) => component)}
        </div>
      </div>
      {/* media & devices */}
      <div className="box flex flex-col gap-4">
        <p>Media & Devices</p>
        <div className="flex flex-wrap gap-6">
          {media.map(({ component }) => component)}
        </div>
      </div>
      {/* arrows */}
      <div className="box flex flex-col gap-4">
        <p>Arrows</p>
        <div className="flex flex-wrap gap-6">
          {arrows.map(({ component }) => component)}
        </div>
      </div>
      {/* communication */}
      <div className="box flex flex-col gap-4">
        <p>Communication</p>
        <div className="flex flex-wrap gap-6">
          {communication.map(({ component }) => component)}
        </div>
      </div>
      {/* social */}
      <div className="box flex flex-col gap-4">
        <p>Social</p>
        <div className="flex flex-wrap gap-6">
          {social.map(({ component }) => component)}
        </div>
      </div>
      {/* notifications  */}
      <div className="box flex flex-col gap-4">
        <p>Notifications</p>
        <div className="flex flex-wrap gap-6">
          {notifications.map(({ component }) => component)}
        </div>
      </div>
      {/* finance */}
      <div className="box flex flex-col gap-4">
        <p>Finance</p>
        <div className="flex flex-wrap gap-6">
          {finance.map(({ component }) => component)}
        </div>
      </div>
    </div>
  );
}

export default App;
