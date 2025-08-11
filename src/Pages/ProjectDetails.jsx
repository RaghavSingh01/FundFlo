import React from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null)

  useEffect(
    () => {
      const fetchProject = async () => {
        const docRef = doc(db, 'projects', id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setProject(docSnap.data())
        }
        else {
          setProject(null)
        }
      }
      fetchProject()
    }, [id]
  )

  function ProgressBar({ available, required }) {
    const progress = Math.min((available / required) * 100, 100);

    return (
      <div className="w-full bg-gray-300 rounded-xs h-2 mt-2 mb-5">
        <div
          className="h-2 bg-green-500 rounded-xs transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  }

  const [investmentAmount, setInvestmentAmount] = useState(0)
  const [error, setError] = useState('')

  useEffect(() => {
    if (project) {
      setInvestmentAmount(project.min)  
    }
  }, [project])

  const handleInvestmentChange = (e) => {
    const value = Number(e.target.value)
    if (value < project.min) {
      setError(`Minimum investment amount is Rs. ${project.min}`)
    } else {
      setError('')
      setInvestmentAmount(value)
    }
  }

  const handleStartInvesting = () => {
    if (!error && investmentAmount >= project.min) {
      alert(`You are investing Rs. ${investmentAmount} in ${project.title}`)
    }
  }


  if (!project) {
    return <div>Loading...</div>
  }
  return (
    <div >
      <section className='flex flex-col items-baseline md:pl-10 lg:pl-30 lg:pr-30 md:pr-10 justify-center pt-20 '>
        <div>

          <h1 className='text-4xl font-bold font-verdana'>{project.title}</h1>
          <p className='text-lg text-gray-500 pb-5  '>{project.tagline}</p>


        </div>
        <div className='flex justify-between gap-50'>
          <img src={project.mainimg} alt={project.title} className='lg:max-w-lg md:max-w-40 sm:max-w-xs' />
          <div>
            <p className='text-xl font-bold'>Rs.{project.available}</p>
            <p className='text-md text-gray-500'>Commited and reserved</p>
            <ProgressBar available={project.available} required={project.required} />
            <hr className='text-gray-300 border-gray-200 pt-5' />

            <p className='text-xl font-bold'>Rs.{project.min}</p>
            <p className='text-gray-500'>Minimum investment amount</p>
          </div>
        </div>

        <br /><br />
        <h3 className='text-xl text-gray-600'> Invest in {project.title}    </h3>
        <hr className='border-gray-300' />
        <br />
        <h2 className='text-4xl font-semibold'> What is {project.title}?</h2>
        <hr className='text-gray-300 border-gray-200 pt-5' />
        {Array.isArray(project.whatimg) ? (
          <div className="flex flex-wrap gap-4 flex-col lg:max-w-5xl md:max-w-md sm:max-w-full">
            {project.whatimg.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=''
                className="max-w-full"
              />
            ))}
          </div>
        ) : (
          project.whatimg &&
          <img src={project.whatimg} alt='' className="max-w-md" />
        )}

        <p className='text-2xl'>{project.description}</p>

        <br /><br />
        <h3 className='text-xl text-gray-600'> Problem</h3>
        <hr className='text-gray-300 border-gray-200 w-64' />

        <br />

        <h2 className='text-4xl font-semibold'>{project.problemstatement}</h2>
        {Array.isArray(project.probimg) ? (
          <div className="flex flex-wrap gap-4 flex-col lg:max-w-5xl md:max-w-md sm:max-w-full">
            {project.probimg.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=''
                className="max-w-full"
              />
            ))}
          </div>
        ) : (
          project.probimg &&
          <img src={project.probimg} alt='' className="lg:max-w-5xl md:max-w-md sm:max-w-full" />
        )}
        <hr className='text-gray-300 border-gray-200 pt-5 w-64' />
        <p className='text-2xl whitespace-pre-line'>{project.problem}</p>

        <br /><br />
        <h3 className='text-xl text-gray-600'> Solution</h3>
        <hr className='text-gray-300 border-gray-200' />

        <br />
        <h2 className='text-4xl font-semibold'>{project.solutionhead}</h2>
        <hr className='text-gray-300 border-gray-200 pt-5 w-64' />
        {Array.isArray(project.solimg) ? (
          <div className="flex flex-wrap gap-4 flex-col lg:max-w-5xl md:max-w-md sm:max-w-full">
            {project.solimg.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=''
                className="max-w-full"
              />
            ))}
          </div>
        ) : (
          project.solimg &&
          <img src={project.solimg} alt='' className="lg:max-w-5xl md:max-w-md sm:max-w-full" />
        )}

        <p className='text-2xl whitespace-pre-line'>{project.solution}</p>

        <br /><br />

        <h3 className='text-xl text-gray-600'> Why Invest</h3>
        <hr className='text-gray-300 border-gray-200 w-64' />
        <h2 className='text-4xl font-semibold'>Why Invest In {project.title}</h2>
        {/* <hr className='text-gray-300 border-gray-200 pt-5' /> */}
        {Array.isArray(project.whyimg) ? (
          <div className="flex flex-wrap gap-4 flex-col lg:max-w-5xl md:max-w-md sm:max-w-full">
            {project.whyimg.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=''
                className="max-w-full"
              />
            ))}
          </div>
        ) : (
          project.whyimg &&
          <img src={project.whyimg} alt='' className="lg:max-w-5xl md:max-w-md sm:max-w-full" />
        )}
        <p className='text-2xl whitespace-pre-line'>{project.why}</p>

        <br /><br />

        <h3 className='text-xl text-gray-600'>Competition & Customers</h3>
        <hr className='text-gray-300 border-gray-200' />
        <h2 className='text-4xl font-semibold'> What makes us different</h2>
        <hr className='text-gray-300 border-gray-200 pt-5' />
        {Array.isArray(project.compimg) ? (
          <div className="flex flex-wrap gap-4 flex-col lg:max-w-5xl md:max-w-md sm:max-w-full">
            {project.compimg.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=''
                className="max-w-full"
              />
            ))}
          </div>
        ) : (
          project.compimg &&
          <img src={project.compimg} alt='' className="lg:max-w-5xl md:max-w-md sm:max-w-full" />
        )}
        <p className='text-2xl whitespace-pre-line'>{project.competition}</p>


        <br /><br />

        <h3 className='text-xl text-gray-600'>Vision & Strategy</h3>
        <hr className='text-gray-300 border-gray-200' />
        <h2 className='text-4xl font-semibold'> {project.visionhead}</h2>
        <hr className='text-gray-300 border-gray-200 pt-5 w-64' />
        {Array.isArray(project.visimg) ? (
          <div className="flex flex-wrap gap-4 flex-col lg:max-w-5xl md:max-w-md sm:max-w-full">
            {project.visimg.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=''
                className="max-w-full"
              />
            ))}
          </div>
        ) : (
          project.visimg &&
          <img src={project.visimg} alt='' className="lg:max-w-5xl md:max-w-md sm:max-w-full" />
        )}
        <p className='text-2xl whitespace-pre-line'>{project.vision}</p>



        <br /><br />

        <h3 className='text-xl text-gray-600'>Business Model</h3>
        <hr className='text-gray-300 border-gray-200' />
        <h2 className='text-4xl font-semibold'> {project.modelhead}</h2>
        <hr className='text-gray-300 border-gray-200 pt-5' />
        {Array.isArray(project.bizzimg) ? (
          <div className="flex flex-wrap gap-4 flex-col lg:max-w-5xl md:max-w-md sm:max-w-full">
            {project.bizzimg.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=''
                className="max-w-full"
              />
            ))}
          </div>
        ) : (
          project.bizzimg &&
          <img src={project.bizzimg} alt='' className="lg:max-w-5xl md:max-w-md sm:max-w-full" />
        )}
        <p className='text-2xl whitespace-pre-line'>{project.businessmodel}</p>



        <br /><br />

        <h3 className='text-xl text-gray-600'>Impact</h3>
        <hr className='text-gray-300 border-gray-200' />
        <h2 className='text-4xl font-semibold'> Our Impact</h2>
        <hr className='text-gray-300 border-gray-200 pt-5 w-64' />
        {Array.isArray(project.impactimg) ? (
          <div className="flex flex-wrap gap-4 flex-col lg:max-w-5xl md:max-w-md sm:max-w-full">
            {project.impactimg.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=''
                className="max-w-full"
              />
            ))}
          </div>
        ) : (
          project.impactimg &&
          <img src={project.impactimg} alt='' className="lg:max-w-5xl md:max-w-md sm:max-w-full" />
        )}
        <p className='text-2xl whitespace-pre-line'>{project.impact}</p>


        <br /><br />

        <h3 className='text-xl text-gray-600'> Founder</h3>
        <hr className='text-gray-300 border-gray-200' />
        <h2 className='text-4xl font-semibold'> {project.founderhead}</h2>
        <hr className='text-gray-300 border-gray-200 pt-5 w-64' />
        {Array.isArray(project.founderimg) ? (
          <div className="flex flex-wrap gap-4 flex-col lg:max-w-5xl md:max-w-md sm:max-w-full">
            {project.founderimg.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=''
                className="max-w-full"
              />
            ))}
          </div>
        ) : (
          project.founderimg &&
          <img src={project.founderimg} alt='' className="lg:max-w-5xl md:max-w-md sm:max-w-full" />
        )}
        <p className='text-2xl whitespace-pre-line'>{project.founder}</p>

        <br /><br /><br />


      </section>
      <section  className='flex  justify-center'>
        <div className="mt-10 p-4 border rounded-md max-w-md flex items-center flex-col">
        <h3 className="text-xl font-semibold mb-4">Start Investing</h3>
        <label className="block mb-2" htmlFor="investmentAmount">
          Investment Amount (minimum Rs. {project.min})
        </label>
        <input
          id="investmentAmount"
          type="number"
          min={project.min}
          value={investmentAmount}
          onChange={handleInvestmentChange}
          className="border border-gray-400 rounded px-3 py-2 w-full mb-2"
        />
        {error && <p className="text-red-600 mb-2">{error}</p>}
        <button
          onClick={handleStartInvesting}
          disabled={!!error}
          className={`w-full py-2 rounded text-white font-semibold ${error ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
        >
          Invest Now
        </button>
        </div>
      </section>
      <br /><br />
        <footer className='bg-purple-950 flex pt-10 items-center justify-center'>
          <div className='pt-10   items-center flex'></div>
          <p className='text-gray-400'> This website is a prototype for demonstration purposes only and is not intended for professional use. </p>
        </footer>
     



    </div>
  )
}

export default ProjectDetails
