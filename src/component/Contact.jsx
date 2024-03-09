import Navbar from "./Navbar";
import '../component/contact.css'
import { Footer, Home_part_5 } from "./Home";
function Contact(params) {
    return (
        <>
            <Navbar />
            <Home_part_5 />
                <div className="pt-5 overflow-hidden"> <hr className="bgdarks p-2 text-dark bg-opacity-10" /></div>
<Footer/>



            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.844950528364!2d78.68879027521723!3d20.832611480768126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd487233692c3f5%3A0x5edc81acb7829035!2sKinkar%20Polytechnic%20College%20%2CSeloo!5e1!3m2!1sen!2sin!4v1709840632143!5m2!1sen!2sin" width="100%" height="550px" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div><hr /></div>
            <div><hr /></div>
            <div className="text-center">
                <h1>GET IN TOUCH WITH US</h1><br />
                <div><span>If you have any questions regarding programs, facilities or have requests <br /> or suggestions or any enquiry to make, feel free to give us a call or fill out the form below. Request for a campus visit by submitting the form below</span></div>
              <br /><br /><br />  <div className="d-flex mx-auto">
                    <div class="card mx-auto" style={{ width: "18rem" }}>
                        <div class="card-body">
                            <h5 class="card-title">COLLEGE ADDRESS</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Kinkar Polytechnic College ,Seloo</h6>
                            <p class="card-text">Principal <br />Email Id :
                                xxxx.com <br /> Mobile No : +91-8007777170</p>

                        </div>
                    </div><div class="card mx-auto" style={{ width: "18rem" }}>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text"></p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
          <h1 style={{fontSize:"55px" ,paddingBottom:"100px"}}>Thank <br /> You</h1>
            </div> */}
        </>
    )
}
export default Contact;