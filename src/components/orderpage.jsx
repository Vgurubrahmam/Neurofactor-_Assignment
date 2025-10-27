function Orderpage() {
    return (
        <div className="d-flex flex-column flex-md-row my-5 py-5">
            <div className="w-md-50">

                <h1 className="features-header fw-normal">ONLINE ORDER</h1>
                <p className="about-text w-75 text-secondary">Fresh South Indian Flavors Delivered!</p>
                <p className="text-secondary">Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time</p>
                <button className="btn btn-outline-warning order-btn px-3 py-3 fw-medium">
                    Order Online
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" viewBox="0 0 18 18" className="order-icon fw-medium">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button>
            </div>
            <div className="d-flex w-md-50 py-4">

            <img src="./courior.png" alt="" className="w-md-75 overflow-hidden" />
            <img src="./cakeimg.png" alt="" className="cakeimg"/>
            </div>
        </div>
    )
}
export default Orderpage