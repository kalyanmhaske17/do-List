import React from "react";

function Features() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">✨ Features of Our Todo App</h1>
      <p className="text-muted text-center">
        Discover the powerful features that make task management effortless!
      </p>

      <div className="row mt-4">
        {/* Feature 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h3>✅ Easy Task Management</h3>
            <p>Quickly add, edit, and delete tasks with a simple interface.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h3>📅 Smart Reminders</h3>
            <p>Never forget a task with timely notifications and reminders.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h3>📊 Progress Tracking</h3>
            <p>Track your productivity with progress indicators and analytics.</p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        {/* Feature 4 */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h3>☁️ Cloud Sync</h3>
            <p>Access your tasks from anywhere with secure cloud storage.</p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h3>🌓 Dark Mode</h3>
            <p>Switch between light and dark themes for a comfortable experience.</p>
          </div>
        </div>

        {/* Feature 6 */}
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <h3>🔗 Share & Collaborate</h3>
            <p>Share tasks with your team and collaborate effortlessly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
