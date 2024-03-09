import Navbar from "./Navbar";
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img14 from '../imga/img14.jpg'
import img16 from '../imga/img16.jpg'
import img26 from '../imga/img26.jpg'
import img27 from '../imga/img27.jpg'
import { Footer } from "./Home";
export function Computerlab(params) {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },

    ];
    return(
        <>
        <Navbar/>
        <img src={img16} class="img-fluid w-100 img_computer" alt="..."></img>
          
            <hr />
   
            <div class="row g-0 bg-body-secondary position-relative">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <img src={img14} class="w-100" alt="..." style={{ aspectRatio: 2 / 1, objectFit: "contain", mixBlendMode: "darken" }} />
                </div>
                <div class="col-md-6 p-4 ps-md-0 mb-4 ">
                    <div class="card mb-5">
                        <div class="card-header">
                            <i class="fa-solid fa-user fa-xl me-4"></i>

                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <h3 > Saksham Bangale </h3>

                                <h4>B Tech</h4>
                            </blockquote>
                        </div>

                    </div>
                    <div class="card mt-5">
                        <div class="card-header">
                            <i class="fa-solid fa-circle-info fa-xl"></i>

                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro inventore illum sed velit? Harum iste et tempore temporibus, incidunt voluptas illum praesentium expedita nobis, aspernatur saepe tenetur eum laborum accusantium.</span>
                                <br />
                                <h4 className="pt-4">
                                    <a href="" className=" pe-5"><i class="fa-brands fa-facebook fa-xl"></i></a>
                                    <a href="" className=" pe-5"><i class="fa-brands fa-instagram fa-xl " style={{ color: "#ea53ab", }}></i></a>


                                </h4>
                            </blockquote>
                        </div>

                    </div>

                </div>
            </div>

            <div className="text-center py-5">
                <h1> eke Engineering     <i class="ms-5 fa-solid fa-graduation-cap fa-beat fa-xl "></i> </h1>
                <br />
                <span className="m-5 text-center" >
                    The department of Computer Engineering aims to provide conductive teaching learning environment with a major  <br />
                    emphasis on gaining knowledge along with hands on training in the computing field and development of overall <br />
                    personality of the students to make them successful professionals catering to the needs of the society. Imparting <br />
                    technical knowledge and developing curiosity to keep them abreast with the upcoming trends and technology in the discipline. <br /><br />

                </span>
            </div>
            <hr />
            <hr />
            <div className=" mx-auto" style={{ paddingRight: "20%", paddingLeft: "20%" }} >
                <table class="table mx-auto table table-striped table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Highlights</th>
                            <th scope="col">Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Name of the course</th>
                            <td>  Diploma In Engineering And Technology - Computer Engineering</td>

                        </tr>
                        <tr>
                            <th scope="row">Level</th>
                            <td>Diploma</td>

                        </tr>
                        <tr>
                            <th scope="row">Duration</th>
                            <td colspan="2">	3 Years</td>

                        </tr>
                        <tr>
                            <th scope="row">Fees</th>
                            <td colspan="2">50,000 INR</td>

                        </tr>    <tr>
                            <th scope="row">Study Mode	</th>
                            <td colspan="2">Regular</td>

                        </tr>
                        <tr>
                            <th scope="row"> Capacity</th>
                            <td colspan="2">60</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <hr />

            <div>
            <Box sx={{  height: 350, overflowY: 'scroll' }}>
                    <h1 className='text-center'>Computer Lab</h1>
                <ImageList variant="masonry" cols={5} gap={7}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            </div>
            <Footer />
        </>
    )
}

