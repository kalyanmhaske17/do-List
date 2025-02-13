import React from 'react'

function About() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">About Our Todo App</h1>
      <p className="text-muted text-center">
        Stay organized and boost your productivity with our easy-to-use Todo App.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3> Why Choose Our App?</h3>
          <ul>
            <li>Simple and intuitive interface</li>
            <li>Organize your tasks efficiently</li>
            <li>Get reminders and stay on track</li>
            <li>Access from anywhere</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3> Our Mission</h3>
          <p>
            Our goal is to help you manage your tasks effortlessly, so you can focus
            on what truly matters. Whether it's work, school, or personal tasks, we've
            got you covered.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About