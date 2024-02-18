import React from 'react';

const Skills = () => {
  return (
    <div className='my-20 pr-10'>
      <div>
        <h1 className='text-3xl ml-10 text-white font-bold font-poppins border-b-2 border-yellow-300'>Skills</h1>
      </div>
      <div className='flex flex-wrap justify-center md:justify-evenly'>
        {/* Using flex-wrap and justify-center to center the grid items */}
        <div className='rounded-lg shadow-xl shadow-yellow-300 bg-gray-100 p-4 m-4 w-60'>
          <h5 className='text-2xl  font-semibold mb-2 font-poppins'>Front End</h5>
          <ul className="text-2xl list-disc pl-4">
            <li>HTML</li>
            <li>React</li>
            <li>CSS</li>
            <li>TailWind CSS</li>
            <li>Bulma CSS</li>
            <li>Bootstrap CSS</li>
          </ul>
        </div>
        <div className='rounded-lg shadow-xl shadow-yellow-400 bg-gray-100 p-4 m-4 w-60'>
          <h5 className='text-2xl font-semibold mb-2 font-poppins'>Back End</h5>
          <ul className="text-2xl list-disc pl-4">
            <li>Express.js</li>
            <li>Express Session</li>
            <li>Node.js</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div className='rounded-lg shadow-xl shadow-yellow-400 bg-gray-100 p-4 m-4 w-60'>
          <h5 className='text-2xl font-semibold mb-2 font-poppins'>Databases</h5>
          <ul className="text-2xl list-disc pl-4">
            <li>GraphQL</li>
            <li>MySql</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className='rounded-lg shadow-xl shadow-yellow-400 bg-gray-100 p-4 m-4 w-60'>
          <h5 className='text-2xl font-semibold mb-2 font-poppins'>Miscellaneous</h5>
          <ul className="text-2xl list-disc pl-4">
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



