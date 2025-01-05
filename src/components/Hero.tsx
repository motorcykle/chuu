import { BsLightning, BsLightningFill, BsThunderbolt, BsThunderboltFill } from "react-icons/bs";
import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";

export default function Hero () {
  return <section>
    <div className="max-w-6xl mx-auto px-2 md:px-0 py-10">
      <section className="space-y-8">
        <h1 className="md:text-9xl text-6xl leading-[0.9em] ">
          Blixtsnabb bilannonsering <BsLightningFill className="inline-block" />
        </h1>

        <div className="space-y-8">
          <p className="text-xl md:text-2xl max-w-5xl tracking-wide leading-[1.6em]">
            Få din bil synlig på nolltid! Med vår tjänst skapar vi en professionell annons åt dig – du behöver bara skicka oss bilder, registreringsnummer och miltal. Vi ser till att din bil presenteras på bästa möjliga sätt.
          </p>

          <Button>Skapa annons <SendIcon /></Button>
        </div>
      </section>
      <section></section>
    </div>
  </section>
}