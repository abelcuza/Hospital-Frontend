import TableView from "../pages/table-view";
import MedicoModel from "../models/medico";
import PacienteModel from "../models/paciente";
import MedicamentoModel from "../models/medicamento";
import ConsultaModel from "../models/consulta";
import Home from "../pages/home";

export const authRoutes = [
    {path: '/', page: <Home/>},
    {path: '/medico', page: <TableView model={MedicoModel}/>},
    {path: '/paciente', page: <TableView model={PacienteModel}/>},
    {path: '/consulta', page: <TableView model={ConsultaModel}/>},
    {path: '/medicamento', page: <TableView model={MedicamentoModel}/>}
]