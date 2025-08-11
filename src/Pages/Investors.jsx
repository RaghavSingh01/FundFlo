import React from 'react'
import Carousel from '../Components/Carousel'
import img2 from "../assets/Invest (1).png"
import img1 from '../assets/Help startups grow while also increasing your own money.png'
import img3 from '../assets/Be a part of.png'
import { db } from '../firebase'
import { getDocs, limit, collection, query, startAfter, doc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'




const Investors = () => {


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

  const investimages = [
    { id: 1, image: img1, alt: 'Slide 1' },
    { id: 2, image: img2, alt: 'Slide 2' },
    { id: 3, image: img3, alt: 'Slide 3' }
  ]

  return (
    <div>
      <Carousel slides={investimages}></Carousel>
      <br /><br />

      <section className='bg-gray-100 p-20'>
        <div className='md:pl-10 lg:pl-30 lg:pr-30 md:pr-10'>
          <h1 className='text-5xl font-semibold font-sans'>How it works?</h1>
          <h3 className='text-3xl '>Steps to investing with FundFlo</h3>
          <ul className='list-disc text-xl'>
            <li>Step 1: Browse available projects</li>

            <li>    Step 2: Choose your investment amount</li>

            <li>Step 3: Complete registration and fund transfer</li>
          </ul>
          <br />
          <p className='text-3xl'>Investing now made easy with FundFlo 🤩. Follow these easy steps and begin your journey of investment</p>
        </div>

      </section>
      <br />
      <section className=' p-20 md:pl-10 lg:pl-30 lg:pr-30 md:pr-10'>
        <h1 className='text-6xl font-medium  font-sans'> Start looking</h1>
        <p className='text-3xl text-gray-600'>Start looking for projects you like and be a part of their journey</p>
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
        <h3 className='text-3xl font-bold'>How do I start investing?</h3>
        <p className='text-xl'>Simply select the project you are interested in, enter your investment amount (at least the minimum), and click the "Invest Now" button to proceed. Further instructions will be provided after submission.</p>
        <br />
        <h3 className='text-3xl font-bold'>Can I invest in multiple projects?</h3>
        <p className='text-xl'>Yes, you can invest in as many projects as you like. Just visit each project’s page and follow the investment process.</p>
        <br />
        <h3 className='text-3xl font-bold'> How do I track my investments?</h3>
        <p className='text-xl'>  Currently, we provide a simple list of projects you have invested in. Detailed tracking and dashboards are not available at this time.</p>
        <br />
        <h3 className='text-3xl font-bold'> What are the risks involved in investing?</h3>
        <p className='text-xl'>  All investments carry risk, including potential loss of your capital. Consider consulting an advisor before investing.</p>
      </section>
      <br /><br />
      <footer className='bg-purple-950 flex pt-10 items-center justify-center'>
        <div className='pt-10   items-center flex'></div>
        <p className='text-gray-400'> This website is a prototype for demonstration purposes only and is not intended for professional use. </p>
      </footer>
    </div>
  )
}

export default Investors
