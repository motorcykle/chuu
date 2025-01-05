import { BsLightning, BsLightningFill, BsThunderbolt, BsThunderboltFill } from "react-icons/bs";
import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";

export default function Hero () {
  return <section>
    <div className="max-w-6xl mx-auto px-2 md:px-0 py-10">
      <section className="space-y-8 relative">
        <h1 className="md:text-9xl uppercase text-6xl leading-[0.9em] font-zentry tracking-wide">
          Blix<b>t</b>snab<b>b</b> bilannonsering <BsLightningFill className="inline-block" />
        </h1>

        <div className="space-y-8">
          <p className="text-xl md:text-xl max-w-3xl tracking-wide  font-general">
            Få din bil synlig på nolltid! Med vår tjänst skapar vi en professionell annons åt dig – du behöver bara skicka oss bilder, registreringsnummer och miltal. Vi ser till att din bil presenteras på bästa möjliga sätt.
          </p>

          <Button size={"lg"} className="text-xs font-general uppercase">Skapa annons <SendIcon className="inline-block" /></Button>
        </div>
      </section>
      <section></section>
    </div>
  </section>
}