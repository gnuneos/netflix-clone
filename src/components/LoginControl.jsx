import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Button = styled.button`
    height: 28px;
    background-color: #fff;
    color: #333;
    padding: 4px 16px;
    border-radius: 16px;
`;
const Welcome = styled.div`
    color: #fff;
`;

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <Container>
            {isLoggedIn ? (
                <>
                    <Button onClick={handleLogoutClick}>로그아웃</Button>
                    <Welcome>환영합니다!</Welcome>
                </>
            ) : (
                <>
                    <Button onClick={handleLoginClick}>로그인</Button>
                    <Welcome>로그인 해주세요!</Welcome>
                </>
            )}
        </Container>
    );
}

export default LoginControl;
