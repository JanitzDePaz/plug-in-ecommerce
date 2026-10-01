import { useEffect, useRef } from "react";
import numbersGoingUp from "src/animations/numbersGoingUp";
import { slideDown } from "src/animations/slideDown";
import { LandingPrimaryButton } from "src/components/buttons/LandingPrimaryButton";
import { ScreenDataCards } from "src/components/cards/ScreenDataCards";

export const ScreenSection = () => {
    const hzRef = useRef<HTMLHeadingElement | null>(null);
    const msRef = useRef<HTMLHeadingElement | null>(null);
    const screenTitle = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      if (hzRef.current) {
      numbersGoingUp(hzRef.current, 0, 720, false, "hz");
      slideDown(hzRef.current, 2)
      }
      if (msRef.current) {
        numbersGoingUp(msRef.current, 1000, 0.1, true, "ms");
        slideDown(msRef.current, 2)
      }
      if(screenTitle.current){
        slideDown(screenTitle.current, 1)
      }

    }, []);
    return (
        <section className="bg-[rgb(19,19,19)] min-h-screen flex-center items-center flex-col gap-20 flex-wrap py-30">
        <h1 ref={screenTitle} className="landingTitle w-full">ROG Swift OLED</h1>
        <div className="flex-center w-full">
          <div className="2xl:flex justify-center items-center w-2/6 h-4/5 flex-col gap-5 hidden p-5">
            <div className="w-fit gap-10 grid grid-rows-2 grid-cols-2 place-content-center">
              <ScreenDataCards header="Tasa de refresco" ref={hzRef} svg="hertz.svg" alt="HZ Icon" value="0Hz" />
              <ScreenDataCards header="Latencia" ref={msRef} svg="latency.svg" alt="Latencia Icon" value="ms" />
              <ScreenDataCards header="Resolución" ref={null} svg="resolution.svg" alt="Resolución icon" value="1920 x 1080 px" />
              <ScreenDataCards header="Panel" ref={null} svg="panel.svg" alt="Panel icon" value="OLED" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-white text-center text-2xl">Desde 1.399 €</p>
              <LandingPrimaryButton text="Comprar ahora" route="/Tienda" style="" />
            </div>
          </div>

          <div className=" h-full 2xl:w-3/6 2xl:h-4/5 flex-center items-center flex-col gap-20">
            <video
              src="landingPage/screenSection/screenVideo.webm"
              className="h-full"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="flex flex-col gap-3 2xl:hidden">
              <p className="text-white text-center text-2xl">Desde 1.399 €</p>
              <LandingPrimaryButton text="Comprar ahora" route="/Tienda" style=""/>
            </div>
          </div>
        </div>
      </section>
    )
}