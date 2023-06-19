import React from 'react';
import { makeStyles,Button } from "@material-ui/core";
import Explore from '../Explore/Explore';
import { grey } from '@material-ui/core/colors';
import Logo from '../../atoms/Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Avatar from '../../atoms/Avatar';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import { useHistory } from 'react-router';
import { COLORS } from '../../../theme/constants';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
        color: theme.palette.getContrastText(grey[50]),
        backgroundColor: 'white',
        paddingLeft: theme.spacing(2.5),
        paddingRight:theme.spacing(2.5),
        boxShadow: "none",
        display: 'flex',
        justifyContent: 'space-between',
        border: "1px solid",
        borderColor: COLORS.GREY_300,
        WebkitBoxShadow: '0 6px 9px -8px grey',
        width:"100%",
        maxWidth:"1440px",
        height:"70px",
        overflow:"visible"
    },

    button: {
        textTransform: 'none',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: "normal",
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        color: COLORS.CHARCOAL_GREY,
    },

    vertical: {
        width: 1,
        height: 38,
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(8),
        backgroundColor: COLORS.GREY_300,
    },

    part1: {
        display: 'flex',
        alignItems: 'center'
    },

    part2: {
        paddingTop: theme.spacing(2),
        marginTop:theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
    },

    part21: {
        marginLeft: theme.spacing(9),
        paddingTop: theme.spacing(-2),
        marginRight:theme.spacing(4)
    },

    bell: {
        marginTop: theme.spacing(2),
        color: COLORS.ICON_500,
    },

    search: {
        paddingLeft: theme.spacing(1),
        fontFamily: " Roboto",
        fontSize: "14px",
        marginRight:theme.spacing(2)
    }
}));

const Header: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleHomeClick = () => {
        history.push('/home');
    }

    return (
        <div className={classes.root}>
            <div className={classes.part1}>
                <Logo />
                <Button className={classes.button}>Z-Athena</Button>

                <div className={classes.vertical}></div>

                <Button className={classes.button} onClick={handleHomeClick}>Home</Button>
                <Explore name="Explore" />
                <Explore name="My Library" />
            </div>

            <div className={classes.part2}>
                <SearchBar placeholder="Search here by book title, author or ISBN" className={classes.search} />
                <NotificationsNoneRoundedIcon className={[classes.part21, classes.bell].join(' ')} />
                <Avatar className={classes.part21} src="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/538902C9-7905-4080-9F4F-7EB51E1ADB98.png" />
            </div>
        </div>
    )
}

export default Header;