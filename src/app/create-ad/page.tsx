"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";
import { GiThorHammer } from "react-icons/gi";
import { useChatGPT } from "@/lib/actions";
import { useState } from "react";

export default function Page() {
  const [exteriorCondition, setExteriorCondition] = useState("");
  const [interiorCondition, setInteriorCondition] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    // Set the toggle values in the form data
    formData.set('toggle-exterior', exteriorCondition);
    formData.set('toggle-interior', interiorCondition);

    const res = await useChatGPT(formData);
    console.log(res)
  };

  return (
    <main className="py-10 px-2 md:px-0">
      <section className="mx-auto max-w-6xl">
        <p className="text-3xl font-bold mb-6">Skapa Annons</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-xl">
          <section className="space-y-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="kommun">Kommun</Label>
              <Input id="kommun" name="kommun" type="text" placeholder="t.ex. Västerås" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="registrationNumber">Registreringsnummer</Label>
              <Input id="registrationNumber" name="registrationNumber" type="text" placeholder="t.ex. ZAP077" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="carModel">Bilmodell</Label>
              <Input id="carModel" name="carModel" type="text" placeholder="t.ex. Honda Civic 1.5 sedan 2017" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="mileage">Miltal</Label>
              <Input id="mileage" name="mileage" type="number" placeholder="t.ex. 9200" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="extraEquipment">Extrautrustning</Label>
              <Input id="extraEquipment" name="extraEquipment" type="text" placeholder="t.ex. vinterdäck" />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Skick - Exteriör</Label>
              <ToggleGroup value={exteriorCondition} onValueChange={setExteriorCondition} type="single" className="flex gap-2" aria-label="Skick - Exteriör">
                <ToggleGroupItem className="border w-full" value="dålig" id="exterior-dålig">Dålig</ToggleGroupItem>
                <ToggleGroupItem className="border w-full" value="bra" id="exterior-bra">Bra</ToggleGroupItem>
                <ToggleGroupItem className="border w-full" value="mycket bra" id="exterior-mycket-bra">Mycket bra</ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Skick - Interiör</Label>
              <ToggleGroup value={interiorCondition} onValueChange={setInteriorCondition} type="single" className="flex gap-2" aria-label="Skick - Interiör">
                <ToggleGroupItem className="border w-full" value="dålig" id="interior-dålig">Dålig</ToggleGroupItem>
                <ToggleGroupItem className="border w-full" value="bra" id="interior-bra">Bra</ToggleGroupItem>
                <ToggleGroupItem className="border w-full" value="mycket bra" id="interior-mycket-bra">Mycket bra</ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="problems">Problem</Label>
              <Textarea id="problems" name="problems" placeholder="t.ex. repor, bromsbelägg behöver bytas" />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="images">Bilder</Label>
              <Input id="images" name="images" type="file" multiple className="file-input" />
            </div>
          </section>

          <Button type="submit" size={"sm"} className="text-xs font-general uppercase self-start">
            Skapa Annons Nu! <GiThorHammer className="ml-2" />
          </Button>
        </form>
      </section>
    </main>
  );
}
