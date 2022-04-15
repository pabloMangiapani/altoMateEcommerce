import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>Alto Mate</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/5' style={{textDecoration: "none", color: "white"}}><MenuItem>Mates</MenuItem></Link>
                    <Link to='/category/8' style={{textDecoration: "none", color: "white"}}><MenuItem>Yerbas</MenuItem></Link>
                    <Link to='/category/2' style={{textDecoration: "none", color: "white"}}><MenuItem>Accdesorios</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;
