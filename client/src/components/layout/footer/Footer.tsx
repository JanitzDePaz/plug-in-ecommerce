import { Link } from "react-router";
import facebookLogo from "../../../assets/icons/social/Facebook.png";
import instagramLogo from "../../../assets/icons/social/Instagram.png";
import xLogo from "../../../assets/icons/social/X.png";
import whatsappLogo from "../../../assets/icons/social/Whatsapp.png";
import { SocialMediaLink } from "src/components/buttons/SocialMediaLink";
import { InstagramIcon } from "src/components/icons/InstagramIcon";
import { TwitterIcon } from "src/components/icons/TwitterIcon";
import { LinkedInIcon } from "src/components/icons/LinkedInIcon";
import { FacebookIcon } from "src/components/icons/FacebookIcon";
export const Footer = () => {
  return (
    <footer className="flex-center gap-[5vw] py-2 border-t border-black">
      <section className="footerSections">
        <h3 className="footerSectionTitles">Contacto</h3>
        <div className="footerDivs">
          <p>
            <span className="sr-only">Teléfono: </span>+34 xxx xx xx xx
          </p>
          <p>
            <span className="sr-only">Correo: </span>info@plugin.xxx
          </p>
          <Link className="footerLinks" to="/Contacto">
            Formulario
          </Link>
        </div>
      </section>
      <section className="footerSections">
        <h3 className="footerSectionTitles">Redes</h3>
        <div className="flex-center items-center flex-1 flex-wrap gap-2">
            <SocialMediaLink
              icon={<InstagramIcon className="w-5 h-5" />}
              href="https://www.instagram.com/?hl=es"
              />
            <SocialMediaLink
              icon={<TwitterIcon className="w-5 h-5" />}
              href="https://x.com/?lang=es"
            />
            <SocialMediaLink
              icon={<LinkedInIcon className="w-5 h-5" />}
              href="https://www.linkedin.com"
            />
            <SocialMediaLink
              icon={<FacebookIcon className="w-5 h-5" />}
              href="https://www.facebook.com/?locale=es_ES"
            />
        </div>
      </section>
      <section className="footerSections">
        <h3 className="footerSectionTitles">Politicas</h3>
        <div className="footerDivs">
          <Link className="footerLinks" to="/PoliticaDePrivacidad">
            Privacidad
          </Link>
          <Link className="footerLinks" to="/Cookies">
            Cookies
          </Link>
          <Link className="footerLinks" to="/Terminos">
            Términos
          </Link>
        </div>
      </section>
    </footer>
  );
};
