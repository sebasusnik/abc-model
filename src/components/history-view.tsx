import { BookOpen, PlusCircle, Send, Trash2 } from "lucide-react";
import type { FormData } from "../App";
import { Button } from "./ui/button";

type Record = {
  id: number;
} & FormData;

export const HistoryView = ({
  records,
  handleShare,
  handleDelete,
  setView,
}: {
  records: Record[];
  handleShare: (record: Record) => void;
  handleDelete: (id: string) => void;
  setView: (view: string) => void;
}) => (
  <div className="max-h-[60vh] overflow-y-auto">
    {records.length === 0 ? (
      <div className="text-center py-10">
        <BookOpen size={48} className="mx-auto text-slate-600" />
        <h3 className="mt-4 text-lg font-semibold text-slate-300">
          No hay registros
        </h3>
        <p className="text-sm text-slate-500">
          Completa tu primer registro ABC para verlo aquí.
        </p>
        <Button onClick={() => setView("form")} className="mt-6">
          <PlusCircle size={16} />
          Crear Nuevo Registro
        </Button>
      </div>
    ) : (
      <div className="space-y-4">
        {records.map((record) => (
          <div key={record.id} className="bg-slate-800/50 rounded-lg flex flex-col min-h-0">
            <div className="p-4 pb-2 flex-1 overflow-hidden">
              <p className="text-xs text-slate-400 mb-3">
                {new Date(record.id).toLocaleString("es-ES")}
              </p>
              <div className="space-y-4 text-sm text-slate-300 max-h-[40vh] overflow-y-auto">
                {/* Step A */}
                <div>
                  <p className="font-semibold text-indigo-400 mb-1">A) Acontecimiento Activador</p>
                  <p className="whitespace-pre-wrap text-sm bg-slate-700/30 p-2 rounded">{record.a_acontecimiento}</p>
                </div>
                
                {/* Step B */}
                <div>
                  <p className="font-semibold text-indigo-400 mb-1">B) Creencias / Pensamientos</p>
                  <p className="whitespace-pre-wrap text-sm bg-slate-700/30 p-2 rounded">{record.b_pensamientos}</p>
                </div>
                
                {/* Step C */}
                <div>
                  <p className="font-semibold text-indigo-400 mb-2">C) Consecuencias</p>
                  <div className="space-y-2">
                    {record.c_emocional && (
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Emocionales:</p>
                        <p className="whitespace-pre-wrap text-sm bg-slate-700/30 p-2 rounded">{record.c_emocional}</p>
                      </div>
                    )}
                    {record.c_fisiologico && (
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Fisiológicas:</p>
                        <p className="whitespace-pre-wrap text-sm bg-slate-700/30 p-2 rounded">{record.c_fisiologico}</p>
                      </div>
                    )}
                    {record.c_conductual && (
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Conductuales:</p>
                        <p className="whitespace-pre-wrap text-sm bg-slate-700/30 p-2 rounded">{record.c_conductual}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Step D */}
                {record.d_debate && (
                  <div>
                    <p className="font-semibold text-indigo-400 mb-1">D) Debate de Pensamientos</p>
                    <p className="whitespace-pre-wrap text-sm bg-slate-700/30 p-2 rounded">{record.d_debate}</p>
                  </div>
                )}
                
                {/* Step E */}
                {(record.e_creencia || record.e_emocional || record.e_conductual) && (
                  <div>
                    <p className="font-semibold text-indigo-400 mb-2">E) Nuevos Efectos</p>
                    <div className="space-y-2">
                      {record.e_creencia && (
                        <div>
                          <p className="text-xs text-slate-400 font-medium">Nueva Creencia:</p>
                          <p className="whitespace-pre-wrap text-sm bg-slate-700/30 p-2 rounded">{record.e_creencia}</p>
                        </div>
                      )}
                      {record.e_emocional && (
                        <div>
                          <p className="text-xs text-slate-400 font-medium">Nuevas Emociones:</p>
                          <p className="whitespace-pre-wrap text-sm bg-slate-700/30 p-2 rounded">{record.e_emocional}</p>
                        </div>
                      )}
                      {record.e_conductual && (
                        <div>
                          <p className="text-xs text-slate-400 font-medium">Nuevas Conductas:</p>
                          <p className="whitespace-pre-wrap text-sm bg-slate-700/30 p-2 rounded">{record.e_conductual}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 pt-2 mt-auto border-t border-slate-700/50 bg-slate-800/30 flex-shrink-0">
              <div className="flex gap-2">
                <Button
                  onClick={() => handleShare(record)}
                  variant="whatsapp"
                  className="text-xs px-2 py-1 flex-1"
                >
                  <Send size={14} />
                  Compartir
                </Button>
                <Button
                  onClick={() => handleDelete(record.id.toString())}
                  variant="danger"
                  className="text-xs px-2 py-1 flex-1"
                >
                  <Trash2 size={14} />
                  Eliminar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
