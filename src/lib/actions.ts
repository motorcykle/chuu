
"use server"

import { redirect } from "next/navigation";
import OpenAI from "openai";

const openai = new OpenAI();

export async function useChatGPT(formData: FormData) {
  try {
    const registrationNumber = formData.get('registrationNumber') as string;
    const carModel = formData.get('carModel') as string;
    const mileage = formData.get('mileage') as string;
    const extraEquipment = formData.get('extraEquipment') as string;
    const exteriorCondition = formData.get('toggle-exterior') as string;
    const interiorCondition = formData.get('toggle-interior') as string;
    const problems = formData.get('problems') as string;
    const kommun = formData.get('kommun') as string;

    // Handle file uploads separately if needed
    const images = formData.getAll('images') as File[];

    console.log({
      registrationNumber,
      carModel,
      mileage,
      extraEquipment,
      exteriorCondition,
      interiorCondition,
      problems,
      images,
      kommun
    });

    const prompt = `
      Write a detailed car ad with price and information about the car. 
      Here's the info: 
      - Registration Number: ${registrationNumber}
      - Car Model: ${carModel}
      - Mileage: ${mileage}
      - Extra Equipment: ${extraEquipment}
      - Exterior Condition: ${exteriorCondition}
      - Interior Condition: ${interiorCondition}
      - Problems: ${problems}
      - Kommun: ${kommun}
      
      Add a reasonable price based on the car's condition and market value, always make sure it's around market value, don't make the car underpriced. 
      Include the car's functions and any relevant selling points, you can find own research about the car and integrate functions that you know of.
      Make the ad in swedish and in the same format swedish car dealerships make ads.
      Go over what you write and don't write something weird in english unnecessarily.
      Describe the car, looks, functions, etc. You can research about the car and bring more info to the table.
    
      Take inspiration from this example ad:

      Volvo V90 D4 190hk Momentum VOC D-Värmare Rattvärme Sensorer

16
279 800 kr
Säljes av:
Riddermark bil Halmstad
Företag

Skicka meddelande

Visa telefonnummer

Skicka meddelande

Visa telefonnummer
Fakta
Bränsle
Diesel
Växellåda
Automat
Miltal
8 191
Modellår
2020
Biltyp
Kombi
Drivning
Tvåhjulsdriven
Hästkrafter
191 Hk
Färg
Mörkgrå (Mgrå)
Motorstorlek
1969 cc
Datum i trafik
2020-09-23
Märke
Volvo
Modell
V90

Visa mindre fakta
Inför köpet
Utrustning
MomentumVolvo On CallParkeringsvärmareParkeringssensorer fram & bakSkinn/TygklädselMultifunktionsrattRattvärmeAdaptiv farthållare2-Zons klimatanläggningACC/KlimatanläggningSätesvärme fram/bakTonade rutorBluetoothISOFIXMörk Grå KarossSvensksåld
Beskrivning
Riddermark Bil har Sveriges NÖJDASTE kunder enligt Trustpilot
*DTY15F* *Vi tar emot alla inbyten och erbjuder hemleverans i hela Sverige!*

Varmt välkommen till våran anläggning i Halmstad!

Riddermark Bil Halmstad - din destination för ett smidigt bilköp! Vi erbjuder ett brett utbud av kvalitetsbilar som är noggrant genomgångna och en enastående service. Besök oss på Skyttevägen 23 och upplev skillnaden! Vi hjälper dig hitta rätt bil till rätt pris.

Leverans av din nya bil direkt till din dörr inom 24 timmar! Vi tar även hand om ditt inbyte. Vill du se mer? Kontakta oss för fler bilder och videor.

Kontakta oss för mer information: 
Telefon: 035-240 06 00
Mail: halmstad@riddermarkbil.se
Adress: Skyttevägen 23, 302 44, Halmstad

Därför ska du välja Riddermark Bil: 
* Störst i Sverige på begagnade bilar
* Erbjuder hemleverans i hela Sverige
* 14 dagars helförsäkring via Folksam
* Över 10 tusen omdömen på Trustpilot 
* Våra bilar är testade på över 100 punkter
* Kvalitetssäkrade bilar

Utrustning inkluderar:
  . Momentum
  . Volvo On Call & Parkeringsvärmare
  . Parkeringssensorer
  . Skinn/Tygklädsel
  . Rattvärme
  . Adaptiv farthållare

Jämför denna bil med någon av våra andra Volvo V90 i lager. Se våra bilar på https://www.riddermarkbil.se/kopa-bil/?series=v90

Övrig information om bilen:
Årsskatt: Endast 3673 kr 
Vid blandad körning är förbrukning endast 0.48 l/mil
Besiktigad till och med 2025-09-30
Möjlighet till 12-60 månaders garanti

Besök
https://www.riddermarkbil.se/kopa-bil/volvo/dty15f/
för att:
. Se närbilder och film på bilen
. Reservera bilen direkt online
. Få mer info om utrustning och tillval

RIDDERMARK BIL TRYGGHETSPAKET:
Skydda din bil med vårt trygghetspaket. Välj mellan 12-60 månaders garanti och komplettera med extra hjuluppsättningar till bra priser. Gör ditt bilköp tryggt och enkelt hos oss.

Med korta lagertider försvinner våra bilar snabbt! Ring oss idag för att reservera din bil: 035-240 06 00. Vi erbjuder även skräddarsydd finansiering och 14 dagars fri försäkring från Folksam.

Se hur vi genomför våra tester här:
https://vimeo.com/1011323016

Välkomna!

Utrustning/Tillbehör:
Momentum,Volvo On Call,Parkeringsvärmare,Parkeringssensorer fram & bak,Skinn/Tygklädsel,Multifunktionsratt,Rattvärme,Adaptiv farthållare,2-Zons klimatanläggning,ACC/Klimatanläggning,Sätesvärme fram/bak,Tonade rutor,Bluetooth,ISOFIX,Mörk Grå Kaross,Svensksåld
    
      `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful assistant writing car ads (you know a ton about cars)." },
        { role: "user", content: prompt }
      ]
    });

    const carAd = completion.choices[0].message.content;

    console.log("Generated Car Ad:", carAd);
    return carAd; // Redirect after processing
  } catch (error) {
    console.error("Error processing form data:", error);
  }
}
