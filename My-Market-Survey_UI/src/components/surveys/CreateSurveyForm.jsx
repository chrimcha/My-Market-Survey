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

    const addFields = () => {
        let newFields = '';
        setAnswerOptions([...answerOptions, newFields]);
    };

    const removeFields = (index) => {
        let data = [...answerOptions];
        data.splice(index, 1);
        setAnswerOptions(data);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const clearSurvey = () => {
        setProductName('');
        setQuestion('');
        setAnswerOptions(['', '']);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(productName, question, answerOptions, isChecked);
    };

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
            <div className="form-group">
                <label htmlFor='checkbox' className="form-label">
                    Other Thoughts Section
                    <input
                        type="checkbox"
                        id='checkbox'
                        name='isChecked'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </label >
            </div>
            {isChecked &&
                <textarea
                    rows={3}
                    className="form-control"
                    name='otherThoughts'
                    value={otherThoughts}
                    onChange={(e) => setOtherThoughts(e.target.value)}
                    required
                />
            }
        </form>

        <div className='side-by-side-buttons'>
            <button onClick={addFields} className='add'>+ Option</button>
            <button onClick={clearSurvey} className='clear'>Clear Survey</button>
        </div>

        <br/>

        <button type="submit" className="" onClick={submit}>
            Create
        </button>

    </>
)
}
