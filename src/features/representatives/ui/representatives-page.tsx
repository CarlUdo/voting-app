import { Heading } from "@/ui/heading";
import { InputForm } from "./input-form";
import { RepresentativeBoard } from "./representative-board";

export function RepresenativesPage() {
  return (
    <div>
      <Heading title="Vote for your representative" /> 
      <InputForm />
      <RepresentativeBoard />
    </div>
  );
}
