import React from "react";
import Styled from "styled-components";
import { Row, Col, Divider } from 'antd';
import { ArchiveCard } from "@/components/archiveCard";

const StyledPage = Styled.div`
    overflow-x: hidden;
    display: flex;
    width: 100%;
    justify-content: center;
    .wrapper {
        .ant-divider {
            padding: 10px 0px;
            font-size: 23px;
        }
        padding: 10px 0px 40px 0px;
        margin: 20px 0px;
        background-color: white;
        width: 90%;
}
`

const ArchivePage: React.FC = () => {

    const boilerPlateArr = [1, 2, 3];

    return (
        <StyledPage>
            <div className="wrapper">
                <Divider orientation="left" plain>
                    Архив
                </Divider>
                <Row
                    gutter={[10, 25]}
                >
                    {boilerPlateArr.map((el, index) => {
                        return (
                            <Col className="gutter-row"
                                key={`grid_modules_key_${index}`}
                                span={6}
                                xl={8}
                                lg={12}
                                md={12}
                                sm={24}
                                xs={24}
                            >
                                <Row
                                    justify="center"
                                >
                                    <ArchiveCard />
                                </Row>
                            </Col>

                        )
                    })}
                </Row>
            </div>
        </StyledPage>
    )
}

export {
    ArchivePage
}