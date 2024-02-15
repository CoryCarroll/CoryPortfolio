import React from 'react';

const Skills = () => {
  return (
    <div className=''>
      <div>
        <h1 className=''>Skills</h1>
      </div>
      <div className='flex flex-wrap '>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Front End</h5>
            <div>
              <ul className=''>
                <li>HTML</li>
                <li>React</li>
                <li>CSS</li>
                <li>TailWind CSS</li>
                <li>Bulma CSS</li>
                <li>Bootstrap CSS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Back End</h5>
            <div>
              <ul className=''>
                <li>Express.js</li>
                <li>Express Session</li>
                <li>Node.js</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className=''>Databases</h5>
            <div>
              <ul className=''>
                <li>GraphQL</li>
                <li>MySql</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className=''>Miscellaneous</h5>
            <div>
              <ul className=''>
                <li>Git</li>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>Salesforce</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;