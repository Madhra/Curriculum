import React from "react";
import Whatsapp from "./svg/whatsapp";
import Mail from "./svg/mail";
import Linkedin from "./svg/Linkedin";
import Github from "./svg/github";

function Footer() {
    return(
        <footer className="foot">
            <h3>Contactame</h3>
            <div className="contacto">
                <a id="whatsapp" href="https://wa.me/523323606654">
                    <Whatsapp />
                    +52 33 2360 6654
                </a>
                <p>
                    <Mail />
                    carbajalbaldonado@gmail.com
                </p>
                <a href="https://www.linkedin.com/in/dario-carbajal-baldonado-590123217/">
                    <Linkedin />
                </a>
                <a href="https://github.com/Madhra">
                    <Github />
                </a>
            </div>
        </footer>
    )
}

export default Footer;