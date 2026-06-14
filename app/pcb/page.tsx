import PCBHero from "@/components/pcb/PCBHero";
import PCBQuoteForm from "@/components/pcb/PCBQuoteForm";
import PCBProcess from "@/components/pcb/PCBProcess";
import PCBCTA from "@/components/pcb/PCBCTA";

export const metadata = {
  title: "PCB Manufacturing & Assembly | Lenx Tech Enterprise",
  description:
    "PCB fabrication, PCB assembly and BOM component sourcing solutions from Lenx Tech Enterprise.",
};

export default function PCBPage() {
  return (
    <main>
      <PCBHero />

      <PCBQuoteForm />

      <PCBProcess />

      <PCBCTA />
    </main>
  );
}