import React, { useState } from 'react'

export const CreateSurveyForm = () => {
    const [productName, setProductName] = useState("");
    const [question, setQuestion] = useState("");
    const [answerOptions, setAnswerOptions] = useState([
        '', 
        ''
    ]);
    // const [otherThoughts, setOtherThoughts] = useState("");

    const handleAnswerOptionsChange = (index, e) => {
        let data = [...answerOptions];
        data[index] = e.target.value;
        setAnswerOptions(data);
    };

    const addFields = () => {
        let newFields = '';
        setAnswerOptions([...answerOptions, newFields]);
    };

    const removeFields = (index) => {
        let data = [...answerOptions];
        data.splice(index, 1);
        setAnswerOptions(data);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(productName, question, answerOptions);
    };

    return (
    <>
        <form onSubmit={submit}>
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
                    <textarea
                        rows={3}
                        className="form-control"
                        name='question'
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </label >
            </div>
            {answerOptions.map((input, index) => {
                return (
                    <div key={index} className="form-group">
                        <label className="form-label label-with-remove-button">
                            Option {index + 1}
                            <input
                                type="text"
                                className="form-control"
                                name="option"
                                placeholder='enter option'
                                value={input}
                                onChange={(e) => handleAnswerOptionsChange(index, e)}
                                required
                            />
                        </label >
                        <button className='remove' onClick={() => removeFields(index)}>- Option</button>
                    </div>
                )
            })}
            <button onClick={addFields} className='add'>+ Option</button>
{/* // TODO: If other thoughts section is checked, a textarea field appears and is required */}
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

        <br/>

        <div className='side-by-side-buttons'>
            <button className='clear'>Clear Survey</button>
        </div>
    </>
)
}
