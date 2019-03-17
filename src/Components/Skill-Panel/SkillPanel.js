import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import profile from '../../Data/profile';
import StarIcon from '@material-ui/icons/Star';
import './SkillPanel.css';

const styles = {
    skillChip: 'skillChip',
    skillPanelDetail: 'skillPanelDetail'
}

class SkillPanel extends Component {
    render() {
        return (
            <div>
                {
                    profile.Skills.map((skill) => {
                        return (
                            <ExpansionPanel defaultExpanded>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography variant="h5">{skill.Area}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={styles.skillPanelDetail}>
                                    {
                                        skill.SkillSet.map((skillDetail) => {
                                            return (
                                                <Chip
                                                    icon={skillDetail.Hot ? <StarIcon /> : ''}
                                                    label={skillDetail.Name}
                                                    className={styles.skillChip}
                                                    color="primary"
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
