import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";

const SliderSection = styled.section`
    height: 100vh;
    max-height: 1100vh;
    position: relative;
    overflow: hidden;
`;

const SliderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const SliderSlide = styled.div`
    z-index: 1;
    width: 100vw;
    height: 100vh;
    transition: all 1.25s;
    opacity: 0;
`;
const SliderSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`;
const SliderImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: brightness(40%);
`;
const SliderContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    width: calc(100% - 100px);
    color: #fff;

    h1 {
        font-size: clamp(1rem, 8vw, 4rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }
`;

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent((current) => (current === length - 1 ? 0 : current + 1));
        };
        timeout.current = setTimeout(nextSlide, 5000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]);

    return (
        <SliderSection>
            <SliderWrapper>
                {slides.map((slide, index) => {
                    return (
                        <SliderSlide
                            key={index}
                            style={index === current ? { opacity: 1 } : {}}
                        >
                            <SliderSlider>
                                <SliderImage
                                    src={slide.image}
                                    alt={slide.image}
                                />
                                <SliderContent>
                                    <h1> {slide.title} </h1>
                                    <Button to={slide.path} primary="true">
                                        {slide.label}
                                    </Button>
                                </SliderContent>
                            </SliderSlider>
                        </SliderSlide>
                    );
                })}
            </SliderWrapper>
        </SliderSection>
    );
};

export default Slider;
