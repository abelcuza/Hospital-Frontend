import medicoApi from "./medico";
import pacienteApi from "./paciente";
import consultaApi from "./consulta";

const api = {
    medico: medicoApi,
    medicamento: medicoApi,
    paciente: pacienteApi,
    consulta: consultaApi
}

export default api