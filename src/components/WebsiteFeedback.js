import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #000d1a;
`;

const Container = styled.div`
  padding: 10rem;
`;

const newRatingUrl = "http://localhost:8080/api/test/new-rating";



function saveNewRating(rating){
    axios.post(newRatingUrl, rating);
}


function StarRating() {
    const averageRatingUrl = "http://localhost:8080/api/test/average-rating";
    const [averageRating, setAverageRating] = useState(null);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const getAverageRating = async () => {
        try {
          const { data } = await axios.get(averageRatingUrl);
          setAverageRating(data);
          console.log(data);
        } catch (err) {
          console.log(err.message);
        }
    };

    useEffect(() => {
        getAverageRating();
      }, []);
    

    return (
        <>
            <Navbar/>
            <Section>
                <Container>
                    <h4>
                        We appreciate feedback, so you can always send us a message <a href="/contact">here</a>,
                        or just leave us a rating down below.
                        So far, our customers gave us a rating of {averageRating}.
                     </h4>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;

                        return (
                            <label>
                                <input 
                                    type="radio" 
                                    name="rating" 
                                    style={{ display: "none" }} 
                                    value={ratingValue} 
                                    onClick={() => setRating(ratingValue)}
                                />
                                <FaStar 
                                    size={75} 
                                    style={{ cursor: "pointer", transition: "color 200ms" }} 
                                    color={ratingValue <= (hover || rating) ? "yellow" : "gray"}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        );
                    })}
                    <a href="/"><button>Submit</button></a>
                </Container>
            </Section>
            <Footer/>
        </>
    );
}

export default StarRating;
