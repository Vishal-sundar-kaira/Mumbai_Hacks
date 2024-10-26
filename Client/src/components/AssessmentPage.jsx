import React, { useState } from 'react';
import axios from 'axios'; // Make sure you have axios imported

// Sample questions
const questions = [
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

const AssessmentPage = () => {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [report, setReport] = useState('');
    const [inputText, setInputText] = useState(''); // State for chatbot input
    const [chatbotOutput, setChatbotOutput] = useState(''); // State for chatbot output
    const token = 'your_token_here'; // Replace this with your actual token

    const handleAnswerClick = (questionId, answer) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setReport('Based on your answers, you need to focus on AI concepts related to neural network. You can use our Intelligent tutor for solving your doubts');
            setIsLoading(false);
        }, 2000);
    };

    const handleMentorClick = async () => {
        setIsLoading(true); // Optional: show loading state while fetching response
        try {
            const response = await axios.post("http://localhost:3000/api/profiles/get-response", {
                question: inputText // Send the input text as a question
            });
            setChatbotOutput(response.data.response); // Assuming the response from the backend contains a field called 'response'
        } catch (error) {
            console.error("Error fetching response:", error);
            setChatbotOutput("Sorry, there was an error retrieving the response."); // Error handling
        } finally {
            setInputText(''); // Clear input field after sending
            setIsLoading(false); // Hide loading state
        }
    };

    return (
        <div style={{ padding: '30px', backgroundColor: '#f7f7f7' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ color: '#333', fontSize: '24px', textAlign: 'center' }}>Assessment Questions</h4>
                <button
                    onClick={() => {}} // Placeholder for the Mentor button click event
                    style={{
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                    }}
                >
                    Mentor
                </button>
            </div>
            {questions.map((q) => (
                <div key={q.id} style={{ marginBottom: '20px' }}>
                    <p style={{ color: '#555', fontSize: '18px', textAlign: 'center' }}>{q.question}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                        {q.options.map(option => (
                            <button
                                key={option}
                                onClick={() => handleAnswerClick(q.id, option)}
                                style={{
                                    flex: '1 1 calc(50% - 10px)', // two options per row
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid #ddd',
                                    cursor: 'pointer',
                                    backgroundColor: selectedAnswers[q.id] === option ? '#4A90E2' : '#fff',
                                    color: selectedAnswers[q.id] === option ? '#fff' : '#333',
                                    fontWeight: 'bold',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    textAlign: 'center',
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            
            <button
                onClick={handleSubmit}
                style={{
                    backgroundColor: '#28A745',
                    color: '#fff',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    margin: '20px auto',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
            >
                Submit
            </button>

            {isLoading && (
                <div style={{
                    marginTop: '20px',
                    textAlign: 'center',
                }}>
                    <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>Loading...</p>
                </div>
            )}

            {report && !isLoading && (
                <div style={{
                    marginTop: '20px',
                    color: '#333',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    padding: '10px',
                    backgroundColor: '#e7f3fe',
                    borderRadius: '5px',
                    textAlign: 'center'
                }}>
                    {report}
                </div>
            )}

            {/* Chatbot Section */}
            <div style={{ marginTop: '30px' }}>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask your question..."
                    style={{
                        padding: '10px',
                        width: '80%',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        marginRight: '10px'
                    }}
                />
                <button
                    onClick={handleMentorClick}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Send
                </button>
            </div>

            {chatbotOutput && (
                <div style={{
                    marginTop: '20px',
                    color: '#333',
                    fontSize: '16px',
                    padding: '10px',
                    backgroundColor: '#e7f3fe',
                    borderRadius: '5px',
                    textAlign: 'center'
                }}>
                    {chatbotOutput}
                </div>
            )}
        </div>
    );
};

export default AssessmentPage;
