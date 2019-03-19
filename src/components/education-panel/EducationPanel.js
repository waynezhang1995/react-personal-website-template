import React, { Component } from 'react';
import profile from "../../data/profile";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './EducationPanel.css';

const styles = {
    educationPanel: 'educationPanel',
    schoolImg: 'schoolImg'

}

class EducationPanel extends Component {
    render() {
        return (
            <div className={styles.educationPanel} >
                <Grid container justify="center" alignItems="center" spacing={40}>
                    {profile.Education.map(education => (
                        <Grid item xs={9} sm={9} key={education.SchoolName}>
                            <Card className={styles.card}>
                                <div className={styles.cardDetails}>
                                    <CardContent>
                                        <Grid container spacing={40}>
                                            <Grid item xs={8}>
                                                <Typography component="h2" variant="h5">
                                                    {education.SchoolName}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {education.Date}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {education.Location}
                                                </Typography>
                                                <Typography variant="subtitle1" paragraph>
                                                    {education.Description}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <ButtonBase onClick={() => window.open(education.SchoolLink)}>
                                                    <img className={styles.schoolImg} alt={education.SchoolName} src={education.SchoolImage} />
                                                </ButtonBase>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    {
                                        education.Awards.length > 0 ? (
                                            <ExpansionPanel defaultExpanded>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                    <Typography variant="h5">{"Awards"}</Typography>
                                                </ExpansionPanelSummary>
                                                <Divider variant="middle" />
                                                {education.Awards.map((award) => (

                                                    <ExpansionPanelDetails key={award.Name}>
                                                        <Grid container>
                                                            <Grid item xs={12}>
                                                                <Typography component="h2" variant="h5">
                                                                    {award.Name}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" color="textSecondary">
                                                                    {award.Date + ' - ' + award.Organization}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" color="textSecondary">
                                                                    {award.Region}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" paragraph>
                                                                    {award.Description}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" paragraph>
                                                                    {'For more infomation - ' + award.Link}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </ExpansionPanelDetails>

                                                ))}
                                            </ExpansionPanel>
                                        ) : null
                                    }
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default EducationPanel;