import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import getBranchOfficeData from "../data/BranchOfficeData";




function BranchOffices() {
    const [branchOfficeData, setBranchOfficeData] = useState([]);

    const getData = async () => {
        try {
            const data = await getBranchOfficeData();
            setBranchOfficeData(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getBranchOfficeData();
        getData();
    }, []);

    return (
        <>
            <Navbar />
            <div>
                {branchOfficeData.length > 0 && branchOfficeData.map(branchOffice => (
                    <h4>{branchOffice.name}</h4>
                    ))}
            </div>
        </>
    );
}

export default BranchOffices;
