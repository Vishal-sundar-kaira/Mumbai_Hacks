import React, { useState } from 'react';
import SubjectPage from './SubjectPage';

const subjects = ['English', 'Hindi', 'Marathi', 'Math', 'Machine Learning'];

const StudentDashboard = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);

    const handleLogout = () => {
        // Refresh the page or redirect to the home page
        window.location.href = '/'; // Redirect to home page (you can replace this with any desired URL)
    };

    return (
        <div
            style={{
                margin: '10vh auto',
                padding: '30px',
                borderRadius: '10px',
                backgroundColor: '#f7f7f7',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: 'relative' // Set position relative for the logout button
            }}
        >
            <button
                onClick={handleLogout}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '20px',
                    backgroundColor: '#FF3B30', // Red color for logout
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
                Welcome, Karan!
            </h2>

            {!selectedSubject && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: "50%" }}>
                    <h3 style={{ color: '#666', fontSize: '20px', marginBottom: '10px' }}>
                        Select a Subject:
                    </h3>
                    {subjects.map(subject => (
                        <button
                            key={subject}
                            onClick={() => setSelectedSubject(subject)}
                            style={{
                                backgroundColor: '#4A90E2',
                                color: '#fff',
                                border: 'none',
                                padding: '15px 20px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                                width: '100%'
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#357ABD')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#4A90E2')}
                        >
                            {subject}
                        </button>
                    ))}
                </div>
            )}

            {selectedSubject && <SubjectPage subject={selectedSubject} />}
        </div>
    );
};

export default StudentDashboard;