export function Library(params) {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },

    ];
    return(
        <>
        <Navbar/>
       <img src={img26} class="img-fluid w-100 img_computer" alt="..."></img>
          
            <hr />
   
            <div class="row g-0 bg-body-secondary position-relative">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <img src={img14} class="w-100" alt="..." style={{ aspectRatio: 2 / 1, objectFit: "contain", mixBlendMode: "darken" }} />
                </div>
                <div class="col-md-6 p-4 ps-md-0 mb-4 ">
                    <div class="card mb-5">
                        <div class="card-header">
                            <i class="fa-solid fa-user fa-xl me-4"></i>

                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <h3 > Saksham Bangale </h3>

                                <h4>B Tech</h4>
                            </blockquote>
                        </div>

                    </div>
                    <div class="card mt-5">
                        <div class="card-header">
                            <i class="fa-solid fa-circle-info fa-xl"></i>

                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro inventore illum sed velit? Harum iste et tempore temporibus, incidunt voluptas illum praesentium expedita nobis, aspernatur saepe tenetur eum laborum accusantium.</span>
                                <br />
                                <h4 className="pt-4">
                                    <a href="" className=" pe-5"><i class="fa-brands fa-facebook fa-xl"></i></a>
                                    <a href="" className=" pe-5"><i class="fa-brands fa-instagram fa-xl " style={{ color: "#ea53ab", }}></i></a>


                                </h4>
                            </blockquote>
                        </div>

                    </div>

                </div>
            </div>

            <div className="text-center py-5">
                <h1> eke Engineering     <i class="ms-5 fa-solid fa-graduation-cap fa-beat fa-xl "></i> </h1>
                <br />
                <span className="m-5 text-center" >
                    The department of Computer Engineering aims to provide conductive teaching learning environment with a major  <br />
                    emphasis on gaining knowledge along with hands on training in the computing field and development of overall <br />
                    personality of the students to make them successful professionals catering to the needs of the society. Imparting <br />
                    technical knowledge and developing curiosity to keep them abreast with the upcoming trends and technology in the discipline. <br /><br />

                </span>
            </div>
            <hr />
            <hr />
            <div className=" mx-auto" style={{ paddingRight: "20%", paddingLeft: "20%" }} >
                <table class="table mx-auto table table-striped table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Highlights</th>
                            <th scope="col">Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Name of the course</th>
                            <td>  Diploma In Engineering And Technology - Computer Engineering</td>

                        </tr>
                        <tr>
                            <th scope="row">Level</th>
                            <td>Diploma</td>

                        </tr>
                        <tr>
                            <th scope="row">Duration</th>
                            <td colspan="2">	3 Years</td>

                        </tr>
                        <tr>
                            <th scope="row">Fees</th>
                            <td colspan="2">50,000 INR</td>

                        </tr>    <tr>
                            <th scope="row">Study Mode	</th>
                            <td colspan="2">Regular</td>

                        </tr>
                        <tr>
                            <th scope="row"> Capacity</th>
                            <td colspan="2">60</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <hr />

            <div>
            <Box sx={{ height: 350, overflowY: 'scroll' }}>
                    <h1 className='text-center'>Computer Lab</h1>
                <ImageList variant="masonry" cols={5} gap={7}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            </div>
            <Footer />
        </>
    )
}export function WorkShop(params) {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },

    ];
    return(
        <>
        <Navbar/>
 <img src={img27} class="img-fluid w-100 img_computer" alt="..."></img>
          
            <hr />
   
            <div class="row g-0 bg-body-secondary position-relative">
                <div class="col-md-6 mb-md-0 p-md-4">
                    <img src={img14} class="w-100" alt="..." style={{ aspectRatio: 2 / 1, objectFit: "contain", mixBlendMode: "darken" }} />
                </div>
                <div class="col-md-6 p-4 ps-md-0 mb-4 ">
                    <div class="card mb-5">
                        <div class="card-header">
                            <i class="fa-solid fa-user fa-xl me-4"></i>

                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <h3 > Saksham Bangale </h3>

                                <h4>B Tech</h4>
                            </blockquote>
                        </div>

                    </div>
                    <div class="card mt-5">
                        <div class="card-header">
                            <i class="fa-solid fa-circle-info fa-xl"></i>

                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro inventore illum sed velit? Harum iste et tempore temporibus, incidunt voluptas illum praesentium expedita nobis, aspernatur saepe tenetur eum laborum accusantium.</span>
                                <br />
                                <h4 className="pt-4">
                                    <a href="" className=" pe-5"><i class="fa-brands fa-facebook fa-xl"></i></a>
                                    <a href="" className=" pe-5"><i class="fa-brands fa-instagram fa-xl " style={{ color: "#ea53ab", }}></i></a>


                                </h4>
                            </blockquote>
                        </div>

                    </div>

                </div>
            </div>

            <div className="text-center py-5">
                <h1> eke Engineering     <i class="ms-5 fa-solid fa-graduation-cap fa-beat fa-xl "></i> </h1>
                <br />
                <span className="m-5 text-center" >
                    The department of Computer Engineering aims to provide conductive teaching learning environment with a major  <br />
                    emphasis on gaining knowledge along with hands on training in the computing field and development of overall <br />
                    personality of the students to make them successful professionals catering to the needs of the society. Imparting <br />
                    technical knowledge and developing curiosity to keep them abreast with the upcoming trends and technology in the discipline. <br /><br />

                </span>
            </div>
            <hr />
            <hr />
            <div className=" mx-auto" style={{ paddingRight: "20%", paddingLeft: "20%" }} >
                <table class="table mx-auto table table-striped table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Highlights</th>
                            <th scope="col">Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Name of the course</th>
                            <td>  Diploma In Engineering And Technology - Computer Engineering</td>

                        </tr>
                        <tr>
                            <th scope="row">Level</th>
                            <td>Diploma</td>

                        </tr>
                        <tr>
                            <th scope="row">Duration</th>
                            <td colspan="2">	3 Years</td>

                        </tr>
                        <tr>
                            <th scope="row">Fees</th>
                            <td colspan="2">50,000 INR</td>

                        </tr>    <tr>
                            <th scope="row">Study Mode	</th>
                            <td colspan="2">Regular</td>

                        </tr>
                        <tr>
                            <th scope="row"> Capacity</th>
                            <td colspan="2">60</td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <hr />

            <div>
            <Box sx={{  height: 350, overflowY: 'scroll' }}>
                    <h1 className='text-center'>Computer Lab</h1>
                <ImageList variant="masonry" cols={5} gap={7}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            </div>
            <Footer />
        </>
    )
}