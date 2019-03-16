import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import WorkIcon from '@material-ui/icons/Work';
import { SocialIcon } from 'react-social-icons';
import SchoolIcon from '@material-ui/icons/School';
import './InfoCard.css';

const styles = {
    infoPaper: 'infoPaper',
    infoGrid: 'infoGrid',
    bigAvatar: 'bigAvatar',
    infoList: 'infoList',
    divider: 'divider',
    socialMedias: 'socialMedias',
    socialMediasIcon: 'socialMediasIcon'
}

const socialMediaList = ['https://github.com/waynezhang1995', 'https://www.linkedin.com/in/wayne-zhang-ab5534129/', 'https://www.facebook.com/wayne.zhang.3'];

class InfoCard extends Component {
    render() {
        return (
            <div>
                <Grid container className={styles.infoGrid} justify="center" alignItems="center">
                    <Grid item>
                        <Avatar alt="Remy Sharp" className={styles.bigAvatar} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3" className="name">
                            Wayne Zhang
                        </Typography>
                        <Typography variant="h5" className="position">
                            Software Developer
                        </Typography>
                        <Typography variant="h6" className="introduction">
                            Welcome to my website. My name is Wayne Zhang, I am a computer science new grad and a web developer.
                        </Typography>
                    </Grid>
                    <Divider className={styles.divider} variant="middle" />
                    <Grid item xs={12}>
                        <List className={styles.infoList}>
                            <ListItem>
                                <Avatar>
                                    <LocationCityIcon />
                                </Avatar>
                                <ListItemText primary="Vancouver BC. Canada"/>
                            </ListItem>
                            <ListItem>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                                <ListItemText primary="Global Relay"/>
                            </ListItem>
                            <ListItem>
                                <Avatar>
                                    <SchoolIcon />
                                </Avatar>
                                <ListItemText primary="University of Victoria"/>
                            </ListItem>
                        </List>
                    </Grid>
                    <Divider className={styles.divider} variant="middle" />
                    <Grid item xs={12} className={styles.socialMedias}>
                    {socialMediaList.map(s => (<SocialIcon className={styles.socialMediasIcon} key={s} url={s} bgColor="#fff"/>))}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default InfoCard;
