import React, { useState } from 'react'

export const CreateSurveyForm = () => {
    const [productName, setProductName] = useState("");
    const [question, setQuestion] = useState("");
    const [answerOptions, setAnswerOptions] = useState([
        '', 
        ''
    ]);
    const [isChecked, setIsChecked] = useState(false);
    const [otherThoughts, setOtherThoughts] = useState("");

    const handleAnswerOptionsChange = (index, e) => {
        let data = [...answerOptions];
        data[index] = e.target.value;
        setAnswerOptions(data);
    };

    const addFields = (e) => {
        e.preventDefault();
        let newFields = '';
        setAnswerOptions([...answerOptions, newFields]);
    };

    const removeFields = (index, e) => {
        e.preventDefault();
        let data = [...answerOptions];
        data.splice(index, 1);
        setAnswerOptions(data);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const clearSurvey = (e) => {
        // e.preventDefault();
        // setProductName('');
        // setQuestion('');
        // setAnswerOptions(['', '']);
        // setIsChecked(false);
        window.location.reload();
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(productName, question, answerOptions, isChecked);
    };
// TODO: Figure out how to unfocus button after click, so that if you press enter it doesn't select button again
    return (
        <>
            <div className='form-and-preview'>
                <div className='survey-form'>
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
                                <div key={index} className="form-group option-wrap">
                                    <label className="form-label">
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
                                    <button className='remove' onClick={(e) => removeFields(index, e)}>
                                        - Option
                                    </button>
                                </div>
                            )
                        })}
                        <div className="form-group">
                            <label htmlFor='checkbox' className="form-label">
                                Other Thoughts Section
                                <input
                                    type="checkbox"
                                    className='checkbox'
                                    name='isChecked'
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                            </label >
                        </div>

                        <div className='side-by-side-buttons'>
                            <button onClick={(e) => addFields(e)} className='add'>+ Option</button>
                            <button onClick={(e) => clearSurvey(e)} className='clear'>Clear Survey</button>
                        </div>

                        <br/>
        {/* // TODO: instead of printing to the console */}
                        <button type="submit" className="">
                            Save
                        </button>
                    </form>
                </div>
                <div>
                <p>Preview</p>
                <div className='preview-survey'>
                    <h3>{productName}</h3>
                    <label>
                        Question: 
                        <p>{question}</p>
                    </label>
                        Select All That Apply
                        <div className='option-wrap-preview'>
                            {answerOptions.map((option, index) => {
                                return (
                                    <div key={index} className='ck-button'>
                                        <label>
                                            <input 
                                                type='checkbox' hidden
                                                className='option'
                                            />
                                            <span>{option}</span>
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    {isChecked &&
                        <label>
                            Other Thoughts:
                                <textarea
                                    rows={3}
                                    className="form-control otherThoughts-textarea"
                                    name='otherThoughts'
                                    value={otherThoughts}
                                    // placeholder=''
                                    onChange={(e) => setOtherThoughts(e.target.value)}
                                />
                        </label>
                    }
                </div>
                </div>
            </div>
        </>
    )
}
