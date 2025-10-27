import './specilaties.css'

function Specilaties(){

    return(
        <div className="d-flex flex-column justify-content-center align-content-center align-items-center py-5 ">
            <h1 className="features-header fw-normal ms-md-5 ">WHY TIFFIN BOX</h1>
        <p className="about-text text-center text-secondary ms-md-5">
          Our Specialties 
        </p>
        <div className='row overflow-hidden my-5'>

        
        <div className='col-12 col-md-3 text-md-end text-white pt-md-5'>
        <div className=''>
            <h2 className='contact-address text-white w-md-25'>Authentic South Indian Cuisine</h2>
            <p className='text-secondary'>Our dishes are prepared using traditional recipes to bring you the true flavors of South India.</p>
        </div>
        <div className='pe-md-5'>
            <h2 className='contact-address text-white'>Expert Chefs</h2>
            <p className='text-secondary'>Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight.</p>

        </div>
        <div>
            <h2 className='contact-address text-white'>Fresh, Quality Ingredients</h2>
            <p className='text-secondary'>We use only the finest, fresh ingredients to ensure the highest quality and authentic taste</p>
        </div>
        </div> 

        <div className="specilaties-con d-flex justify-content-center align-content-center align-items-center col-12 col-md-6 d-flex justify-content-center align-items-center mx-auto">
       <img src="./specialitiesimg.png" alt="" className="specialitiesimg"/>
          <ul className="circle-list d-none d-md-block"> 
            {Array.from({
                length:6
            }).map((_,i)=>
            <li key={i}></li>)}
        </ul>
        </div>
        <div className='col-12 col-md-3 text-white pt-md-5'>
        <div >
            <h2 className='contact-address text-white'>Comfortable Dining Experience</h2>
            <p className='text-secondary'>Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience.</p>
        </div>
        <div className='ps-md-5'>
            <h2 className='contact-address text-white'>Health-Conscious Options</h2>
            <p className='text-secondary'>From vegetarian to gluten-free 
dishes, we provide healthy options without compromising on flavor.</p>

        </div>
        <div>
            <h2 className='contact-address text-white'>Seamless Online Ordering & Delivery</h2>
            <p className='text-secondary'>with our easy online ordering and fast delivery service. </p>
        </div>
        </div> 
        </div>
        </div>
    )
}
export default Specilaties