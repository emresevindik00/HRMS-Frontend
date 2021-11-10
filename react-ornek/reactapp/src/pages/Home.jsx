import React from "react";
import { Button, Input } from "semantic-ui-react";
import logo from "../assets/home-icon.png";
import "./PageStyle.css";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="container-text">
          <ul>
            <li className="container-search">
              <h3>HRMS'ye Hoş Geldiniz</h3>
              <small style={{ color: "gray" }}>
                HRMS Sistemi Kullanıcıların Üye Olup İş İlanı Verebildiği
              </small>
              <Input size="massive" icon="search" placeholder="Ara..."/>
              <Button
                color="blue"
                circular
                style={{ marginTop: "30px", width: "350px", height: "50px"}}
              >
                Pozisyona Göre İş İlanı Ara
              </Button>
            </li>
            <li>
              <img src={logo} alt="" small />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}
