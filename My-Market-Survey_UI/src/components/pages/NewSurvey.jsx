import React from 'react'
import { CreateSurveyForm } from '../surveys/CreateSurveyForm'
import { Link } from 'react-router-dom'

export default function NewSurvey() {
    return (
        <>
            <div className='card'>
                    <h2>Create Your Survey</h2>
                <div className='card-survey'>
                    <CreateSurveyForm/>
                </div>
            </div>
            <Link to={{pathname: '/'}}>
                <button>Back to Home Page</button>
            </Link>
        </>
    )
}
