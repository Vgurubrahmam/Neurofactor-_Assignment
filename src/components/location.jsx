function Location(){
    return (
        <div className="d-flex flex-column flex-md-row justify-content-center align-content-center align-items-center my-5 py-5 gap-g-md-0">
            <div className="d-flex flex-column justify-content-center align-content-center w-50 w-md-100 overflow-hidden">
        <h1 className="features-header fw-normal ms-md-5 ">OUR LOCATIONS</h1>
        <p className="about-text text-secondary ms-md-5">
          FIND US CONVENIENT LOCATIONS
        </p>
       
        <button className="btn btn-outline-warning order-btn px-3 py-3 fw-medium ms-md-5">
          Our Store
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 18 18"
            className="order-icon fw-medium"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
        <div className="specilaties-con d-flex justify-content-center align-content-center align-items-center mx-auto">
        <img src="./mapImg.png" alt="" className="mapimg"/>
        <div className="mapcard features-header">
            <p>TIFFIN BOX</p>
            <p>ALLERTON RD ,</p>
            <p>GET DIRECTION</p>
            <hr className="text-warning w-100" />
        </div>
      </div>
        </div>
    )
}
export default Location