import { Main } from "next/document";
import ContactForm from "./managed-form";

export default function ContactPage() {
    return(
        <Main>
            <h1>Contact Us!</h1>
            <ContactForm />
        </Main>
    )
}