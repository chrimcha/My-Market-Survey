import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const CreateSurveyForm = () => {
    const [productName, setProductName] = useState("");
    const [question, setQuestion] = useState("");
    const [answerOptions, setAnswerOptions] = useState([
        '', 
        ''
    ]);
    const [isChecked, setIsChecked] = useState(false);
    const [otherThoughts, setOtherThoughts] = useState("");
    const [currentId, setCurrentId] = useState(2);
    const [data, setData] = useState({
            id: 1,
            parentId: null,
            name: "Orange Tote",
            question: "Does this bag smell?",
            options: ["yes", "no", "I can't smell"],
            otherThoughts: "Is this tote suppose to smell like oranges?"
        },
        {
            id: 2,
            parentId: null,
            name: "Turtle Basket",
            question: "Do turtles love bread?",
            options: ["What kind of bread?", "no", "yes", "I'm not sure"],
            otherThoughts: "Buying this basket really got me thinking about what turtles love to eat."
    });

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

    const viewJSONData = () => {
        if (!confirm("Would you like to see the JSON data?")){
            // Cancel is clicked
            e.preventDefault();
            alert('Cancelled!');
        } else {
            // Ok is clicked
            // console.log(data);
            // open(data);
            // if (data) {
                const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(data)
                )}`;
                console.log(jsonString);
                const link = document.createElement("a");
                link.href = jsonString;
                link.download = jsonString;
                link.URI = jsonString;
                open(jsonString);
            // }
        }
    };

    const submit = (e) => {
        e.preventDefault();
        setData(data, {
            id: currentId + 1,
            parentId: null,
            name: productName,
            question: question,
            options: answerOptions,
            otherThoughts: otherThoughts
        })
        console.log(data);
        window.location.reload();
        // TODO: get data state to update after save is pressed, might go to an alert/popup to make a "New Survey" or "Cancel" options, either reloads page to update state
        // TODO: after alert/popup is functioning, add either "Edit Survey" or "View All Surveys" option
        if (data) {
            const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(data)
            )}`;
            // console.log(jsonString);
            open(jsonString);
        }
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
                <p>Preview or <Link onClick={viewJSONData}>View JSON</Link></p>
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
