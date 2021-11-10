import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./MyStyle.css";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setAuthenticated] = useState(true);

  function handleSignOut() {
    setAuthenticated(false);
  }

  function handleSignIn() {
    setAuthenticated(true);
  }

  return (
    <div>
      <Menu borderless>
        <Menu secondary style={{ marginLeft: "260px",marginTop:"5px" }}>
          <Link to="/" style={{ marginTop: "10px" }}>
            <Menu.Item
              name="Ana Sayfa"
              icon="home"
              style={{ color: "midnightblue" }}
            />
          </Link>
          <Link to="/employer" style={{ marginTop: "10px" }}>
            <Menu.Item
              name="İş Verenler"
              icon="users"
              style={{ color: "gray" }}
            />
          </Link>
          <Link to="/employees" style={{ marginTop: "10px" }}>
            <Menu.Item
              name="İş Arayanlar"
              icon="users"
              style={{ color: "gray" }}
            />
          </Link>
          <Link to="/job-advertisement" style={{ marginTop: "10px" }}>
            <Menu.Item
              name="İş İlanları"
              icon="list alternate outline"
              style={{ color: "gray" }}
            />
          </Link>
        </Menu>
        <Menu.Menu position="right" style={{ marginRight: "260px" }}>
          <SignedOut to="/sign-in" />
        </Menu.Menu>
      </Menu>
    </div>
  );
}
