function Features() {
    return (
        <div className="d-flex flex-column justify-content-center align-content-center align-items-center my-5 py-5 w-100">
            <h1 className="features-header fw-normal">FEATURED MENU</h1>
            <p className="about-text w-75 text-center text-secondary">Discover our most popular dishes </p>
            <div className="d-flex flex-column flex-md-row justify-content-start align-content-around align-items-center gap-5 my-5">
                <div className="d-flex flex-column justify-content-center  align-items-center w-25 w-md-100 feature-page px-md-3  py-4 rounded-pill">
                    <img src="./Chicken_Chettinad.png" alt="" className="img-crop" />
                    <p>Chicken Chettinad</p>
                    <p>£9.99</p>
                </div>
                    <div className="d-flex flex-column justify-content-center align-items-center w-50 w-md-100">
                    <div className="d-flex flex-column align-items-start gap-1 overflow-hidden position-absolute">
                        <p className="feature-handler mx-auto"></p>
                        <p className="feature-text ms-1 ps-1 m-0">the</p>
                        <p className="feature-text offset-small ps-1 m-0">tiffin</p>
                        <p className="feature-text offset-large ps-1 ms-1 m-0 text-end ">box.</p>
                    </div>
                <div className="feature-page-middle ms-5 px-3 py-4 rounded-pill position-relative z-3">
                    <img src="./Chicken_Chettinad.png" alt="" className=" img-crop" />
                <p className="text-center">Chicken Chettinad</p>
                <p className="text-center">£9.99</p>
                </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center w-25 w-md-100 feature-page px-md-3 py-4 rounded-pill">
                    <img src="./Chicken_Chettinad.png" alt="" className=" img-crop" />
                    <p>Chicken Chettinad</p>
                    <p>£9.99</p>
                </div>
            </div>
            <button className="btn btn-outline-warning order-btn px-3 py-3 fw-medium">
                Explore Full Menu
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 18 18" className="order-icon fw-medium">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
            </button>
        </div>
    )
}
export default Features