import React from "react";
import Styled from "styled-components";
import { Card } from 'antd';
import { FileZipOutlined } from '@ant-design/icons';

const StyledCard = Styled.article`
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

const ArchiveCard: React.FC = () => {
    return (
        <StyledCard>
            <Card title="Default size card" extra={<FileZipOutlined />} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </StyledCard>
    )
};

export {
    ArchiveCard
}