import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import profile from '../../data/profile';
import StarIcon from '@material-ui/icons/Star';
import styles from './SkillPanel.module.css';

class SkillPanel extends Component {
    render() {
        return (
            <div className={styles.skillPanel}>
                {
                    profile.Skills.map((skill) => {
                        return (
                            <ExpansionPanel key={skill.Area} defaultExpanded>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h5">{skill.Area}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={styles.skillPanelDetail}>
                                    {
                                        skill.SkillSet.map((skillDetail) => {
                                            return (
                                                <Chip
                                                    icon={skillDetail.Hot ? <StarIcon /> : null}
                                                    label={skillDetail.Name}
                                                    className={styles.skillChip}
                                                    color="primary"
                                                    key={skillDetail.Name}
                                                />
                                            );
                                        })
                                    }
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        );
                    })
                }

            </div>
        );
    }
}

export default SkillPanel;
