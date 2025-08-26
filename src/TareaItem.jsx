import { TrashIcon } from "@heroicons/react/24/solid";

export default function TareaItem ({ tarea, toggleCompletada, eliminarTarea}) {

    return (
        <div className="flex items-center gap-3 justify-between border-b border-gray-300 p-3 shadow-sm rounded">
            <span className={tarea.completed ? 'line-through': 'text-gray-400'}>{tarea.text}</span>
            <input type="checkbox" className="w-4 h-4" checked={tarea.completed} onChange={() => toggleCompletada(tarea.id)} />
            <button>
                <TrashIcon className="w-5 h-5 text-red-500" onClick={() => eliminarTarea(tarea.id)}/>
            </button>
        </div>

        


        
        
    );
}