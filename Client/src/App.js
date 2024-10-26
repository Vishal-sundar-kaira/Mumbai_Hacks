import React, { useState } from 'react';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';

function App() {
    const [userRole, setUserRole] = useState(null); // 'student' or 'teacher'

    return (
        <div className="App">
            {!userRole && <Login setUserRole={setUserRole} />}
            {userRole === 'student' && <StudentDashboard />}
            {userRole === 'teacher' && <TeacherDashboard />}
        </div>
    );
}

export default App;
