import React from 'react'

const Dashboard = () => {
  return (
    <div className="columns">
      <div className="column is-12">
        <div className="box content">
          <h1>
            Hello <span>👋</span>
          </h1>
          <p>Here are some instructions to get you going :-)</p>
          <p>
            The problem that this test contains is an actual challenge that we
            faced during the development of our custom account area.
          </p>
          <p>
            The main focus is on data manipulation and presenting order history
            information to a customer by bundling the products from an API call
            in a structured and more readable way. In the Techincal Task tab
            there is a component with some hardcoded HTML that needs to be
            transformed into a dynamic React component that fetches its data from the API
            endpoint provided.
          </p>
          <p>
            The minimum requirement is to make the dynamic component visually the same as the hardcoded example provided. Anything additional is at your discretion. If you have applied for a senior position then we would also like you to write at least one test of your choice.
          </p>
          <ul>
            <li>
              Here is the endpoint to pull the information from:{' '}
              <a
                href="https://frontendtest.huel.io/api/line-items"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://frontendtest.huel.io/api/line-items
              </a>
            </li>
            <li>You can install any npm package</li>
            <li>You may copy the existing HTML and CSS as a base as this is not a UI creation task</li>
          </ul>
          <p>If you have any questions just drop us a message. Please upload your test to a fresh repo on your own GitHub account.</p>
          <p>Good luck!</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
