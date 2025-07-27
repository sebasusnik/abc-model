import { CheckCircle, Send } from "lucide-react";
import type { FormData } from "../../App";
import { Button } from "../ui/button";

export const ReviewStep = ({
  data,
  handleShare,
  handleSave,
}: {
  data: FormData;
  handleShare: (message: string) => void;
  handleSave: () => void;
}) => {
  const formattedMessage = `Hola! Te comparto mi registro ABC de hoy:\n\n*A) Acontecimiento Activador:*\n${data.a_acontecimiento}\n\n*B) Creencias / Pensamientos:*\n${data.b_pensamientos}\n\n*C) Consecuencias:*\n  - *Emocionales:* ${data.c_emocional}\n  - *Fisiológicas:* ${data.c_fisiologico}\n  - *Conductuales:* ${data.c_conductual}${data.d_debate ? `\n\n*D) Debate de Pensamientos:*\n${data.d_debate}` : ''}${(data.e_creencia || data.e_emocional || data.e_conductual) ? `\n\n*E) Nuevos Efectos:*\n  - *Nueva Creencia:* ${data.e_creencia || 'No especificado'}\n  - *Nuevas Emociones:* ${data.e_emocional || 'No especificado'}\n  - *Nuevas Conductas:* ${data.e_conductual || 'No especificado'}` : ''}\n\nEste registro fue creado con mi app de TCC.`;
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">
        Resumen de tu registro ABC
      </h3>
      <div className="space-y-4 text-sm text-slate-300 bg-slate-800/50 p-4 rounded-lg">
        <div>
          <p className="font-semibold text-indigo-400">A) Acontecimiento</p>
          <p className="whitespace-pre-wrap">{data.a_acontecimiento || "No completado"}</p>
        </div>
        <div>
          <p className="font-semibold text-indigo-400">B) Pensamientos</p>
          <p className="whitespace-pre-wrap">{data.b_pensamientos || "No completado"}</p>
        </div>
        <div>
          <p className="font-semibold text-indigo-400">C) Consecuencias</p>
          <p className="ml-4 whitespace-pre-wrap">
            <span className="font-medium text-slate-400">Emocionales:</span>{" "}
            {data.c_emocional || "No completado"}
          </p>
          <p className="ml-4 whitespace-pre-wrap">
            <span className="font-medium text-slate-400">Fisiológicas:</span>{" "}
            {data.c_fisiologico || "No completado"}
          </p>
          <p className="ml-4 whitespace-pre-wrap">
            <span className="font-medium text-slate-400">Conductuales:</span>{" "}
            {data.c_conductual || "No completado"}
          </p>
        </div>
        <div>
          <p className="font-semibold text-indigo-400">D) Debate de Pensamientos</p>
          <p className="whitespace-pre-wrap">{data.d_debate || "No completado"}</p>
        </div>
        <div>
          <p className="font-semibold text-indigo-400">E) Nuevos Efectos</p>
          <p className="ml-4 whitespace-pre-wrap">
            <span className="font-medium text-slate-400">Nueva Creencia Racional:</span>{" "}
            {data.e_creencia || "No completado"}
          </p>
          <p className="ml-4 whitespace-pre-wrap">
            <span className="font-medium text-slate-400">Nuevas Emociones:</span>{" "}
            {data.e_emocional || "No completado"}
          </p>
          <p className="ml-4 whitespace-pre-wrap">
            <span className="font-medium text-slate-400">Nuevas Conductas:</span>{" "}
            {data.e_conductual || "No completado"}
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button
          onClick={() => handleShare(formattedMessage)}
          variant="whatsapp"
          className="flex-1"
        >
          <Send size={16} />
          Enviar por WhatsApp
        </Button>
        <Button onClick={handleSave} variant="primary" className="flex-1">
          <CheckCircle size={16} />
          Guardar y Finalizar
        </Button>
      </div>
    </div>
  );
};
