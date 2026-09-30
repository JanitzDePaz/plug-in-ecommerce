import { TextInput } from "src/components/inputs/TextInput";
import { ContactItem } from "src/components/indicators/ContactItem";
import { MailIcon } from "src/components/icons/MailIcon";
import { MapPinIcon } from "src/components/icons/MapPinIcon";
import { PhoneIcon } from "src/components/icons/PhoneIcon";
import { InstagramIcon } from "src/components/icons/InstagramIcon";
import { SocialMediaLink } from "src/components/buttons/SocialMediaLink";
import { TwitterIcon } from "src/components/icons/TwitterIcon";
import { LinkedInIcon } from "src/components/icons/LinkedInIcon";
import { FacebookIcon } from "src/components/icons/FacebookIcon";

export default function Contact() {
  return (
      <section className="flex-1 place-self-center flex-center items-center rounded-2xl">
        <div className="p-10 flex flex-wrap gap-15 lg:h-130 items-stretch">
        <div className="h-full w-full lg:w-1/2 flex-center items-center flex-col gap-10 text-center ">
          <h2 className="text-5xl font-semibold">Contacto</h2>
          <p className="hidden lg:block w-3/5 text-2xl mb-10">
            ¿Tienes alguna duda o quieres llevar tu experiencia de sonido al siguiente nivel? <br />Escríbenos y nos ponemos en contacto contigo al instante.
          </p>
          <div className="hidden lg:flex items-baseline flex-col gap-6">
            <ContactItem
              text="info@plugin.com"
              icon={<MailIcon className="text-black" />}
              classname="text-black text-xl"
            />
            <ContactItem
              text="Dirección oficinas Plug In "
              icon={<MapPinIcon className="text-black" />}
              classname="text-black text-xl"
            />
            <ContactItem
              text="+34 123456789"
              icon={<PhoneIcon className="text-black" />}
              classname="text-black text-xl"
            />
          </div>
          <div className="hidden lg:flex gap-5 mt-auto">
            <SocialMediaLink
              icon={<InstagramIcon className="w-7 h-7" />}
              href="https://www.instagram.com/?hl=es"
            />
            <SocialMediaLink
              icon={<TwitterIcon className="w-7 h-7" />}
              href="https://x.com/?lang=es"
            />
            <SocialMediaLink
              icon={<LinkedInIcon className="w-7 h-7" />}
              href="https://www.linkedin.com"
            />
            <SocialMediaLink
              icon={<FacebookIcon className="w-7 h-7" />}
              href="https://www.facebook.com/?locale=es_ES"
            />
          </div>
        </div>
        <form
          action=""
          className="w-full lg:w-1/3 h-full flex-center items-center flex-col gap-5"
        >
          <TextInput
            id="nombre"
            required
            placeholder="Nombre"
            classname="w-full"
          />
          <TextInput
            id="email"
            required
            placeholder="Correo electrónico"
            classname="w-full"
          />
          <TextInput
            id="asunto"
            required
            placeholder="Asunto"
            classname="w-full"
          />
          <textarea
            placeholder="Mensaje"
            required
            id=""
            className="bg-[#f3f3f4] text-[#0d0c22] text-xl placeholder:text-[#9e9ea7] py-3 px-6 border-0 shadow-2xl rounded-lg h-30 w-full resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-fit py-4 px-14 text-xl rounded-full bg-black text-white border mt-auto"
          >
            Enviar
          </button>
        </form>
        <div className="w-full flex lg:hidden justify-center items-center gap-10">
            <div className="w-1/2 flex items-baseline flex-col gap-6">
                <ContactItem
                text="info@plugin.com"
                icon={<MailIcon className="text-black" />}
                classname="text-black text-xl"
                />
                <ContactItem
                text="Dirección oficinas Plug In "
                icon={<MapPinIcon className="text-black" />}
                classname="text-black text-xl"
                />
                <ContactItem
                text="+34 123456789"
                icon={<PhoneIcon className="text-black" />}
                classname="text-black text-xl"
                />
          </div>
          <div className="w-40 flex flex-wrap lg:hidden gap-5">
            <SocialMediaLink
              icon={<InstagramIcon className="w-7 h-7" />}
              href="https://www.instagram.com/?hl=es"
            />
            <SocialMediaLink
              icon={<TwitterIcon className="w-7 h-7" />}
              href="https://x.com/?lang=es"
            />
            <SocialMediaLink
              icon={<LinkedInIcon className="w-7 h-7" />}
              href="https://www.linkedin.com"
            />
            <SocialMediaLink
              icon={<FacebookIcon className="w-7 h-7" />}
              href="https://www.facebook.com/?locale=es_ES"
            />
          </div>
        </div>
        
        </div>
      </section>
  );
}
