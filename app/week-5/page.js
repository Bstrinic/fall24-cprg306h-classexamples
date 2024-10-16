'use client'

import { useState } from "react";
import ContactForm from "./managed-form";

export default function ContactPage() {

    const[showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        if (showForm){
            setShowForm(false);
        }   else {
            setShowForm(true);
        }
    }

    return(
        <main className="p-5">
            <h1 className="text-3xl text-center text-">Contact Us!</h1>
            { showForm && (<ContactForm />) }
            <div>
                <button onClick={toggleForm}>Contact Form</button>
            </div>
        </main>
    )
}