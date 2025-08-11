import React, { useState } from 'react';
import { db } from '../firebase'; // Only Firestore, not Storage
import { addDoc, collection } from 'firebase/firestore';

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    tagline: "",
    mainimgLinks: "",
    description: "",
    whatimgLinks: "",
    problemstatement: "",
    problem: "",
    probimgLinks: "",
    solutionhead: "",
    solution: "",
    solimgLinks: "",
    why: "",
    whyimgLinks: "",
    competition: "",
    compimgLinks: "",
    visionhead: "",
    vision: "",
    visimgLinks: "",
    bizzmodel: "",
    bizzimgLinks: "",
    impact: "",
    impactimgLinks: "",
    founderhead: "",
    founder: "",
    founderimgLinks: "",
    available: "",
    min: "",
    required: "",
    upi: ""
  });

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleTextChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError("");
    try {
      const payload = {
        title: formData.title,
        tagline: formData.tagline,
        mainimg: formData.mainimgLinks.split(',').map(s => s.trim()).filter(Boolean),
        description: formData.description,
        whatimg: formData.whatimgLinks.split(',').map(s => s.trim()).filter(Boolean),
        problemstatement: formData.problemstatement,
        problem: formData.problem,
        probimg: formData.probimgLinks.split(',').map(s => s.trim()).filter(Boolean),
        solutionhead: formData.solutionhead,
        solution: formData.solution,
        solimg: formData.solimgLinks.split(',').map(s => s.trim()).filter(Boolean),
        why: formData.why,
        whyimg: formData.whyimgLinks.split(',').map(s => s.trim()).filter(Boolean),
        competition: formData.competition,
        compimg: formData.compimgLinks.split(',').map(s => s.trim()).filter(Boolean),
        visionhead: formData.visionhead,
        vision: formData.vision,
        visimg: formData.visimgLinks.split(',').map(s => s.trim()).filter(Boolean),
        bizzmodel: formData.bizzmodel,
        bizzimg: formData.bizzimgLinks.split(',').map(s => s.trim()).filter(Boolean),
        impact: formData.impact,
        impactimg: formData.impactimgLinks.split(',').map(s => s.trim()).filter(Boolean),
        founderhead: formData.founderhead,
        founder: formData.founder,
        founderimg: formData.founderimgLinks.split(',').map(s => s.trim()).filter(Boolean),
        available: Number(formData.available),
        min: Number(formData.min),
        required: Number(formData.required),
        upi: formData.upi,
        createdAt: new Date()
      };

      await addDoc(collection(db, "projects"), payload);
      alert("Project added successfully!");

      setFormData({
        title: "",
        tagline: "",
        mainimgLinks: "",
        description: "",
        whatimgLinks: "",
        problemstatement: "",
        problem: "",
        probimgLinks: "",
        solutionhead: "",
        solution: "",
        solimgLinks: "",
        why: "",
        whyimgLinks: "",
        competition: "",
        compimgLinks: "",
        visionhead: "",
        vision: "",
        visimgLinks: "",
        bizzmodel: "",
        bizzimgLinks: "",
        impact: "",
        impactimgLinks: "",
        founderhead: "",
        founder: "",
        founderimgLinks: "",
        available: "",
        min: "",
        required: "",
        upi: ""
      });
    } catch (err) {
      console.error(err);
      setError("Error saving project");
    }
    setUploading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-4xl mx-auto bg-white shadow-md rounded">

        <h1 className="text-4xl pb-10">Add your project details (Image Links)</h1>

        {/* Project Info */}
        <label>Project Title:</label>
        <input name="title" value={formData.title} onChange={handleTextChange} className="border p-2 w-full" required />

        <label>Tagline:</label>
        <input name="tagline" value={formData.tagline} onChange={handleTextChange} className="border p-2 w-full" required />

        <label>Main Image Links (comma separated):</label>
        <textarea name="mainimgLinks" value={formData.mainimgLinks} onChange={handleTextChange} className="border p-2 w-full" placeholder="https://image1..., https://image2..." />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleTextChange} className="border p-2 w-full" />

        <label>Description Images (Links, comma separated):</label>
        <textarea name="whatimgLinks" value={formData.whatimgLinks} onChange={handleTextChange} className="border p-2 w-full" />
        
        {/* Problem Section */}
        <label>Problem Statement:</label>
        <input name="problemstatement" value={formData.problemstatement} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Problem:</label>
        <textarea name="problem" value={formData.problem} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Problem Images (Links, comma separated):</label>
        <textarea name="probimgLinks" value={formData.probimgLinks} onChange={handleTextChange} className="border p-2 w-full" />

        {/* Solution */}
        <label>Solution Heading:</label>
        <input name="solutionhead" value={formData.solutionhead} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Solution:</label>
        <textarea name="solution" value={formData.solution} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Solution Images (Links, comma separated):</label>
        <textarea name="solimgLinks" value={formData.solimgLinks} onChange={handleTextChange} className="border p-2 w-full" />
        
        {/* Why Invest */}
        <label>Why Invest?</label>
        <textarea name="why" value={formData.why} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Why Images (Links, comma separated):</label>
        <textarea name="whyimgLinks" value={formData.whyimgLinks} onChange={handleTextChange} className="border p-2 w-full" />
        
        {/* Competition */}
        <label>Competition & Customers:</label>
        <textarea name="competition" value={formData.competition} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Competition Images (Links, comma separated):</label>
        <textarea name="compimgLinks" value={formData.compimgLinks} onChange={handleTextChange} className="border p-2 w-full" />
        
        {/* Vision */}
        <label>Vision Heading:</label>
        <input name="visionhead" value={formData.visionhead} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Vision & Strategy:</label>
        <textarea name="vision" value={formData.vision} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Vision Images (Links, comma separated):</label>
        <textarea name="visimgLinks" value={formData.visimgLinks} onChange={handleTextChange} className="border p-2 w-full" />
        
        {/* Business Model */}
        <label>Business Model:</label>
        <textarea name="bizzmodel" value={formData.bizzmodel} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Business Model Images (Links, comma separated):</label>
        <textarea name="bizzimgLinks" value={formData.bizzimgLinks} onChange={handleTextChange} className="border p-2 w-full" />
        
        {/* Impact */}
        <label>Impact:</label>
        <textarea name="impact" value={formData.impact} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Impact Images (Links, comma separated):</label>
        <textarea name="impactimgLinks" value={formData.impactimgLinks} onChange={handleTextChange} className="border p-2 w-full" />

        {/* Founder */}
        <label>Founder Name & Designation:</label>
        <input name="founderhead" value={formData.founderhead} onChange={handleTextChange} className="border p-2 w-full" />
        <label>About the Founder:</label>
        <textarea name="founder" value={formData.founder} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Founder Images (Links, comma separated):</label>
        <textarea name="founderimgLinks" value={formData.founderimgLinks} onChange={handleTextChange} className="border p-2 w-full" />

        {/* Funding/Payment */}
        <label>Available Funds:</label>
        <input type="number" name="available" value={formData.available} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Minimum Investment:</label>
        <input type="number" name="min" value={formData.min} onChange={handleTextChange} className="border p-2 w-full" />
        <label>Required Funds:</label>
        <input type="number" name="required" value={formData.required} onChange={handleTextChange} className="border p-2 w-full" />
        <label>UPI ID for Payments:</label>
        <input name="upi" value={formData.upi} onChange={handleTextChange} className="border p-2 w-full" />

        {error && <div className="text-red-600">{error}</div>}

        <button type="submit" disabled={uploading} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          {uploading ? "Saving..." : "Submit Project"}
        </button>
      </form>

      <footer className='bg-purple-950 flex pt-10 items-center justify-center'>
             <div className='pt-10   items-center flex'></div>   
                    <p className='text-gray-400'> This website is a prototype for demonstration purposes only and is not intended for professional use. </p>
            </footer>
    </div>
  );
};

export default AddProject;
