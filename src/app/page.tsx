"use client";

import { useState } from "react";
import Input from "./components/Input";
import InputDate from "./components/InputDate";
import Button from "./components/Button";
import CustomRadioButton from "./components/CustomRadioButton";

export default function Home() {
  const [abholort, setAbholort] = useState("");
  const [lieferort, setLieferort] = useState("");
  const [wunschdatum, setWunschdatum] = useState("");
  const [transportType, setTransportType] = useState("Abschleppauftrag");
  const [formErrors, setFormErrors] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWunschdatum(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!abholort || !lieferort || !wunschdatum) {
      setFormErrors("Bitte füllen Sie alle Felder aus!");
      return;
    }

    setFormErrors("");

    try {
      const response = await fetch("/api/sendData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          abholort,
          lieferort,
          wunschdatum,
          transportType,
        }),
      });

      if (response.ok) {
        alert("Die Daten wurden erfolgreich gesendet!"); // The data was sent successfully!

        setAbholort("");
        setLieferort("");
        setWunschdatum("");
        setTransportType("Abschleppauftrag");
      } else {
        const errorData = await response.json();
        setFormErrors(errorData.error || "Fehler beim Senden der Daten!"); // Error sending data!
      }
    } catch (error) {
      console.error("Verbindungsfehler:", error); // Connection error:
      setFormErrors("Verbindungsfehler zum Server!"); // Connection error to server!
    }
  };

  return (
    <div
      className="w-screen h-[700px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/main-bg.jpg')" }}
    >
      <div className="container flex gap-10 items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-[418px] transparent rounded-lg shadow-lg px-5 py-8"
        >
          <h3>Transportart auswählen</h3>

          <div className="flex items-center justify-between">
            <CustomRadioButton
              label="Abschleppauftrag"
              checked={transportType === "Abschleppauftrag"}
              onChange={() => setTransportType("Abschleppauftrag")}
              checkedColor="bg-color-accent"
              uncheckedBorderColor="border-color-gray"
            />
            <CustomRadioButton
              label="EXPRESS Autotransport"
              checked={transportType === "EXPRESS Autotransport"}
              onChange={() => setTransportType("EXPRESS Autotransport")}
              checkedColor="bg-color-accent"
              uncheckedBorderColor="border-color-gray"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Input
              type="text"
              label="Abholort"
              placeholder="z.B. Hannover"
              onChange={(e) => setAbholort(e.target.value)}
              value={abholort}
              required
            />
            <Input
              type="text"
              label="Lieferort"
              placeholder="z.B. Herford"
              onChange={(e) => setLieferort(e.target.value)}
              value={lieferort}
              required
            />
            <InputDate
              label="Wunschdatum"
              value={wunschdatum}
              onChange={handleDateChange}
              required
              className="text-color-dark"
            />
          </div>

          <Button
            type="submit"
            label="Weiter"
            iconPosition="right"
            className="w-full"
          />
          {formErrors && <p className="text-red-500">{formErrors}</p>}
        </form>
        <div className="flex flex-col gap-8 max-w-[420px]">
          <div className="flex items-start">
            <img src="/icons/main-icon-1.svg" alt="Icon 1" className="mr-4" />
            <div>
              <h3 className="text-[28px] lleading-tight mb-1">
                Einfach und unkompliziert
              </h3>
              <p className="text-xl">
                Autotransporte Online-Buchen mit persönlicher Beratung und
                Betreuung
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <img src="/icons/main-icon-2.svg" alt="Icon 2" className="mr-4" />
            <div>
              <h3 className="text-[28px] leading-tight mb-1">
                EXPRESS Autotransport
              </h3>
              <p className="text-xl">
                Schnelle Lieferung innerhalb von 1 bis 2 Werktagen
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <img src="/icons/main-icon-3.svg" alt="Icon 3" className="mr-4" />
            <div>
              <h3 className="text-[28px] leading-tight">
                Die Fahrzeuge sind über den gesamten Transportweg versichert
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
