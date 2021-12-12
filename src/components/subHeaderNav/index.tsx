import React, { useState } from "react";
import { StyledNav } from "./style";
import { Menu } from 'antd';
import {
    ProfileOutlined,
    FileOutlined,
    FileZipOutlined,
    FileAddOutlined
} from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import { Link } from "react-router-dom";
import {appRouterEnum} from "@/appRouter/enum";

const SubHeaderNav: React.FC = () => {
    const [current, setCurrent] = useState<string>("all");
    const menuHandleClick = (e: MenuInfo) => {
        setCurrent(e.key);
    }

    return (
        <StyledNav>
            <Menu onClick={menuHandleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="all" icon={<ProfileOutlined />}>
                    <Link to={appRouterEnum.ALL_MODULES}>Все модули</Link>
                </Menu.Item>
                <Menu.Item key="active" icon={<FileOutlined />}>
                    <Link to={appRouterEnum.ACTIVE_MODULES}>Активные модули</Link>
                </Menu.Item>
                <Menu.Item key="archive" icon={<FileZipOutlined />}>
                    <Link to={appRouterEnum.ARCHIVE}>Модули в архиве</Link>
                </Menu.Item>
                <Menu.Item key="new" icon={<FileAddOutlined />}>
                    <Link to={appRouterEnum.NEW}>Добавить новый модуль</Link>
                </Menu.Item>
            </Menu>
        </StyledNav>
    )
}

export {
    SubHeaderNav
}