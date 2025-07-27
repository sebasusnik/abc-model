import type { FormData } from "../../App";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const StepC = ({
  data,
  handleChange,
  handleKeyDown,
}: {
  data: FormData;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}) => (
  <div>
    <Label htmlFor="c_emocional">C) Consecuencias</Label>
    <p className="text-sm text-slate-400 mb-4">
      Describe cómo te sentiste y cómo actuaste.
    </p>
    <div className="space-y-4">
      <div>
        <Label htmlFor="c_emocional">Emocionales (¿Qué sentiste?)</Label>
        <Textarea
          id="c_emocional"
          name="c_emocional"
          value={data.c_emocional}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ej: Ansiedad, vergüenza, tristeza, rabia."
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="c_fisiologico">
          Fisiológicas (¿Qué notaste en tu cuerpo?)
        </Label>
        <Textarea
          id="c_fisiologico"
          name="c_fisiologico"
          value={data.c_fisiologico}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ej: Corazón acelerado, sudoración, nudo en el estómago."
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="c_conductual">
          Conductuales (¿Qué hiciste o dejaste de hacer?)
        </Label>
        <Textarea
          id="c_conductual"
          name="c_conductual"
          value={data.c_conductual}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ej: Me quedé callado, evité el contacto visual, pensé en no ir a trabajar mañana."
          rows={3}
        />
      </div>
    </div>
  </div>
);