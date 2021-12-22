import Styled from "styled-components";

const AppStyle = Styled.div<{ pageSize: number }>`
    .content {
        width: 100%;
        display: flex;
        justify-content: center;
        height: ${(props) => props.pageSize ? ((props.pageSize - 140) + "px") : "initial"};
        
    }
`

export {
    AppStyle
}