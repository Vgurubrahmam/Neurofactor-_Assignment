function BookTable() {
  return (
    <div className="d-flex flex-column flex-md-row py-5 my-5 overflow-hidden">
      <img src="./book_tableImg.png" alt="" className="booktableimg" />

      <div className="d-flex flex-column justify-content-center align-content-center w-50 w-md-100 overflow-hidden">
        <h1 className="features-header fw-normal ms-md-5 ">BOOK TABLE</h1>
        <p className="about-text text-secondary ms-md-5">
          Planning a meal at The Tiffin Box?
        </p>
        <p className="text-secondary fs-small ms-md-5">
          Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of
          The Tiffin Box from the comfort of your home. Order online for a quick and easy
          delivery straight to your doorstep. Our dishes are prepared fresh and delivered
          fast, ensuring a delicious experience every time.
        </p>
        <button className="btn btn-outline-warning order-btn px-3 py-3 fw-medium ms-md-5">
          Book Table
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
    </div>
  );
}

export default BookTable;
