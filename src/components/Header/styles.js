import styled from 'styled-components';
import { Link, NavLink as NavLinkImpl } from 'react-router-dom';

export const Container = styled.nav`
    background-color: #032541;
    display: flex;
    width: 100%;
    height: 56px;
`;

export const Wrapper = styled.div`
    max-width: 1140px;
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

export const LogoWrapper = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavLinkContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    gap: 20px;

    & li {
        list-style: none;
    }
`;

export const NavLink = styled(NavLinkImpl)`
    color: #fff;
    font-weight: 700;
    text-decoration: none;
`;
