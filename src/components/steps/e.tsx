import type { FormData } from "../../App";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const StepE = ({
  data,
  handleChange,
  handleKeyDown,
}: {
  data: FormData;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}) => (
  <div>
    <Label htmlFor="e_creencia">E) Nuevos Efectos</Label>
    <p className="text-sm text-slate-400 mb-4">
      Describe tu nueva creencia y cómo te sientes y actúas ahora.
    </p>
    <div className="space-y-4">
      <div>
        <Label htmlFor="e_creencia">Nueva Creencia Racional</Label>
        <Textarea
          id="e_creencia"
          name="e_creencia"
          value={data.e_creencia}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ej: 'Cometer un error no me define. Soy capaz y puedo mejorar.'"
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="e_emocional">Nuevas Emociones</Label>
        <Textarea
          id="e_emocional"
          name="e_emocional"
          value={data.e_emocional}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ej: Decepción leve, motivación, calma."
          rows={3}
        />
      </div>
      <div>
        <Label htmlFor="e_conductual">Nuevas Conductas</Label>
        <Textarea
          id="e_conductual"
          name="e_conductual"
          value={data.e_conductual}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ej: Hablaré con mi jefe para aclarar dudas, me enfocaré en mis tareas."
          rows={3}
        />
      </div>
    </div>
  </div>
);