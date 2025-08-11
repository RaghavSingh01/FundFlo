import React from 'react'
import Carousel from '../Components/Carousel'
import img1 from '../assets/Got an idea and need money to start.png'
import img2 from '../assets/A dynamic platform where creativity meets opportunity to fuel growth..png'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import { getDocs, limit, collection, query, startAfter, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react'

const Companies = () => {

  const images = [
    { id: 1, image: img1, alt: 'Slide 1' },
    { id: 2, image: img2, alt: 'Slide 2' }
  ]

  const [projects, setProjects] = useState([]);
  const [lastDoc, setLastDoc] = useState(null)

  const fetchProjects = async (fetchMore = false) => {
    let q;
    if (!fetchMore || !lastDoc) {
      q = query(collection(db, "projects"), limit(4));
    }
    else {
      q = query(collection(db, "projects"), startAfter(lastDoc), limit(4))
    }
    const snap = await getDocs(q)
    let newProjects = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))

    if (fetchMore) {
      setProjects(prev => [...prev, ...newProjects])
    }
    else {
      setProjects(newProjects)
    }
    setLastDoc(snap.docs(snap.docs.length - 1))
  };
  useEffect(() => {
    fetchProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div>
      <Carousel slides={images}></Carousel>
      <br />
      <section className='bg-gray-200'>
        <div className='p-20 md:pl-10 lg:pl-30 lg:pr-30 md:pr-10'>
          <h3 className='text-gray-500 text-xl'>For Founders</h3>
          <h1 className='text-5xl '>Harness the power of your community</h1>
          <h3 className='text-gray-500 text-xl'>Crowdfunding delivers marketing benefit, customer loyalty and funds with speed</h3>

          <br />
          <ul className='list-disc pb-5 text-2xl'>
            <li>Powerful fundraising tools</li>
            <li>Engage your community</li>
            <li>Dedicated Team</li>

          </ul>

          <Link to='/addproject'> <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Raise capital
          </button></Link>
        </div>
      </section>

      <br />
      <section className='flex flex-col items-baseline justify-center pl-30 pr-30  pt-10'>

        <h1 className='text-6xl font-medium pl-3 font-serif'>See others like you</h1>
        <p className='text-xl pl-3'>Take inspiration from others like you</p>
        <div className='flex flex-wrap gap-9 p-5 pb-5'>
          {projects.map(project => (
            <Link to={`/projects/${project.id}`}>
              <div key={project.id} className='border-1 border-gray-300 shadow-2xl h-auto  rounded-2xl sm:w-40 md:w-64 lg:w-auto '>
                <img src={project.mainimg} alt={project.title} className='h-40 w-full rounded-t-2xl object-cover' />
                <div className='transition-all duration-300 hover:-translate-y-7 p-2 z-1 h-auto border-gray-200'>
                  <h2 className='text-2xl font-bold'>{project.title}</h2>
                  <p className='text-gray-700'>{project.tagline}</p>
                  <br />

                  <hr className='text-gray-300' />
                  <p>Rs.{project.available} raised </p>
                  <hr className='text-gray-300' />
                  <p>Rs.{project.min} min investment</p>
                </div>
              </div>
            </Link>
          ))}

        </div>
        <div className='w-full flex my-6 flex-row  justify-center text-2xl'>
          <button onClick={() => fetchProjects(true)} className='rounded-md text-3xl h-10 border-2 w-64 hover:bg-blue-400 hover:text-white' > View More</button>
        </div>
      </section>

      <br />
      <section className=' p-20 md:pl-10 lg:pl-30 lg:pr-30 md:pr-10'>

        <h1 className='text-5xl'>FAQs</h1>
        <br />
        <h3 className='text-3xl font-bold'>What is this platform for?</h3>
        <p className='text-xl'>Our platform helps entrepreneurs and startups showcase their ideas, connect with investors, and raise capital through crowdfunding.</p>
        <br />
        <h3 className='text-3xl font-bold'>How can I advertise my company or project here?</h3>
        <p className='text-xl'>You can create a profile for your company or project and submit details through our dedicated form. Once approved, your project will be featured to attract investor interest.</p>
        <br />
        <h3 className='text-3xl font-bold'> Is there a fee to list my company or project?</h3>
        <p className='text-xl'>  Currently, listing your company or project on our platform is free. We aim to support innovators in gaining visibility and funding opportunities.</p>
        <br />
        <h3 className='text-3xl font-bold'> How does crowdfunding work on this platform?</h3>
        <p className='text-xl'>  Interested investors view your project and choose to invest the minimum or higher amount required. Funding contributions are collected securely, and you receive the capital to grow your business.</p>
        <br />
        <h3 className='text-3xl font-bold'> What kind of projects are accepted?</h3>
          <p className='text-xl'>  We accept innovative, scalable projects across various sectors that demonstrate growth potential and a solid business model.</p>
      </section>
      <br /><br />
      <footer className='bg-purple-950 flex pt-10 items-center justify-center'>
        <div className='pt-10   items-center flex'></div>
        <p className='text-gray-400'> This website is a prototype for demonstration purposes only and is not intended for professional use. </p>
      </footer>
    </div>
  )
}

export default Companies
