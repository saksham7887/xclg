import Navbar from "./Navbar";

import img1 from '../imga/img1.jpg'
import img2 from '../imga/img2.jpg'
import img3 from '../imga/img3.jpg'
import img4 from '../imga/img4.jpg'
import img5 from '../imga/img5.jpg'
import img6 from '../imga/img6.jpg'
import img7 from '../imga/img7.jpg'
import img8 from '../imga/img8.png'
import img9 from '../imga/img9.png'
import img10 from '../imga/img10.png'
import img11 from '../imga/img11.png'
import img12 from '../imga/img12.png'
import p3 from '../imga//New folder/p3.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

import '../component/Home.css'
import { useEffect } from "react";


function Home(params) {
    useEffect(()=>{
        Aos.init();
    })
    return (
        <>
            <Navbar />
            <div className="overflow-hidden pt-4">
            <div className="pt-2"></div>
                <Home_part_1 />
                <div className="pt-5 "> <hr className="bgdarks p-2 text-dark bg-opacity-10" /></div>

                <Home_part_2 />
                <div className="pt-5 "> <hr className="bgdarks p-2 text-dark bg-opacity-10" /></div>
                <Home_part_3 />
                <div className="pt-5 "> <hr className="bgdarks p-2 text-dark bg-opacity-10" /></div>

                <Home_part_4 />
                <div className="pt-5 "> <hr className="bgdarks p-2 text-dark bg-opacity-10" /></div>

                <Home_part_5 />
                <div className="pt-5 "> <hr className="bgdarks p-2 text-dark bg-opacity-10" /></div>
<Footer/>

            </div>
        </>
    )
}
export default Home

function Home_part_1(params) {
    return (
        <>
            <div className="aaaa">

                <div class="row g-0 bg-body-secondary position-relative ">
                    <div class="col-md-6 mb-md-0 p-md-4 align-self-center">
                        <h1 class="mt-0 ms-3 home_part_1_h1 fw-lighter text-success fw-semibold ">Kinkar Institute of Technology</h1>
                        <h4 class="mt-0 ms-3 home_part_1_h4 fw-semibold">Seloo,Wardha</h4>
                        <p class="mt-0 ms-3 home_part_1_p fw-semibold " >Another instance of placeholder content for this other custom component. <br />
                            It is intended to mimic what some real-world content would look like, and <br /> we're using it here to give the component a bit of body and size.</p>
                        <button className="btn btn-outline-success mr-3 ms-3 mt-4  text-body-emphasis ms-5">Read More</button>
                        <button className="btn btn-outline-success mx-auto ms-4 mt-4 text-body-emphasis">Contect Us   <i class="fa-sharp ms-1 fa-solid btn-outline-info fa-arrow-right fa-fade fa-lg" ></i></button>
                    </div>
                    <div class="col-md-6 p-4 ps-md-0">
                        <img src={p3} className="opacity-100 " style={{ aspectRatio: 3 / 2, objectFit: "contain", mixBlendMode: "darken" }} class="w-100" alt="..." />
                    </div>
                </div>
            </div>




3
        </>
    )
}

