import { Button } from "@/components/ui/button";
import { GiThorHammer, GiThunderStruck } from "react-icons/gi";

export default function Page () {
  return <main>
    <section className="mx-auto max-w-6xl">
      <p className="text-3xl font-bold">create ad</p>

      <form action="" className="flex flex-col gap-2 items-start justify-center">
        <input type="text" placeholder="t.ex. ZAP077" />
        <input type="text" placeholder="t.ex. Honda civic 1.5 sedan 2017" />
        <input type="text" placeholder="t.ex. 9200km" />
        <input type="text" placeholder="t.ex. vinterdäck och sommardäck" />
        <input type="text" placeholder="t.ex. condiiton" />
        <input type="text" placeholder="t.ex. problem? repor, bromsbelägg behöver bytas" />
        <input type="text" placeholder="t.ex. imgs upload" />

        <Button size={"sm"} className="text-xs font-general uppercase">Skapa annons nu! <GiThorHammer className="-ml-2" /> </Button>
      </form>
    </section>
  </main>
}