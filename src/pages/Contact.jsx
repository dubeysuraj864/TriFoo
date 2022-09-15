import "../styles/Contact.css";
import {AiOutlinePhone, AiOutlineMail} from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";

function Contact() {
    return ( 

        <>
        <div className="contact">
            <div className="left">
                <h1>Contact Details</h1>
            
                <span><AiOutlinePhone className="icon"/></span>
                <h3>Phone +1 1234567890</h3>
                <span><FiPhoneCall className="icon" /></span>
                <h3>Call +99 2334543566</h3>
                <span><AiOutlineMail className="icon" /></span>
                <h3>Email Help@google.com</h3>
                <div className="info">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci magnam suscipit dolor ipsam, doloremque maiores sapiente autem. Consequatur iusto esse nisi accusantium. Facere inventore voluptates vero dolore dolorem amet.
                </div>
            </div>
            <div className="right">
                <h1>Get in touch</h1>
                <form>
                    <input placeholder="Leonardo Dicaprio" type="text" />
                    <input type="text" placeholder="Leonardodicaprio@icloud.com" />
                    <textarea name="Message" id="msg" cols="30" rows="10" placeholder="Message" value={"Itaque adipisci magnam suscipit dolor ipsam, doloremque maiores sapiente autem. Consequatur iusto esse nisi accusantium. Facere inventore voluptates vero dolore dolorem amet. doloremque maiores sapiente autem. Consequatur iusto esse nisi accusantium. Facere inventore voluptates dolore dolorem amet.doloremque maiores sapiente autem. Consequatur iusto esse nisi accusantium."} > </textarea>
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
        </>

     );
}

export default Contact;