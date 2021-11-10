import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item color="olive" style={{marginRight:"20px"}}>
                <Image avatar spaced="right" src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"></Image>
                <Dropdown pointing text="Emre Sevindik">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
