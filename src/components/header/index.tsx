import React, { useState, useEffect, useRef } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { StyledHeader } from "./style";
import { Logo } from "./logo";
import { useClickOut } from "@/app/hooks";

const Header: React.FC = () => {
    const { SubMenu } = Menu;
    const menuRef = useRef() as React.RefObject<HTMLDivElement>;
    const [openKeys, setOpenKeys] = useState<Array<string>>([""]);
    const clickOut = useClickOut(menuRef);
    useEffect(() => {
        if (clickOut) {
            setOpenKeys([""]);
        }
    }, [clickOut]);

    const onOpenChange = (keys: Array<string>): void => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (latestOpenKey) {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
        if (!latestOpenKey) {
            setOpenKeys([""]);
        }
    };
    return (
        <StyledHeader>
            <div className="wrapper">
                <Logo
                    title={"Учебные карточки"}
                />
                <div className="menu-wrapper">
                    <div
                        ref={menuRef}
                        className="menu"
                    >
                        <Menu
                            mode="inline"
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                            style={{ width: 256 }}
                        >
                            <SubMenu key="subMenu" icon={<UserOutlined />} title={"User3424"}>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>
            </div>
        </StyledHeader>
    )
}

export {
    Header
}