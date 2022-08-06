import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../../resuablecomponent/index'
const headers = { "Content-Type": "application/json" }


const Main = () => {
    const [data, setData] = useState([])
    const [marsPhotos,setmarsPhotos]=useState([])
    const [loading, setloading] = useState(true)
    // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
    const getNasaAPODData = async () => {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?count=4&api_key=${process.env.REACT_APP_NASA_API_KEY}`, headers)
        setloading(false)
        setData(response.data)
    }
    const getNasaMarsData = async () => {
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${process.env.REACT_APP_NASA_API_KEY}`, headers)
        setmarsPhotos(response.data.photos)
        console.log(response.data.photos);
      
    }
    useEffect(() => {
        getNasaAPODData()
        getNasaMarsData()
    }, [])

    return loading ? <div><Spinner /></div> : (
        <>
            <div className="accordion" id="accordionExample" style={{marginBottom:'200px'}}>
                {/* item 1 */}
                <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                        <div className=' text-center accordion-button collapsed' style={{ paddingTop: '5%' }}
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <h3>  <span style={{ fontWeight: 'bold' }}> APOD :</span> Astronomy Picture of the Day</h3>

                        </div>

                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                        <div className="accordion-body">
                            <div className="container text-center ">
                                <div className="row">
                                    {data.map((img) => (
                                        <div className="col-sm-12 col-md-6" key={img.date}>
                                            <div className='card' style={{ width: "450px" }}>
                                                <img className='"card-img-top' src={img.hdurl} alt='nasa' height={'500px'} style={{ borderRadius: 3 }} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{img.title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">{img.date}</h6>
                                                    <p className="card-text">{img.explanation}</p>

                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* item 2 */}

                <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                        <div className='accordion-button collapsed' style={{ paddingTop: '5%' }}
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                            <h3>  <span style={{ fontWeight: 'bold' }}> MRP :</span> Mars Rover Photos</h3>

                        </div>

                    </div>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                        <div className="accordion-body">
                            <div className="container text-center ">

                                <div className="row">
                                {marsPhotos.map((img,index) => (
                                        <div className="col-sm-12 col-md-6" key={index}>
                                            <div className='card' style={{ width: "450px" }}>
                                                <img className='"card-img-top' src={img.img_src} alt='nasa' height={'500px'} style={{ borderRadius: 3 }} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{img.camera.full_name}</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">{img.earth_date}</h6>
                                                    <p className="card-text"><b>Launch date:</b>{img.rover.launch_date}</p>
                                                    <p className="card-text"><b>Landing date:</b>{img.rover.landing_date}</p>

                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>)
}


export default Main