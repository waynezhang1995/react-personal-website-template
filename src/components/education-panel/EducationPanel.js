import React, { Component } from 'react';
import profile from "../../data/profile";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './EducationPanel.css';

const styles = {
    educationPanel: 'educationPanel',
    schoolImg: 'schoolImg'

}

class EducationPanel extends Component {
    render() {
        return (
            <div className={styles.educationPanel} >
                <Grid container spacing={40}>
                    {profile.Education.map(education => (
                        <Grid item xs={12} sm={6} key={education.SchoolName}>
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