import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import profile from "../../data/profile";
import moment from "moment";
import { Media } from "reactstrap";

import styles from './ExperiencePanel.module.css';

class ExperiencePanel extends Component {
    render() {
        return (
            <Container className={styles.experienceContainer}>
                <Row>
                    <Col>
                        {profile.experiences.map((experience, i) => {
                            moment.locale('en');
                            experience.roles.reduce(function (cnt, role) {
                                const startDate = moment(role.startDate);
                                const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                                const duration = moment.duration(timeEnd.diff(startDate));
                                return Number(cnt) + Number(duration.asMonths().toPrecision(1));
                            }, 0);

                            return (
                                <div key={i}>
                                    <Media className={styles.media}>
                                        <Media left top href={experience.url}>
                                            <Media object src={experience.logo} alt={experience.companyName} />
                                        </Media>
                                        <Media body>
                                            <Media heading>
                                                <a href={experience.url}>{experience.companyName}</a>
                                            </Media>

                                            {experience.roles.map(function (role, i) {
                                                const startDate = moment(role.startDate);
                                                const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));

                                                return <div key={i}>
                                                    <h5>{role.title}</h5>
                                                    <span
                                                        className={styles.jobDuration}>{startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')}</span>
                                                    <span className={styles.jobLocation}>{role.location}</span>
                                                    <p className={styles.jobDescription}>{role.description}</p>
                                                </div>
                                            })}
                                        </Media>
                                    </Media>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ExperiencePanel;