import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import InfoCard from '../info-card/InfoCard'
import styles from './InfoPanel.module.css';

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
