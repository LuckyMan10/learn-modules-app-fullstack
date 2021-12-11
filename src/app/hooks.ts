import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import { RootState, AppDispatch } from "./store";
import React, {useEffect, useState} from 'react';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useClickOut = (menuRef: React.RefObject<HTMLDivElement>): boolean => {
    const [outClick, setOutClick] = useState<boolean>(false);
    useEffect(() => {
        const outMenuClick = (e: MouseEvent): void => {
            if (menuRef !== null && menuRef.current) {
                if (!menuRef.current.contains(e.target as Node)) {
                    setOutClick(true);
                } else {
                    setOutClick(false);
                }
            }
        };
        document.addEventListener("click", outMenuClick);
        return () => {
            document.removeEventListener("click", outMenuClick);
        }
    }, []);
    return outClick;
}



export {
    useAppDispatch,
    useAppSelector,
    useClickOut
}