import React, { useState, useRef, useEffect } from 'react'
import Carousel from '../Components/Carousel'
import img1 from '../assets/Welcome to FundFlo — Supporting Startups and Investors.png'
import img2 from '../assets/Be a part of.png'
import img3 from '../assets/Got an Idea See who believes in it.png'
import { db } from '../firebase'
import { getDocs, limit, collection, query, startAfter, doc } from 'firebase/firestore'
import { Link } from 'react-router-dom'





const Home = () => {
    const [projects, setProjects] = useState([]);
    const [lastDoc, setLastDoc] = useState(null)

    const fetchProjects = async (fetchMore = false) => {
        let q;
        if(!fetchMore || !lastDoc){
            q = query(collection(db, "projects"), limit(4));
        }
        else{
            q = query(collection(db,"projects"), startAfter(lastDoc), limit(4))
        }
        const snap = await getDocs(q)
        let newProjects = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        if(fetchMore){
            setProjects(prev => [...prev, ...newProjects])
        }
        else{
            setProjects(newProjects)
        }
        setLastDoc(snap.docs(snap.docs.length - 1))
    };
    useEffect(() => {
        fetchProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const homeImages = [
        { id: 1, image: img1, alt: "Slide 1", link: '/' },
        { id: 2, image: img2, alt: 'Slide 2', link: '/investors' },
        { id: 3, image: img3, alt: 'Slide3', link: '/companies' }
    ]
    return (
        <div >
            <Carousel slides={homeImages}></Carousel>
       
            <section>
                
            </section>

            <section className='flex flex-col items-baseline justify-center pl-30 pr-30 bg-gray-200 pt-10'>

                <h1 className='text-6xl font-medium pl-3 font-serif'>Just Launched</h1>
                <p className='pl-3'>Projects recently opened for investments</p>
                <div className='flex flex-wrap gap-9 p-5 pb-5'>
                    {projects.map(project => (
                            <Link to={`/projects/${project.id}`}>  
                        <div key={project.id} className='border-1 border-gray-300 shadow-2xl h-auto  rounded-2xl sm:w-40 md:w-64 lg:w-auto '>
                            <img src={project.mainimg} alt={project.title} className='h-40 w-full rounded-t-2xl object-cover'/>
                            <div className='transition-all duration-300 hover:-translate-y-7 p-2 z-1 h-auto border-gray-200'>
                                <h2 className='text-2xl font-bold'>{project.title}</h2>
                                <p className='text-gray-700'>{project.tagline}</p>
                                <br />

                                <hr className='text-gray-300' />
                                <p>Rs.{project.available} raised </p>
                                <hr className='text-gray-300'/>
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
<br /><br />
            <section className='bg-blue-100   '>
                    <div className='flex flex-col lg:pl-40 md:pl-15 sm:pl-5 items-baseline pt-15'>
                    <br /> <br />
                    <div>
                    <h1 className='font-bold text-4xl'>Smart way to raise money</h1>
                    </div>
                    <div>
                    <p className='text-2xl text-gray-500 p-3'> FundFlo is an upcoming investment platform allowing companies to sell equity to investors.</p>
                    <ul className='list-disc pl-5 text-gray-500 text-xl pb-5'>
                        <li>Raise a $1M crowd round and market your brand</li>
                        <li>Acquire new customers through exposure on FundFlo</li>
                        <li>Convert your users to invested evangelists and fans</li>
                    </ul>
                    </div>
                    </div>
            </section>
            
            <footer className='bg-purple-950 flex pt-10 items-center justify-center'>
             <div className='pt-10   items-center flex'></div>   
                    <p className='text-gray-400'> This website is a prototype for demonstration purposes only and is not intended for professional use. </p>
            </footer>


        </div>
    )
}

export default Home
