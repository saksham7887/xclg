import * as React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Navbar from "./Navbar";

import '../component/gallery.css'
import { Footer, Home_part_5 } from './Home';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
















function Gallery(params) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


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


    ];
    return (
        <>
            <Navbar />
            <div class="overflow-hidden">

            <div className='pt-5'></div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid xs={16} sm={16}  md={8} lg={8} xl={8} >
                        <Item><Box sx={{ height: 550, overflowY: 'scroll' }}>
                            <h1 className='text-center'>Gallery</h1>
                            <ImageList variant="masonry" cols={3} gap={9}>
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
                        </Box></Item>
                    </Grid>
                    <Grid xs={16} sm={16}  md={8} lg={8} xl={8}>
                        <Item><Box sx={{ height: 550, overflowY: 'scroll' }}>
                            <h1 className='text-center'>Gallery</h1>
                            <ImageList variant="masonry" cols={3} gap={9}>
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
                        </Box></Item>
                    </Grid>
                </Grid>
            </Box>

<div className='pt-5'></div>
<div className='pt-5'></div>

            <Home_part_5 />
            </div>
            <Footer />


        </>
    )
}
export default Gallery;

