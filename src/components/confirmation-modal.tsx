import { AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
      <div className="bg-slate-800 rounded-lg shadow-xl w-full max-w-sm border border-slate-700">
        <div className="p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-red-900/50 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="text-red-400" size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="text-sm text-slate-400 mt-2">{children}</div>
        </div>
        <div className="bg-slate-900/50 px-6 py-4 flex justify-end gap-3 rounded-b-lg">
          <Button onClick={onClose} variant="secondary">
            Cancelar
          </Button>
          <Button onClick={onConfirm} variant="danger">
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
};
