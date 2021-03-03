import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { getAccountData } from "../data/AccountData";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
    background-color: #000d1a;
`;

const Container = styled.div`
    padding: 15rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    color: white;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 0.1;
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? "2" : "1")};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }

    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #ccc;
        margin: 1em 0;
        padding: 0;
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    display: flex;
    justify-content: center;
    align-items: center;
    filter: brightness(40%);

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? "2" : "1")};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`;

function AccountDetails() {
    let { id } = useParams();
    const baseUrl = "http://localhost:8080/api/account/customerId";
    const baseUrlCard = "http://localhost:8080/api/card/accountId";

    let [accountData, setAccountData] = useState([]);
    let [cardData, setCardData] = useState([]);
    let [accountId, setAccountId] = useState(id);

    const getData = async (customerId) => {
        const request = await fetch(`${baseUrl}=${customerId}`);

        if (request.ok) {
            const data = await request.json();
            setAccountData(data.data);
            setAccountId(data.data.id);
        }
    };

    const getCardData = async (accountId) => {
        const request = await fetch(`${baseUrlCard}=${accountId}`);
        if (request.ok) {
            const data = await request.json();
            setCardData(data.data);
        }
    };

    useEffect(() => {
        getData(id);
        getCardData(accountId);
    }, [accountId]);

    return (
        <>
            <Navbar />
            <Section>
                <Container>
                    {/*<ColumnLeft>*/}
                    {/*    {accountData !== null ? (*/}
                    {/*        <div>*/}
                    {/*            { accountData.map( a => (*/}
                    {/*                <div>*/}
                    {/*                    <h1>           </h1>*/}
                    {/*                    <h1>Account number</h1>*/}
                    {/*                    <p>{ a.account_number }</p>*/}
                    {/*                    <hr />*/}
                    {/*                    <h1>Amount</h1>*/}
                    {/*                    <p>{ a.amount }</p>*/}
                    {/*                    <hr />*/}
                    {/*                    <h1>Currency</h1>*/}
                    {/*                    <p>{ a.currency }</p>*/}
                    {/*                    <hr/>*/}
                    {/*                    <h1>Interest</h1>*/}
                    {/*                    <p>{ a.interest }</p>*/}
                    {/*                    <hr/>*/}
                    {/*                    <h1>Type</h1>*/}
                    {/*                    <p>{ a.type }</p>*/}
                    {/*                    <hr/>*/}
                    {/*                </div>*/}
                    {/*                )) }*/}
                    {/*        </div>*/}
                    {/*    ) : null}*/}
                    {/*</ColumnLeft>*/}
                    {accountData !== null ? (
                        <div>
                            {accountData.map((a, i) => (
                                <ColumnLeft key={i}>
                                    <div>
                                        <h1>Account number</h1>
                                        <p>{a.account_number}</p>
                                        <hr />
                                        <h1>Amount</h1>
                                        <p>{a.amount}</p>
                                        <hr />
                                        <h1>Currency</h1>
                                        <p>{a.currency}</p>
                                        <hr />
                                        <h1>Interest</h1>
                                        <p>{a.interest}</p>
                                        <hr />
                                        <h1>Type</h1>
                                        <p>{a.type}</p>
                                        <hr />
                                    </div>
                                </ColumnLeft>
                            ))}
                        </div>
                    ) : null}

                    <ColumnRight>
                        {cardData !== null ? (
                            <div>
                                {cardData.map((a, i) => (
                                    <div key={i}></div>
                                ))}
                            </div>
                        ) : null}
                    </ColumnRight>
                </Container>
            </Section>
        </>
    );
}

export default AccountDetails;
