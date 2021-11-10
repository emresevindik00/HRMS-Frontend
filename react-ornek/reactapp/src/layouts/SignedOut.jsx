import React from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item >
        <Link to="/sign-in" ><Button color="twitter" style={{marginRight:"10px"}} onClick={signIn}>Giriş Yap</Button></Link>
        <Link to="/register" ><Button color="instagram">Kayıt Ol</Button></Link>
        <Link to="/register-employer" ><Button color="google plus">İşveren Olarak Kayıt Ol</Button></Link>
      </Menu.Item>
    </div>
  );
}
