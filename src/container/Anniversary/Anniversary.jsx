// AnniversaryPage.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import './Anniversary.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client, urlFor } from "../../client";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const date = ['1st', '2nd', '7-9th', '10th', '13-15th'];
const title = ['Last days at the beach', 'We outsiiide']

const AnniversaryPage = () => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [anvpics, setAnvpics] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const query = '*[_type == "anvpics"]';

        client.fetch(query).then((data) => {
            setAnvpics(data);
        });

    }, []);

    const pic = anvpics[currentIndex];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="anniversary-page"
        >
            <header>
                <h1>Happy 8 Months Anniversary, My Love!</h1>
            </header>

            <section className="experience-section">
                <h2>Our Journey Together</h2>
                <p>
                    Over the past 8 months, our love has grown stronger with each passing day. From
                    adventures to quiet moments, every memory we've shared has been a treasure.
                </p>
                <p>
                    Whether it's the laughter we've shared or the challenges we've faced together, every
                    moment has been special because it's been with you.
                </p>

                {/* <div className="milestone">
                    <p className="date p-text">{date}</p>
                    <p className="title">{title}</p>
                    <Button onClick={handleOpen}>Open Me 🧸</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div> */}

            </section>


            <section className="gallery-section">
                <h2>Memorable Moments</h2>

                {date.length && (

                    <>
                        <div className='app__anniversary-item app__flex'>

                            <div className='app__anniversary-content'>
                                <p className='p-text'>{date[currentIndex]} January</p>
                                <div>
                                    <h4 className='bold-text'>{title[currentIndex]}</h4>
                                    <Button onClick={handleOpen}>Open Me 🧸</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Text in a modal
                                            </Typography> */}

                                            {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
                                            <Typography id="modal-modal-description">
                                                <div className='app__anniversary-pics app__flex'>
                                                    
                                                    <motion.div
                                                        whileInView={{ opacity: [0, 1] }}
                                                        transition={{ duration: 0.5, type: 'tween' }}
                                                    >
                                                        <img src={urlFor(pic?.imgUrl)} alt={pic?.name} />
                                                    </motion.div>
                                                    
                                                </div>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                            </div>

                        </div>

                        <div className='app__anniversary-btns app__flex'>
                            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? date.length - 1 : currentIndex - 1)}>
                                <HiChevronLeft />
                            </div>

                            <div className='app__flex' onClick={() => handleClick(currentIndex === date.length - 1 ? 0 : currentIndex + 1)}>
                                <HiChevronRight />
                            </div>
                        </div>
                    </>

                )}
            </section>

            <section className="interactive-section">
                <h2>Let's Create More Memories!</h2>
                <p><i>In the echo of our laughter and the solace of shared tears,<br/>
                In the whisper of inside jokes and the embrace of unforgettable moments,<br/>
                We've woven the tapestry of our love, enduring and true.<br/><br/>
                Here's to us, to the beauty of our journey,<br/>
                May it be adorned with endless laughter and cherished memories.</i></p>
            </section>

            <footer>
                <p>With all my love,</p>
                <p>~ Ed xxox</p>
            </footer>
        </motion.div>
    );
};

export default AppWrap(
    MotionWrap(AnniversaryPage, 'anniversary-page'),
    'valxed'
)
