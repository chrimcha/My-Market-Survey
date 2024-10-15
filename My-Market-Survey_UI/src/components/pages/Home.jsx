import React from 'react'
import { Link } from 'react-router-dom'
import NewSurvey from './NewSurvey'

export default function Home() {
    return (
        <>
            <h1>My[Market]Survey</h1>
            
            <p className="app-description">
            Collect customer feedback from products offered at your market, pop-up, booth, or shop. Allows customers to select predetermined prompts or create their own, then organizes feedback data into charts and lists per product, event, or all together.
            </p>

            <Link to={{pathname: '/create-new-survey'}}>
                <button>Create a Survey</button>
            </Link>
        </>
    )
}
