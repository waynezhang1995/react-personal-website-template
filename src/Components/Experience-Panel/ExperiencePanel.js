import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import profile from "../../Data/profile";
import moment from "moment";
import { Media } from "reactstrap";

import './ExperiencePanel.css';

function getDuration(duration) {
    const years = parseInt(duration / 12);
    const months = (duration > 12) ? duration % 12 : duration
    return (years > 0 ? years + " year" + (years > 1 ? "s" : "") + " and " : "") + (months > 0 ? months + " month" + (months > 1 ? "s" : "") : "");
};

const styles = {
    experienceContainer: 'experienceContainer'
}

class ExperiencePanel extends Component {
    render() {
        return (
            <Container className={styles.experienceContainer}>
                <Row>
                    <Col>
                        {profile.experiences.map(function (experience, i) {
                            moment.locale('en');

                            const totalDuration = experience.roles.reduce(function (cnt, role) {
                                const startDate = moment(role.startDate);
                                const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                                const duration = moment.duration(timeEnd.diff(startDate));
                                return Number(cnt) + Number(duration.asMonths().toPrecision(1));
                            }, 0);

                            return (
                                <div key={i}>
                                    <Media>
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
                                                        className="jobDuration">{startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')}</span>
                                                    <span className="jobLocation">{role.location}</span>
                                                    <p className="jobDescription">{role.description}</p>
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