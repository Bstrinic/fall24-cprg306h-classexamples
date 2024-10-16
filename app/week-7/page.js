"use client"

import { useState } from "react";
import DirectoryForm from "./contact-form";
import DirectoryList from "./contact-list";
import directoryData from "./contacts-info.json";

export default function PageDirectory() {


    //  Mapping function 
    // let directoryArray = directoryData.map(
    //     Performing an operation    
    //     Anonymous function / Creating a brand new array with the json file
    //     (contact) => ({...contact})
    // );

    const [directoryList, setDirectoryList] = useState(
        directoryData.map( (contact) => ({...contact}) )
    );

    // Conditional Styling / Closed on default
    const [isFormOpen, setFormOpen] = useState(false);

    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);
    
    const handleNewContact = (newContact) => {
        // Consider adding validation
        setDirectoryList( [...directoryList, newContact] )
    };

    return(
        <main>
            { 
                isFormOpen && 
                <DirectoryForm 
                directoryArray={directoryList} 
                newContactFunc={handleNewContact} 
                closeFormFunc={closeForm}
                />
            }
            <h1>Contact Directory</h1>
            <DirectoryList directoryArray={directoryList}/>
            <div>
                <button onClick={openForm}>Add New Contact</button>
            </div>
        </main>
    );
};