import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import slide1 from "../assets/img/carousel/slide1.jpg"
import slide2 from "../assets/img/carousel/slide2.jpg"
import slide3 from "../assets/img/carousel/slide3.jpg"
import {Link} from "react-router-dom";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="drop-shadow">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slide2}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slide3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slide1}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="TextAlignCenter Padding60T">
                    <Link to="/register">
                        <Button variant="danger" type="submit" as="input" value="Registrace zde"/>
                    </Link>
                </div>
                <div className="container60C Padding40T">
                    <h2 className="Heading2">Co je požární sport?</h2>
                    <p>Požární sport, občas také hasičský sport, je oblast sportu, která úzce souvisí s hasičskými jednotkami, zvláště pak se sbory dobrovolných hasičů, nicméně je
                        součástí speciální tělesné přípravy příslušníků hasičských záchranných sborů krajů a zaměstnanců hasičských záchranných sborů podniků. Každoročním vyvrcholením
                        je mistrovství ČR v požárním sportu družstev HZS ČR a mistrovství ČR družstev SDH obcí, kde právo účasti soutěžící získávají v postupových kolech
                        a do mistrovství se kvalifikují nejlepší družstva i jednotlivci.<a href={"/about"}> >>> více informací</a></p>
                </div>
                <div className="Footer">
                    <p>© 2019</p>
                </div>
            </div>
        );
    }
}

export default HomePage;
