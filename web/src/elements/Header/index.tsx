import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetch } from '../../slices/userSlice';
import { IUser } from '../../interfaces';
import { stringToColor } from '../../utils';
import './index.css';

const Header = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector<IUser>(state => state.user.data);

    const [userName, setUserName] = useState<string | undefined>(undefined);
    const [userInitials, setUserInitials] = useState<string | null>(null);

    useEffect(() => {
        dispatch(fetch());
    }, []);

    useEffect(() => {
        if (user) {
            setUserName(`${user.firstName} ${user.lastName}`);

            let initials = '';
            if (user.firstName) {
                initials = user.firstName[0];
            }

            if (user.lastName) {
                initials += user.lastName[0];
            }

            setUserInitials(initials);
        } else {
            setUserName(undefined);
            setUserInitials(null);
        }
    }, [user]);

    return (
        <header>
            <IconButton aria-label="menu" size="large">
                <MenuIcon />
            </IconButton>
            <h1 className="text-logo">EduK8</h1>
            <IconButton>
                <Avatar
                    alt={userName}
                    sx={{ bgcolor: stringToColor(userInitials) }}
                >{userInitials}</Avatar>
            </IconButton>
        </header>
    );
}

export { Header };