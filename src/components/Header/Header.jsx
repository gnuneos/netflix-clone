import LoginControl from '../LoginControl';
import {
    Container,
    LogoWrapper,
    NavLink,
    NavLinkContainer,
    Wrapper,
} from './styles';

function Header() {
    return (
        <Container>
            <Wrapper>
                <LogoWrapper to="/">
                    <img
                        style={{ width: '154px', height: '20px' }}
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        alt="로고"
                    />
                </LogoWrapper>
                <NavLinkContainer>
                    <li>
                        <NavLink to="/movies">영화</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tv">TV 프로그램</NavLink>
                    </li>
                    <li>
                        <NavLink to="/celebrity">인물</NavLink>
                    </li>
                </NavLinkContainer>
                <LoginControl />
            </Wrapper>
        </Container>
    );
}

export default Header;
