import React from 'react';

const Skills = () => {
  return (
    <div className='container mx-auto'>
      <div>
        <h1 className='text-center text-2xl font-bold mb-4'>Skills</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='rounded-lg bg-gray-100 p-4'>
          <h5 className='text-lg font-semibold mb-2'>Front End</h5>
          <ul>
            <li>HTML</li>
            <li>React</li>
            <li>CSS</li>
            <li>TailWind CSS</li>
            <li>Bulma CSS</li>
            <li>Bootstrap CSS</li>
          </ul>
        </div>
        <div className='rounded-lg bg-gray-100 p-4'>
          <h5 className='text-lg font-semibold mb-2'>Back End</h5>
          <ul>
            <li>Express.js</li>
            <li>Express Session</li>
            <li>Node.js</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div className='rounded-lg bg-gray-100 p-4'>
          <h5 className='text-lg font-semibold mb-2'>Databases</h5>
          <ul>
            <li>GraphQL</li>
            <li>MySql</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className='rounded-lg bg-gray-100 p-4'>
          <h5 className='text-lg font-semibold mb-2'>Miscellaneous</h5>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Heroku</li>
            <li>Salesforce</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;