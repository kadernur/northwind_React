import React from "react";
import { Dropdown, Menu,Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://yandex.com.tr/gorsel/search?text=kader&from=tabbar&pos=26&img_url=https%3A%2F%2Ffoto.sondakika.com%2Fgaleri%2F2011%2F10%2F01%2Fcocuk-yildizlarin-dususu_12501_b.jpg&rpt=simage"
        />

        <Dropdown pointing="top left" text="Kader">
            <Dropdown.Menu>

                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>

                
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
