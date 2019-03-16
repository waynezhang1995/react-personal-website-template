import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import InfoCard from '../Info-Card/InfoCard'
import './InfoPanel.css';

const styles = {
    drawer: 'drawer',
    drawerPaper: 'drawerPaper'
}

class InfoPanel extends Component {
    render() {
        return (
            <div>
                <Drawer className={styles.drawer} variant="permanent" classes={{paper: styles.drawerPaper}} anchor="left">
                    <InfoCard></InfoCard>
                </Drawer>
            </div>

        );
    }
}

export default InfoPanel;
