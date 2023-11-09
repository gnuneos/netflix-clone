import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    aspect-ratio: 2000/333;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

function Ad({ visible }) {
    if (visible === false) return null;
    return (
        <Container>
            <img src="/images/Ad.svg" alt="광고" />
        </Container>
    );
}

export default Ad;
