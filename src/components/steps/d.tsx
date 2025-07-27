import type { FormData } from "../../App";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const StepD = ({
  data,
  handleChange,
  handleKeyDown,
}: {
  data: FormData;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}) => (
  <div>
    <Label htmlFor="d_debate">D) Debate de Pensamientos</Label>
    <p className="text-sm text-slate-400 mb-4">
      Cuestiona el pensamiento que tuviste. ¿Es 100% real? ¿Hay otra forma de
      verlo?
    </p>
    <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
      <p className="text-xs text-slate-400 font-semibold mb-1">
        Tu pensamiento original (B):
      </p>
      <p className="text-sm text-slate-200 italic">
        "{data.b_pensamientos || "No has completado el paso anterior."}"
      </p>
    </div>
    <Textarea
      id="d_debate"
      name="d_debate"
      value={data.d_debate}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Ej: 'Que mi jefe me critique no significa que sea un inútil. Pudo tener un mal día, o es una oportunidad para aprender. La semana pasada me felicitó por otro proyecto.'"
    />
  </div>
);