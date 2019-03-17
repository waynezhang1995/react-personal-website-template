import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ExperiencePanel from '../Experience-Panel/ExperiencePanel';
import './DetailTabPanel.css';

const styles = {
    tabPanelRoot: 'tabPanelRoot',
    tabPanelText: 'tabPanelText'
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

        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

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
                {value === 0 && <ExperiencePanel></ExperiencePanel>}
                {value === 1 && <TabContainer>Item Two</TabContainer>}
                {value === 2 && <TabContainer>Item Three</TabContainer>}
                {value === 3 && <TabContainer>Item Three</TabContainer>}
                {value === 4 && <TabContainer>Item Three</TabContainer>}
            </div>
        );
    }
}

export default DetailTabPanel;