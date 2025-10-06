import React, {useContext} from 'react';

import {ThemeContext} from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import {educationData} from '../../data/educationData'
import graduationImage from '../../assets/png/graduation.png'


function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Formazione</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            grade={edu.grade}
                            thesis={edu.thesis}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={graduationImage} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education
