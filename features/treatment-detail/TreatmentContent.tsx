import type { TreatmentContent as TreatmentContentType } from "@/content/treatments";

import { Benefits } from "./components/Benefits";
import { Candidates } from "./components/Candidates";
import { FAQ } from "./components/FAQ";
import { Materials } from "./components/Materials";
import { Overview } from "./components/Overview";
import { Procedure } from "./components/Procedure";

interface TreatmentContentProps {
  treatment: TreatmentContentType;
}

export function TreatmentContent({
  treatment,
}: TreatmentContentProps) {
  return (
    <>
      <Overview overview={treatment.overview} />

      <Benefits benefits={treatment.benefits} />

      <Candidates candidates={treatment.candidates} />

      <Procedure procedure={treatment.procedure} />

      <Materials materials={treatment.materials} />

      <FAQ faq={treatment.faq} />
    </>
  );
}