import styled from "styled-components";

export const Tilegrid = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
`

export const Tile = styled.div`
    position: relative;
    &:hover {
        opacity: 0.5 !important;
        cursor: pointer;
    }
    &:before {
        background-color: rgb(24, 24, 24);
        content: "";
        position: absolute;
        inset: 0.5px;
    }
`

export const TileText = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    font-size: 15rem;
    font-weight: 700;
    pointer-events: none;
    text-shadow: 0 0 1px white;
`;