import type { FormData } from "../../App";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const StepA = ({
  data,
  handleChange,
  handleKeyDown,
}: {
  data: FormData;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}) => (
  <div>
    <Label htmlFor="acontecimiento">A) Acontecimiento Activador</Label>
    <p className="text-sm text-slate-400 mb-4">
      Describe la situación objetivamente. ¿Qué, quién, cuándo, dónde?
    </p>
    <Textarea
      id="acontecimiento"
      name="a_acontecimiento"
      value={data.a_acontecimiento}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Ej: Mi jefe me criticó en una reunión de equipo."
    />
  </div>
);
