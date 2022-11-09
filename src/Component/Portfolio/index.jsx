import React, { useState, useCallback, Fragment } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import portfolio from './../static/portfolio.json';
import './../../css/_portfolio.less';

const Portfolio = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <Fragment>
            <div className="rightbar__wrapper">
                <div className="portfolio__section">
                    <h1 className="aboutus__section--heading">Awesome
                        <span className="aboutus__section--colortext">Portfolio</span>
                    </h1>
                    <div className="portfolio__section--boxwrap">
                        <Gallery photos={photos} onClick={openLightbox} />
                    </div>
                </div>
            </div>
            <div>
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </Fragment>
    )
}

export default Portfolio;