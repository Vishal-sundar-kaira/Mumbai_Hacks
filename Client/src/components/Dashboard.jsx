import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const userName = "John Doe"; // Replace this with the actual user's name
  const stats = {
    coursesCompleted: 5,
    coursesInProgress: 3,
    upcomingAssignments: 2,
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {userName}!</h1>
        <p>Your personalized learning dashboard</p>
      </header>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h2>{stats.coursesCompleted}</h2>
          <p>Courses Completed</p>
        </div>
        <div className="stat-card">
          <h2>{stats.coursesInProgress}</h2>
          <p>Courses In Progress</p>
        </div>
        <div className="stat-card">
          <h2>{stats.upcomingAssignments}</h2>
          <p>Upcoming Assignments</p>
        </div>
      </div>

      <nav className="dashboard-nav">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/profile">View Profile</a></li>
          <li><a href="/courses">My Courses</a></li>
          <li><a href="/assignments">My Assignments</a></li>
          <li><a href="/resources">Learning Resources</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
