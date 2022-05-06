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
                    <Link to='/category/Mates' style={{textDecoration: "none", color: "white"}}><MenuItem>Mates</MenuItem></Link>
                    <Link to='/category/Yerbas' style={{textDecoration: "none", color: "white"}}><MenuItem>Yerbas</MenuItem></Link>
                    <Link to='/category/Accesorios' style={{textDecoration: "none", color: "white"}}><MenuItem>Accesorios</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;
