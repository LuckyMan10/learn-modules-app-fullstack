import React from "react";
import { ModuleCart } from "@/components/moduleCard/index";
import { Row, Col, Divider } from 'antd';
import {StyledPage} from "./style"

const AllModulesPage: React.FC = () => {

    const boilerPlateArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <StyledPage>
            <div className="wrapper">
            <Divider orientation="left" plain>
                Все модули
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
                                    <ModuleCart />
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
    AllModulesPage
}
