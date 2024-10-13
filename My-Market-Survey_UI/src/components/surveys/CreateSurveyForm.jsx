import React, { useState } from 'react'

export const CreateSurveyForm = () => {
    const [productName, setProductName] = useState("");
    const [question, setQuestion] = useState("");
    const [numberOfAnswers, setNumberOfAnswers] = useState();
    // const [otherThoughts, setOtherThoughts] = useState("");

    return (
    <>
        <form>
            <div className="form-group">
                <label className="form-label">
                    Product Name
                    <input
                        type="text"
                        className="form-control"
                        name='productName'
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </label >
            </div>
            <div className="form-group">
                <label className="form-label">
                    Question
                    <input
                        type="text"
                        className="form-control"
                        name='question'
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </label >
            </div>
{/* // TODO: Replace # of answer field with code to add and remove fields to enter answer options, with at least two required */}
            <div className="form-group">
                <label className="form-label">
                    Number of Answer Selections
                    <input
                    type="number"
                    className="form-control"
                    name='numberOfAnswers'
                    value={numberOfAnswers}
                    onChange={(e) => setNumberOfAnswers(e.target.value)}
                    required
                    />
                </label >
            </div>
            <div className="form-group">
                <label className="form-label">
                    Other Thoughts Section
                    <input
                    type="checkbox"
                    // className="form-control"
                    // name='otherThoughts'
                    // value={otherThoughts}
                    // onChange={(e) => setOtherThoughts(e.target.value)}
                    />
                </label >
            </div>

            <button type="submit" className="">
                Create
            </button>
        </form>
    </>
)
}
