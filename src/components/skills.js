import React from 'react';

const Skills = () => {
  return (
    <div className='container mt-20'>
      <div>
        <h1 className='text-3xl ml-10 text-white font-bold font-poppins border-b-2 border-yellow-300'>Skills</h1>
      </div>
      <div className='grid ml-40 pt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='rounded-lg bg-gray-100 p-4'>
          <h5 className='text-lg font-semibold mb-2 font-poppins'>Front End</h5>
          <ul className="list-disc pl-4">
            <li>HTML</li>
            <li>React</li>
            <li>CSS</li>
            <li>TailWind CSS</li>
            <li>Bulma CSS</li>
            <li>Bootstrap CSS</li>
          </ul>
        </div>
        <div className='rounded-lg bg-gray-100 p-4'>
          <h5 className='text-lg font-semibold mb-2 font-poppins'>Back End</h5>
          <ul className="list-disc pl-4">
            <li>Express.js</li>
            <li>Express Session</li>
            <li>Node.js</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div className='rounded-lg bg-gray-100 p-4'>
          <h5 className='text-lg font-semibold mb-2 font-poppins'>Databases</h5>
          <ul className="list-disc pl-4">
            <li>GraphQL</li>
            <li>MySql</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className='rounded-lg bg-gray-100 p-4'>
          <h5 className='text-lg font-semibold mb-2 font-poppins'>Miscellaneous</h5>
          <ul className="list-disc pl-4">
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
