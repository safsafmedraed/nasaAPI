import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from '../../resuablecomponent/index'
const headers = { "Content-Type": "application/json" }


const Main = () => {
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    const getNasaData = async () => {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?count=4&api_key=${process.env.REACT_APP_NASA_API_KEY}`, headers)
        setloading(false)
        setData(response.data)
        return response.data
    }
    useEffect(() => {
        getNasaData()

    }, [])

    /*copyright: "Jeff Dai"
    date: "2016-11-21"
    explanation: "A nova in Sagittarius is bright enough to see with binoculars.  Discovered last month by the All-Sky Automated Survey for Supernovae (ASAS-SN), the stellar explosion even approached the limit of naked-eye visibility last week. A classical nova results from a thermonuclear explosion on the surface of a white dwarf star -- a dense star having the size of our Earth but the mass of our Sun.  In the featured image, the nova was captured last week above ancient Wat Mahathat in Sukhothai, Thailand. To see Nova Sagittarius 2016 yourself, just go out just after sunset and locate near the western horizon the constellation of the Archer (Sagittarius), popularly identified with an iconic teapot.  Also visible near the nova is the very bright planet Venus. Don�t delay, though, because not only is the nova fading, but that part of the sky is setting continually closer to sunset."
    hdurl: "https://apod.nasa.gov/apod/image/1611/NovaSag2016_Dai_1500_annotated.jpg"
    media_type: "image"
    service_version: "v1"
    title: "Nova over Thailand"
    url: "https://apod.nasa.gov/apod/image/1611/NovaSag2016_Dai_960_annotated.jpg"*/



    return loading ? <div><Spinner /></div> : (
        <>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <div className='container  text-center accordion-button collapsed' style={{ paddingTop: '5%' }}
                     type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <div className='row'><div className='col'>
                        <h3>  <span style={{ fontWeight: 'bold' }}> APOD :</span> Astronomy Picture of the Day</h3>
                    </div>
                    </div>
                </div>
                       
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                        <div class="accordion-body">
                            <div className="container text-center ">

                                <div className="row">
                                    {data.map((img) => (
                                        <div className="col-sm-12 col-md-6" key={img.date}>
                                            <div className='card' style={{ width: "450px" }}>
                                                <img className='"card-img-top' src={img.hdurl} alt='nasa' height={'500px'} style={{ borderRadius: 3 }} />
                                                <div class="card-body">
                                                    <h5 class="card-title">{img.title}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">{img.date}</h6>
                                                    <p class="card-text">{img.explanation}</p>

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