import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetch } from '../../slices/userSlice';
import { IUser } from '../../interfaces';
import './index.css';

const Header = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector<IUser>(state => state.user.data);

    const [userName, setUserName] = useState<string | undefined>(undefined);

    useEffect(() => {
        dispatch(fetch());
    }, []);

    useEffect(() => {
        if (user) {
            setUserName(`${user.firstName} ${user.lastName}`);
        } else {
            setUserName(undefined);
        }
    }, [user]);

    return (
        <header>
            <IconButton aria-label="menu" size="large">
                <MenuIcon />
            </IconButton>
            <h1 className="text-logo">EduK8</h1>
            <Avatar alt={userName} />
        </header>
    );
}

export { Header };