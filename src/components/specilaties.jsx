import './specilaties.css'

function Specilaties(){

    return(
        <div className="d-flex flex-column justify-content-center align-content-center align-items-center my-5 py-5 ">
            <h1 className="features-header fw-normal ms-md-5 ">WHY TIFFIN BOX</h1>
        <p className="about-text text-center text-secondary ms-md-5">
          Our Specialties 
        </p>
        <div className="specilaties-con d-flex justify-content-center align-content-center align-items-center">

        <img src="./specialitiesimg.png" alt="" className="specialitiesimg"/>
        {/* <ul className="circle-list"> 
            {Array.from({
                length:6
            }).map((_,i)=>
            <li key={i}></li>)}
        </ul> */}
        </div>
        </div>
    )
}
export default Specilaties