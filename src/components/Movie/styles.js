import styled from 'styled-components';

export const MovieOverview = styled.div`
    color: #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 10, 10, 0.75);
    visibility: hidden;
    overflow: hidden;
`;

export const MovieContainer = styled.div`
    width: calc(calc(100% - 112px) / 8);
    background-color: #373b69;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    position: relative;
    font-size: 14px;
    color: #fff;

    &:hover ${MovieOverview} {
        visibility: inherit;
    }

    @media (max-width: 1024px) {
        .movie {
            width: calc(calc(100% - 48px) / 4);
        }
    }

    @media (max-width: 768px) {
        .movie {
            width: calc(calc(100% - 32px) / 3);
        }
    }

    @media (max-width: 640px) {
        .movie {
            width: calc(calc(100% - 16px) / 2);
        }
    }

    @media (max-width: 480px) {
        .movie {
            width: 100%;
        }
    }
`;
export const Poster = styled.div`
    padding-top: 150%;
    position: relative;
`;

export const PosterImg = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
`;

export const MovieInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    gap: 2px;
`;

export const MovieInfoText = styled.div`
    font-weight: ${(props) => (props.title ? '600' : '400')};
`;

export const OverviewContent = styled.div`
    padding: 24px 10px 0;
`;

export const OverviewTitle = styled.div`
    font-weight: 600;
    margin-bottom: 12px;
`;

export const OverviewText = styled.div``;
