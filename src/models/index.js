import MedicoModel from "./medico";
import PacienteModel from "./paciente";
import MedicamentoModel from "./medicamento";
import ConsultaModel from "./consulta";
import InventarioModel from "./inventario";

const models = {
    medico: {
        model: MedicoModel,
        pk: "ci",
        modelName: "Medico",
        nameField: "nombre"
    },
    paciente: {
        model: PacienteModel,
        pk: "ci",
        modelName: "Paciente",
        nameField: "nombre"
    },
    medicamento: {
        model: MedicamentoModel,
        pk: "id",
        modelName: "Medicamento",
        nameField: "nombre_comercial"
    },
    consulta: {
        model: ConsultaModel,
        pk: "id",
        modelName: "Consulta",
        nameField: "paciente"
    },
    inventario:{
        model: InventarioModel,
        pk: "id",
        modelName: "Inventario",
        nameField: "medicamento"
    }
}

export default models