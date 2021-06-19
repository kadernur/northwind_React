import React,{useState} from "react";
import { useHistory } from "react-router";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history= useHistory()

  function handleSignedOut() {
    setIsAuthenticated(false)
    history.push("/")
    
  }

  function handleSignedIn() {
    setIsAuthenticated(true)
    
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary/>

            {isAuthenticated?<SignedIn signOut={handleSignedOut} bisey="1" /> :<SignedOut signIn={handleSignedIn}/>}

            
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
