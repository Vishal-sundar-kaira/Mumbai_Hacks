import React, { useState } from 'react';

const TeacherDashboard = () => {
    const [assessmentCreated, setAssessmentCreated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [uploaded, setUploaded] = useState(false);
    const [chapterNumber, setChapterNumber] = useState('');
    const [chapterSelected, setChapterSelected] = useState(false);

    const handleLogout = () => {
        window.location.href = '/';
    };

    const handleChapterSelection = () => {
        if (chapterNumber.trim()) {
            setChapterSelected(true);
        } else {
            alert("Please enter a valid chapter number.");
        }
    };

    const handleBackToChapterSelection = () => {
        setChapterSelected(false);
        setUploaded(false);
        setChapterNumber('');
    };

    const handlePDFUpload = (event) => {
        setLoading(true);
        const file = event.target.files[0];

        if (file) {
            setTimeout(() => {
                const newQuestions = [
                    {
                        id: 1,
                        question: 'Which algorithm is commonly used for supervised learning?',
                        options: ['K-Means', 'Linear Regression', 'Apriori', 'PCA'],
                        answer: ''
                    },
                    {
                        id: 2,
                        question: 'What is the main purpose of a neural network?',
                        options: ['Data Clustering', 'Image Processing', 'Pattern Recognition', 'Random Sampling'],
                        answer: ''
                    },
                    {
                        id: 3,
                        question: 'Which language is most commonly used for AI?',
                        options: ['Java', 'Python', 'JavaScript', 'C++'],
                        answer: ''
                    },
                    {
                        id: 4,
                        question: 'What is the purpose of backpropagation in neural networks?',
                        options: [
                            'Forward pass of data',
                            'Training data generation',
                            'Error minimization',
                            'Overfitting control'
                        ],
                        answer: ''
                    },
                    {
                        id: 5,
                        question: 'Which model is best suited for natural language processing tasks?',
                        options: ['Decision Trees', 'CNN', 'RNN', 'SVM'],
                        answer: ''
                    }
                ];
                setQuestions(newQuestions);
                setLoading(false);
                setUploaded(true);
            }, 2000);
        }
    };

    // Dummy data for student groups
    const studentGroups = [
        [{ name: "Vishal" }, { name: "Karan" }, { name: "Sajid" }],
        [{ name: "Riya" }, { name: "Nidhi" }, { name: "Sarah" }],
    ];

    // Handle adding assessment
    const handleAddAssessment = () => {
        setAssessmentCreated(true);
    };

    return (
        <div
            className="teacher-dashboard"
            style={{
                margin: '10vh auto',
                padding: '30px',
                borderRadius: '10px',
                backgroundColor: '#f7f7f7',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                position: 'relative',
                width: '80%',
                maxWidth: '600px',
            }}
        >
            <button
                onClick={handleLogout}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '20px',
                    backgroundColor: '#FF3B30',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#D32F2F')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#FF3B30')}
            >
                Logout
            </button>

            <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' }}>
                Welcome, Nidhi!
            </h2>

            {!chapterSelected ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter Chapter Number"
                        value={chapterNumber}
                        onChange={(e) => setChapterNumber(e.target.value)}
                        style={{
                            marginBottom: '20px',
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            width: '80%',
                            fontSize: '16px',
                        }}
                    />
                    <button
                        onClick={handleChapterSelection}
                        style={{
                            backgroundColor: '#4A90E2',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#357ABD')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#4A90E2')}
                    >
                        Proceed with Chapter
                    </button>
                </div>
            ) : (
                <div>
                    <button
                        onClick={handleBackToChapterSelection}
                        style={{
                            backgroundColor: '#FFB74D',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#FF9800')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#FFB74D')}
                    >
                        Back to Chapter Selection
                    </button>
                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handlePDFUpload}
                        style={{
                            marginBottom: '20px',
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                        }}
                    />
                    {loading ? (
                        <p style={{ color: '#666', fontSize: '18px' }}>Loading...</p>
                    ) : uploaded ? (
                        <div>
                            <h3>Previous Questions for Chapter {chapterNumber}:</h3>
                            <ul>
                                {questions.map((item, index) => (
                                    <li key={index}>
                                        <strong>{item.question}</strong>
                                        <ul>
                                            {item.options.map((option, idx) => (
                                                <li key={idx}>{option}</li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={handleAddAssessment}
                                disabled={assessmentCreated} // Disable when assessment is created
                                style={{
                                    backgroundColor: assessmentCreated ? '#d3d3d3' : '#4A90E2', // Change color if disabled
                                    color: '#fff',
                                    border: 'none',
                                    padding: '15px 20px',
                                    borderRadius: '8px',
                                    cursor: assessmentCreated ? 'not-allowed' : 'pointer',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    marginTop: '20px',
                                }}
                                onMouseOver={(e) => {
                                    if (!assessmentCreated) {
                                        e.target.style.backgroundColor = '#357ABD';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (!assessmentCreated) {
                                        e.target.style.backgroundColor = '#4A90E2';
                                    }
                                }}
                            >
                                {assessmentCreated ? 'Assessment Added' : 'Add Assessment'}
                            </button>
                        </div>
                    ) : (
                        <p style={{ color: '#666', fontSize: '18px' }}>
                            Please upload a PDF to generate assessments for Chapter {chapterNumber}.
                        </p>
                    )}
                    {/* Display student groups if chapterNumber is 1 */}
                    {chapterNumber === '1' && (
                        <div style={{ marginTop: '20px' }}>
                            <h3>Student Groups for Chapter 1:</h3>
                            {studentGroups.map((group, index) => (
                                <div key={index}>
                                    <h4>{index === 0 ? "Basic Understanding" : "Core Understanding"}</h4>
                                    <ul>
                                        {group.map((student, idx) => (
                                            <li key={idx}>{student.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TeacherDashboard;
