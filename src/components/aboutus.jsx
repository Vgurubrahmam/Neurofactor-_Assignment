
function About(){
return(
    <div className="d-flex flex-column flex-md-row my-5">
    <img src="./aboutimg.png" alt="" className="img-fluid w-50 w-md-100 bg-cover" />
       <div className="d-flex flex-column justify-content-center align-content-center about-page w-50 w-md-100 py-5">
        <p className="ms-4 mt-4">ABOUT US</p>
        <h1 className="ms-4 fw-light about-text">Experience Authentic South Indian Flavors at The Tiffin Box</h1>
        <button className="btn btn-outline-secondary know-more-btn px-3 py-3 fw-medium ms-4">
                Know More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 18 18" className=" fw-medium">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
            </button>
        </div>
    </div>
)
}
export default About