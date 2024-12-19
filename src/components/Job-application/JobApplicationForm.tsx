import React from 'react'

const JobApplicationForm = () => {
  return (
    <>
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-12">
          <div className="p-4 border rounded shadow-sm bg-white">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" required />
              </div>
              
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" required />
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label">Which city are you based out of?</label>
                <input type="text" className="form-control" id="city" placeholder="Enter city" required />
              </div>

              <div className="mb-3">
                <label htmlFor="portfolio" className="form-label">Share your portfolio</label>
                <input type="url" className="form-control" id="portfolio" placeholder="Enter portfolio URL" />
              </div>

              <div className="mb-3">
                <label htmlFor="about" className="form-label">About Yourself</label>
                <textarea className="form-control" id="about" rows={4} placeholder="Tell us about yourself" required></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="cv" className="form-label">Upload CV</label>
                <input type="file" className="form-control" id="cv" />
              </div>
              <button type="submit" className="btn btn-danger gb-btn-md-red-carrier">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default JobApplicationForm