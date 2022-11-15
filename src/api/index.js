import medicoApi from "./medico";
import pacienteApi from "./paciente";
import consultaApi from "./consulta";
import inventarioApi from "./inventario";
import medicamentoApi from "./medicamento";

const api = {
    medico: medicoApi,
    medicamento: medicamentoApi,
    paciente: pacienteApi,
    consulta: consultaApi,
    inventario: inventarioApi
}

export default api