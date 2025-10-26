function Home() {
    return (
        <div className="d-flex flex-column flex-md-row  justify-content-align-content-around align-content-center my-5 py-4 w-100 overflow-hidden">
            <div className="d-flex flex-column  justify-content-center align-content-center gap-4">
            <div className="d-flex flex-column align-items-start gap-1">
                <p className="handler"></p>
                <p className="highlight-text ms-1 ps-1 m-0">the</p>
                <p className="highlight-text offset-small ps-1 m-0">tiffin</p>
                <p className="highlight-text offset-large ps-1 ms-1 m-0 text-end ">box.</p>
            </div>
            <h1 className="food-title fw-light">Authentic South Indian Cuisine</h1>
            <button className="btn btn-outline-warning order-btn px-3 py-3 fw-medium">
                Order Now
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 18 18" className="order-icon fw-medium">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>
            </button>
            </div>
                <div className="circle-darker position-relative  w-75 d-flex justify-content-center align-content-center align-items-center">
                    <div className="d-flex justify-content-center align-content-center align-items-center circle-dark">
                        <img src="./cuisine_plate.png" alt=""  className=" cuisine_plate "/>
                    </div>
                </div>
        </div>
    )
}
export default Home