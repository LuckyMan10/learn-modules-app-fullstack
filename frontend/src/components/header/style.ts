import Styled from "styled-components";

const StyledHeader = Styled.header`
    min-height: 70px;
    .logo h1 {
        color: white;
        margin: 0;
    }
    .ant-menu {
        user-select: none;
    }
    .logo {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .wrapper {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
    }
    .menu-wrapper {
        z-index: 15;
        position: relative;
        width: 260px;
        height: 50px;
        .menu {
            right: 0;
            top: 0;
            position: absolute;
        }
    }
    background-color: rgba(0, 0, 0, 0.81);
    width: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 570px) {
        .ant-menu-root {
            max-width: 60%;
        }
        .menu {
            display: flex;
            justify-content: end;
        }
        .logo h1 {
            line-height: 0.9;
        }
        
    }
    @media (max-width: 350px) {
        .wrapper {
            padding: 0px 5px;
        }
        .logo h1 {
            font-size: 1.2em;
        }
        .ant-menu-root {
            max-width: 50%;
        }
    }
`
export {
    StyledHeader
}