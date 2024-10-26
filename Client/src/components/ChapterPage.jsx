import React, { useState } from 'react';
import AssessmentPage from './AssessmentPage';

const ChapterPage = ({ chapter }) => {
    return (
        <div className="chapter-page">
            <h3>{chapter}</h3>
            <AssessmentPage />
        </div>
    );
};

export default ChapterPage;