function Home_part_2(params) {
    return (
        <>


            <div className="Home_part2_div1 mt-4 aa">
                <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto" data-aos="flip-left" style={{ width: "18rem" }}>
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
                <div data-aos="flip-up" class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto" style={{ width: "18rem" }}>
                    <img src={img2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
                <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto"  data-aos="flip-right" style={{ width: "18rem" }}>
                    <img src={img3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
            </div>
            <div className="Home_part2_div1 mt-4 aa">
                <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto" data-aos="flip-left" style={{ width: "18rem" }}>
                    <img src={img4} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
                <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto" data-aos="flip-right" style={{ width: "18rem" }}>
                    <img src={img5} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>


                </div>
            </div>


        </>
    )
}
function Home_part_3(params) {
    return (
        <>
            <div data-aos="flip-up"  class="row g-0 bg-body-secondary position-relative">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <img src={img6}  style={{ aspectRatio: 3 / 2, objectFit: "contain", mixBlendMode: "darken" }}    class="w-100" alt="..." />
                </div>
                <div class="col-md-6 p-4 ps-md-0">
                    <h5 class="mt-0 text-center">Columns with stretched link</h5>
                    <p className="text-center">Another Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupidditate rerum alias dolor similique modi laboriosam voluptatum facere quis temporibus obcaecati impedit vitae, consequuntur quae sunt praesentium doloribus, vero adipisci?
                        veniam fugit facere mollitia commodi.
                        Corrupti quidem distinctio consequatur expedita harum nemo doloribus architecto, qui sit inventore assumenda molestias optio ullam a cum voluptate, dolores at! Et reiciendis facere vitae id illum aperiam excepturi animi.  instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                    <br />
                </div>
            </div>
            <div className="pt-5 "> <hr className="bg-dark p-2 text-dark bg-opacity-10" /></div>

            <div data-aos="flip-up"  class="row g-0 bg-body-secondary position-relative">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <h5 class="mt-0 text-center">Columns with stretched link</h5>
                    <p className="text-center">Another Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupidditate rerum alias dolor similique modi laboriosam voluptatum facere quis temporibus obcaecati impedit vitae, consequuntur quae sunt praesentium doloribus, vero adipisci?

                        Inequatur expedita harum nemo doloribus architecto, qui sit inventore assumenda molestias optio ullam a cum voluptate, dolores at! Et reiciendis facere vitae id illum aperiam excepturi animi.  instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                    <br />
                  
                </div>
                <div class="col-md-6 p-4 ps-md-0">     <img src={img7}  style={{ aspectRatio: 3 / 2, objectFit: "contain", mixBlendMode: "darken" }}  class="w-100" alt="..." />

                </div>
            </div>
        </>
    )
}

function Home_part_4(params) {
    return (
        <>
            <div className="Home_part2_div1 home_part4_img mt-4 text-center">
                <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto pt-0 pb-0   "  style={{ width: "18rem"  }}>
                    <img src={img8} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Computer engineering</h5>
                        <p class="card-text">Computer engineering is a discipline that integrates several fields of electrical engineering and computer science required to develop computer hardware and software.</p>
                        <a href="/Computer" class="btn btn-primary">Check</a>
                    </div>
                </div>
                <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto pt-0 pb-0" style={{ width: "18rem" }}>
                    <img src={img9} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Mechanical engineering</h5>
                        <p class="card-text">Mechanical engineering is connected with designing machines, evaluating and manufacturing mechanical production and systems.</p>
                        <a href="/Mechanical" class="btn btn-primary">Check</a>
                    </div>
                </div>
                <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto   pt-0 pb-0 " style={{ width: "18rem" }}>
                    <img src={img10} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Civil engineering</h5>
                        <p class="card-text">Civil is a course which instructs us how to assemble infrastructure and create an atmosphere which will be conducive for living in modern world.</p>
                        <a href="/Civil" class="btn btn-primary">Check</a>
                    </div>
                </div>
            </div>
            <div className="Home_part2_div1 home_part4_img1 text-center">
                <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto  pt-0 pb-0" style={{ width: "18rem" }}>
                    <img src={img11} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Electrical engineering</h5>
                        <p class="card-text">Electrical engineering refers to electrical machinery, transmission and distribution of electrical energy, electrical controls in factories, problems of generation, motors and their control and transforms.</p>
                        <a href="/Electrical" class="btn btn-primary">Check</a>
                    </div>
                </div>
                <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto pt-0 pb-0" style={{ width: "18rem" }}>
                    <img src={img12} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Chemical engineering</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/Chemical" class="btn btn-primary">Check</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export function Home_part_5(params) {
    return (
        <>
            <div class="row g-0 bg-body-secondary position-relative">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <h2 className="text-center pt-3 pb-5">Contect Us</h2>



                    <div className="home5_div1">
                        <div class="card mx-auto" style={{ width: "18rem" }}>
                            <div class="card-body ">
                                <h5 class="card-title text-center pb-4"><i class="fa-sharp fa-solid fa-location-dot fa-xl"></i></h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">RMMR+2GX, Rehki Road, Seloo, Maharashtra</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div><div class="card mx-auto" style={{ width: "18rem" }}>
                            <div class="card-body ">
                                <h5 class="card-title text-center pb-4"> <i class="fa-solid fa-phone fa-xl"></i></h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card mx-auto mt-3" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h5 class="card-title text-center pb-4"> <i class="fa-solid fa-envelope fa-xl"></i> </h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 p-4 ps-md-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.8449505283534!2d78.6887902752172!3d20.832611480768126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd487233692c3f5%3A0x5edc81acb7829035!2sKinkar%20Polytechnic%20College%20%2CSeloo!5e1!3m2!1sen!2sin!4v1709932131638!5m2!1sen!2sin" width="100%" height="600" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}



export function Footer(params) {
    return(

        <>
        <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt est dolore quos ducimus harum aspernatur, veritatis deserunt voluptatum fuga earum quibusdam delectus illum numquam repudiandae, officia, quo quas iusto. Totam!</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>type</h6>
            <ul class="footer-links">
              <li><a href="/Computer">(CO)</a></li>
              <li><a href="/Mechanical">(ME)</a></li>
             
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/Contact">Contact Us</a></li>
             
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa-brands fa-facebook fa-xl"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa-brands fa-instagram fa-xl"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa-brands fa-youtube fa-xl"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa-brands fa-youtube fa-xl"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        </>
    )
}