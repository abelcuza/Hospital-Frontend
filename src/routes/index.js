import TableView from "../pages/table-view";
import MedicoModel, {medicoFields} from "../models/medico";
import PacienteModel from "../models/paciente";
import MedicamentoModel from "../models/medicamento";
import ConsultaModel from "../models/consulta";
import Home from "../pages/home";
import medicoApi from "../api/medico";

export const authRoutes = [
    {path: '/', page: <Home/>},
    {path: '/medico', page: <TableView model={MedicoModel} fields={medicoFields} api={medicoApi}/>},
    {path: '/paciente', page: <TableView model={PacienteModel}/>},
    {path: '/consulta', page: <TableView model={ConsultaModel}/>},
    {path: '/medicamento', page: <TableView model={MedicamentoModel}/>}
]