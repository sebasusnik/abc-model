import type { FormData } from "../../App";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const StepB = ({
  data,
  handleChange,
  handleKeyDown,
}: {
  data: FormData;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}) => (
  <div>
    <Label htmlFor="pensamientos">B) Creencias / Pensamientos</Label>
    <p className="text-sm text-slate-400 mb-4">
      ¿Qué pasó por tu mente en ese momento? ¿Qué te dijiste a ti mismo?
    </p>
    <Textarea
      id="pensamientos"
      name="b_pensamientos"
      value={data.b_pensamientos}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Ej: 'Soy un inútil', 'Nunca hago nada bien', 'Todos piensan que soy un fraude'."
    />
  </div>
);