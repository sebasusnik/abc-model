import { ArrowLeft, BookOpen, Home } from "lucide-react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./components/card";
import { ConfirmationModal } from "./components/confirmation-modal";
import { HistoryView } from "./components/history-view";
import { ProgressBar } from "./components/progress-bar";
import {
  ReviewStep,
  StepA,
  StepB,
  StepC,
  StepD,
  StepE,
} from "./components/steps";
import { Button } from "./components/ui/button";

export interface FormData {
  a_acontecimiento: string;
  b_pensamientos: string;
  c_emocional: string;
  c_fisiologico: string;
  c_conductual: string;
  d_debate: string;
  e_creencia: string;
  e_emocional: string;
  e_conductual: string;
}

interface Record extends FormData {
  id: number;
}

const initialFormData: FormData = {
  a_acontecimiento: "",
  b_pensamientos: "",
  c_emocional: "",
  c_fisiologico: "",
  c_conductual: "",
  d_debate: "",
  e_creencia: "",
  e_emocional: "",
  e_conductual: "",
};

export default function App() {
  const [view, setView] = useState("form");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [records, setRecords] = useState<Record[]>([]);
  const [recordToDelete, setRecordToDelete] = useState<number | null>(null);
  const [editingRecord, setEditingRecord] = useState<Record | null>(null);

  useEffect(() => {
    try {
      const savedRecords = localStorage.getItem("cbt-records");
      if (savedRecords) setRecords(JSON.parse(savedRecords));
    } catch (error) {
      console.error("Error al cargar los registros:", error);
      setRecords([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cbt-records", JSON.stringify(records));
    } catch (error) {
      console.error("Error al guardar los registros:", error);
    }
  }, [records]);

  // Auto-focus first field when step changes
  useEffect(() => {
    const firstFieldMap: { [key: number]: string } = {
      1: "a_acontecimiento",
      2: "b_pensamientos",
      3: "c_emocional",
      4: "d_debate",
      5: "e_creencia",
    };

    const firstField = firstFieldMap[step];
    if (firstField) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        const element = document.querySelector(
          `[name="${firstField}"]`
        ) as HTMLTextAreaElement;
        if (element) {
          // Scroll to element smoothly only on desktop
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          if (!isMobile) {
            element.scrollIntoView({ 
              behavior: "smooth", 
              block: "center" 
            });
          } else {
            // On mobile, just scroll to top without animation
            window.scrollTo(0, 0);
          }
          
          // Focus after a short delay to ensure scroll completes
          setTimeout(() => {
            element.focus();
          }, isMobile ? 100 : 300);
        }
      });
    }
  }, [step]);

  const totalSteps = 6;
  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // CORRECCIÓN: La función ahora extrae 'name' y 'value' de e.target correctamente.
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      // Get the current field name
      const currentField = e.currentTarget.name;

      // Define the field order for each step
      const fieldOrder: { [key: number]: string[] } = {
        1: ["a_acontecimiento"],
        2: ["b_pensamientos"],
        3: ["c_emocional", "c_fisiologico", "c_conductual"],
        4: ["d_debate"],
        5: ["e_creencia", "e_emocional", "e_conductual"],
        6: [], // Review step has no fields
      };

      const currentStepFields = fieldOrder[step];
      const currentFieldIndex = currentStepFields.indexOf(currentField);

      // If there's a next field in the current step, focus it
      if (currentFieldIndex < currentStepFields.length - 1) {
        const nextField = currentStepFields[currentFieldIndex + 1];
        const nextElement = document.querySelector(
          `[name="${nextField}"]`
        ) as HTMLTextAreaElement;
        if (nextElement) {
          nextElement.focus();
          return;
        }
      }

      // If this is the last field in the step, move to next step
      if (currentFieldIndex === currentStepFields.length - 1) {
        if (step < totalSteps) {
          nextStep();
        }
      }
    }
  };

  const handleShare = (recordOrMessage: Record | string) => {
    const message =
      typeof recordOrMessage === "string"
        ? recordOrMessage
        : `Hola! Te comparto mi registro ABC del ${new Date(recordOrMessage.id).toLocaleDateString("es-ES")}:\n\n*A) Acontecimiento Activador:*\n${recordOrMessage.a_acontecimiento}\n\n*B) Creencias / Pensamientos:*\n${recordOrMessage.b_pensamientos}\n\n*C) Consecuencias:*\n  - *Emocionales:* ${recordOrMessage.c_emocional}\n  - *Fisiológicas:* ${recordOrMessage.c_fisiologico}\n  - *Conductuales:* ${recordOrMessage.c_conductual}${recordOrMessage.d_debate ? `\n\n*D) Debate de Pensamientos:*\n${recordOrMessage.d_debate}` : ""}${recordOrMessage.e_creencia || recordOrMessage.e_emocional || recordOrMessage.e_conductual ? `\n\n*E) Nuevos Efectos:*\n  - *Nueva Creencia:* ${recordOrMessage.e_creencia || "No especificado"}\n  - *Nuevas Emociones:* ${recordOrMessage.e_emocional || "No especificado"}\n  - *Nuevas Conductas:* ${recordOrMessage.e_conductual || "No especificado"}` : ""}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSave = () => {
    if (editingRecord) {
      // Update existing record
      setRecords((prev) =>
        prev.map((record) =>
          record.id === editingRecord.id
            ? { ...formData, id: editingRecord.id }
            : record
        )
      );
      setEditingRecord(null);
    } else {
      // Create new record
      setRecords((prev) => [{ ...formData, id: Date.now() }, ...prev]);
    }
    setFormData(initialFormData);
    setStep(1);
    setView("history");
  };

  const handleEdit = (record: Record) => {
    setFormData(record);
    setEditingRecord(record);
    setStep(1);
    setView("form");
  };

  const handleDeleteRequest = (id: string) => {
    setRecordToDelete(Number(id));
  };

  const confirmDelete = () => {
    if (recordToDelete) {
      setRecords((prev) =>
        prev.filter((record) => record.id !== recordToDelete)
      );
      setRecordToDelete(null);
    }
  };

  const cancelDelete = () => {
    setRecordToDelete(null);
  };

  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return formData.a_acontecimiento.trim() === "";
      case 2:
        return formData.b_pensamientos.trim() === "";
      case 3:
        return (
          formData.c_emocional.trim() === "" &&
          formData.c_fisiologico.trim() === "" &&
          formData.c_conductual.trim() === ""
        );
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepA
            data={formData}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
          />
        );
      case 2:
        return (
          <StepB
            data={formData}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
          />
        );
      case 3:
        return (
          <StepC
            data={formData}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
          />
        );
      case 4:
        return (
          <StepD
            data={formData}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
          />
        );
      case 5:
        return (
          <StepE
            data={formData}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
          />
        );
      case 6:
        return (
          <ReviewStep
            data={formData}
            handleShare={handleShare}
            handleSave={handleSave}
          />
        );
      default:
        return (
          <StepA
            data={formData}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
          />
        );
    }
  };

  return (
    <>
      <div className="bg-slate-950 text-white min-h-screen w-full flex flex-col items-center justify-start sm:justify-center p-0 sm:p-4 font-sans">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-slate-50">
                {view === "form" 
                  ? editingRecord 
                    ? "Editar Registro" 
                    : "Registro ABCDE" 
                  : "Historial"}
              </h1>
              <Button
                onClick={() => {
                  setView((v) => (v === "form" ? "history" : "form"));
                  setStep(1);
                  setFormData(initialFormData);
                  setEditingRecord(null);
                }}
                variant="secondary"
              >
                {view === "form" ? <BookOpen size={16} /> : <Home size={16} />}
                {view === "form" ? "Ver Historial" : "Ir a Inicio"}
              </Button>
            </div>
            {view === "form" && (
              <div>
                <ProgressBar currentStep={step} totalSteps={totalSteps} />
              </div>
            )}
          </CardHeader>
          <CardContent>
            {view === "form" ? (
              renderStep()
            ) : (
              <HistoryView
                records={records}
                handleShare={handleShare}
                handleDelete={handleDeleteRequest}
                handleEdit={handleEdit}
                setView={setView}
              />
            )}
          </CardContent>
          {view === "form" && (
            <CardFooter className="flex justify-between flex-row-reverse">
              {step < totalSteps ? (
                <Button onClick={nextStep} disabled={isNextDisabled()}>
                  Siguiente
                </Button>
              ) : (
                <div />
              )}
              {step > 1 ? (
                <Button onClick={prevStep} variant="secondary">
                  <ArrowLeft size={16} />
                  Anterior
                </Button>
              ) : (
                <div />
              )}
            </CardFooter>
          )}
        </Card>
        <footer className="text-center mt-6 text-xs text-slate-600 max-w-md mx-auto px-4 pb-4">
          <p>
            Tus datos se guardan de forma segura en este dispositivo y no se
            comparten con nadie a menos que tú decidas hacerlo.
          </p>
          <p className="mt-1">
            Esta es una herramienta de apoyo y no reemplaza la terapia
            profesional.
          </p>
        </footer>
      </div>
      <ConfirmationModal
        isOpen={!!recordToDelete}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        title="¿Eliminar Registro?"
      >
        <p>
          Esta acción es permanente y no se puede deshacer. ¿Estás seguro de que
          quieres eliminar este registro?
        </p>
      </ConfirmationModal>
    </>
  );
}
