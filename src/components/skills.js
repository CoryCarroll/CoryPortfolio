import React from 'react';

const Skills = () => {
  return (
    <div className='mt-10 sm:mt-20 md:mt-36'>
      <div>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-bold text-slate-100'>Skills</h1>
      </div>
      <div className='flex flex-wrap justify-around mt-10 sm:mt-20'>
        <div className='card m-3 text-center box-border rounded shadow-2xl shadow-gray-400 p-4 sm:w-72 md:w-80 lg:w-96 xl:w-96'>
          <div className='card-body'>
            <h5 className='card-title font-bold text-xl text-slate-100 underline'>Front End</h5>
            <div>
              <ul className='text-start text-lg text-slate-100 leading-loose font-bold'>
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
        <div className='card m-3 text-center box-border shadow-2xl shadow-gray-400 rounded p-4 sm:w-72 md:w-80 lg:w-96 xl:w-96'>
          <div className='card-body'>
            <h5 className='card-title font-bold text-xl text-slate-100 underline'>Back End</h5>
            <div>
              <ul className='text-start text-lg text-slate-100 leading-loose font-bold'>
                <li>Express.js</li>
                <li>Express Session</li>
                <li>Node.js</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='card m-3 text-center box-border shadow-2xl shadow-gray-400 rounded p-4 sm:w-72 md:w-80 lg:w-96 xl:w-96'>
          <div className='card-body'>
            <h5 className='card-title font-bold text-xl text-slate-100 underline'>Databases</h5>
            <div>
              <ul className='text-start text-lg text-slate-100 leading-loose font-bold'>
                <li>GraphQL</li>
                <li>MySql</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='card m-3 text-center box-border shadow-2xl shadow-gray-400 rounded p-4 sm:w-72 md:w-80 lg:w-96 xl:w-96'>
          <div className='card-body'>
            <h5 className='card-title font-bold text-xl text-slate-100 underline'>Miscellaneous</h5>
            <div>
              <ul className='text-start text-lg text-slate-100 leading-loose font-bold'>
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