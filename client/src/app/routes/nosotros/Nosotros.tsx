import { SocialMediaLink } from "src/components/buttons/SocialMediaLink";
import placeholder from "../../../assets/icons/PlugInLogo.png";
import { InstagramIcon } from "src/components/icons/InstagramIcon";
import { TwitterIcon } from "src/components/icons/TwitterIcon";
import { LinkedInIcon } from "src/components/icons/LinkedInIcon";
import { FacebookIcon } from "src/components/icons/FacebookIcon";

export default function Nosotros() {
  return (
    <div className="flex-1 flex-center items-center flex-col gap-5 md:gap-20 md:flex-row p-5">
      <img src={placeholder} alt="" className="w-1/2 lg:w-1/4"/>
      <section className="flex items-center flex-col gap-10 w-9/10 lg:w-1/4">
        <div className="flex flex-col items-center gap-5  text-center">
          <h2 className="text-4xl font-semibold ">
            ¿Quienes somos?
          </h2>
          <p className=" text-lg">
            Plug In es una empresa dedicada en exclusiva a la venta de perifericos, en nuestro catalogo puedes encontrar monitores, auriculares, teclados, ratones y micrófonos.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-semibold text-center">Descubre más</h3>
          <div className="flex-center gap-3 flex-wrap ">
            <div className="flex gap-3">
              <SocialMediaLink
                icon={<InstagramIcon className="w-5 h-5 lg:w-7 lg:h-7" />}
                href="https://www.instagram.com/?hl=es"
                className="p-4"
              />
              <SocialMediaLink
                icon={<TwitterIcon className="w-5 h-5 lg:w-7 lg:h-7" />}
                href="https://x.com/?lang=es"
                className="p-4"
              />
            </div>
            <div className="flex gap-3">
              <SocialMediaLink
                icon={<LinkedInIcon className="w-5 h-5 lg:w-7 lg:h-7" />}
                href="https://www.linkedin.com"
                className="p-4"
              />
              <SocialMediaLink
                icon={<FacebookIcon className="w-5 h-5 lg:w-7 lg:h-7" />}
                href="https://www.facebook.com/?locale=es_ES"
                className="p-4"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
