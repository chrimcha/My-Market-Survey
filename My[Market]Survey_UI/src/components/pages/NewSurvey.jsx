import React from 'react'
import { CreateSurveyForm } from '../surveys/CreateSurveyForm'

export default function NewSurvey() {
    return (
        <div className='card'>
                <h2>Create Your Survey</h2>
            <div className='card-survey'>
                <CreateSurveyForm/>
            </div>
        </div>
    )
}
