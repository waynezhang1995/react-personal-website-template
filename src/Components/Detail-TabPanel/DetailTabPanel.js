import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExperiencePanel from '../experience-panel/ExperiencePanel';
import SkillPanel from '../skill-panel/SkillPanel';
import ProjectTabPanel from '../project-tabpanel/ProjectTabPanel';
import SwipeableViews from 'react-swipeable-views';
import './DetailTabPanel.css';

const styles = {
    tabPanelRoot: 'tabPanelRoot',
    tabPanelText: 'tabPanelText',
    tabContainer: 'tabContainer'
}

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

class DetailTabPanel extends Component {

    constructor(props) {
        super(props);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
      };

    render() {
        const { value } = this.state;
        const { theme } = this.props;
        return (
            <div className={styles.tabPanelRoot}>
                <AppBar position="static">
                    <Tabs value={value} variant="fullWidth" onChange={this.handleChange}>
                        <Tab className={styles.tabPanelText} label="My Experience" />
                        <Tab className={styles.tabPanelText} label="My Skills" />
                        <Tab className={styles.tabPanelText} label="My Personal Projects" />
                        <Tab className={styles.tabPanelText} label="My Education" />
                        <Tab className={styles.tabPanelText} label="My Awards" />
                    </Tabs>
                </AppBar>
                {/* {value === 0 && <ExperiencePanel></ExperiencePanel>}
                {value === 1 && <SkillPanel></SkillPanel>}
                {value === 2 && <ProjectTabPanel></ProjectTabPanel>}
                {value === 3 && <TabContainer>Item Three</TabContainer>}
                {value === 4 && <TabContainer>Item Three</TabContainer>} */}
                <SwipeableViews animateHeight={true} className={styles.tabContainer} axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={this.state.value} onChangeIndex={this.handleChangeIndex}>
                    <ExperiencePanel dir={theme.direction}></ExperiencePanel>
                    <SkillPanel dir={theme.direction}></SkillPanel>
                    <ProjectTabPanel dir={theme.direction}></ProjectTabPanel>
                    <TabContainer dir={theme.direction}>Coming soon</TabContainer>
                    <TabContainer dir={theme.direction}>Item Three</TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(DetailTabPanel);