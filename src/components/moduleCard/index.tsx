import React from "react";
import Styled from "styled-components";
import { Card, Avatar } from 'antd';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';

const StyledCart = Styled.article`
    .ant-card-meta-title {
        text-align: center;
    }
    .ant-card-meta-description {
        text-align: center;
    }
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        transition: 0.3s;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
`

const ModuleCart: React.FC = () => {
    const { Meta } = Card;
    return (
        <StyledCart>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />
                ]}
            >
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </StyledCart>
    )
};

export {
    ModuleCart
}