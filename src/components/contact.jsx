function Contact(){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center py-5 gap-3">
            <div className="d-flex flex-column align-items-start gap-1">
                <p className="handler"></p>
                <p className="highlight-text ms-1 ps-1 m-0">the</p>
                <p className="highlight-text offset-small ps-1 m-0">tiffin</p>
                <p className="highlight-text offset-large ps-1 ms-1 m-0 text-end ">box.</p>
            </div>
            <p className="about-text text-center text-secondary w-50">SUBSCRIBE TO OUR NEWSLETTER</p>
            <div className="d-flex justify-content-center align-content-between align-items-center">
                <div>

                <p className="contact-address">EMAIL ADDRESS</p>
                <hr  className="w-100 text-secondary"/>
                </div>
                 <button className="btn btn-outline-warning order-btn px-3 py-3 fw-medium ms-md-5">
          Subscribe
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
            <div className="text-center my-4 contact-address">

            <p>CONTACT U</p>
            <p>0151 245 1500</p>
            <p>Info@tiffinbox.co.uk</p>
            <p> Allerton Rd, Liverpool L25 7RE</p>
            </div>
            <ul className="d-flex flex-column flex-md-row justify-content-center w-100 contact-address list-unstyled gap-5">
                <li className="nav-item">
                  <a 
                    className="nav-link" 
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className="nav-link" 
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className="nav-link" 
                    href="#book-table"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('book-table')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    Book Table
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className="nav-link" 
                    href="#order"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('order')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    Order Online
                  </a>
                </li>
                
                <li className="nav-item">
                  <a 
                    className="nav-link" 
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
        </div>
    )
}
export default Contact