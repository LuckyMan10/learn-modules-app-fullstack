import React from 'react';
import logo from "@/assets/images/logo.svg";

type logoType = {
    title: string;
}

const Logo: React.FC<logoType> = ({title}) => {
    return (
        <section className="logo">
            <img src={logo} />
            <h1>{title}</h1>
        </section>
    )
}

export { Logo }