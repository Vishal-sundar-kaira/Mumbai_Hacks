import React, { useState } from 'react';
import ChapterPage from './ChapterPage';

const chapters = ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'];

const SubjectPage = ({ subject, goBack }) => {
    const [selectedChapter, setSelectedChapter] = useState(null);

    return (
        <div
            style={{
                margin: '10vh auto',
                padding: '30px',
                borderRadius: '10px',
                backgroundColor: '#f7f7f7',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                width:"50%"
            }}
        >
            <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' }}>{subject}</h2>

            {!selectedChapter && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <h3 style={{ color: '#666', fontSize: '20px', marginBottom: '10px' }}>
                        Select a Chapter:
                    </h3>
                    {chapters.map((chapter, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedChapter(chapter)}
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
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#357ABD')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#4A90E2')}
                        >
                            {chapter}
                        </button>
                    ))}

                    <button
                        onClick={goBack}
                        style={{
                            backgroundColor: '#888',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 15px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease',
                            marginTop: '20px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            width: '50%',
                            alignSelf: 'center'
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#555')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#888')}
                    >
                        Back
                    </button>
                </div>
            )}

            {selectedChapter && <ChapterPage chapter={selectedChapter} />}
        </div>
    );
};

export default SubjectPage;
