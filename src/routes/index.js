import ContentView from "../pages/content-view";
import MedicoModel, {medicoFields, medicoModelName} from "../models/medico";
import PacienteModel from "../models/paciente";
import MedicamentoModel from "../models/medicamento";
import ConsultaModel from "../models/consulta";
import medicoApi from "../api/medico";
import Dashboard from "../pages/dashboard";
import CreateView from "../pages/create-view";
import DeleteMessage from "../pages/delete-message";
import Login from "../pages/login";
import Logout from "../pages/logout";

export const authRoutes = [
    {
        path: '/',
        element: <Dashboard/>,
        children: [
            {
                path: '/medico',
                element: <ContentView model={MedicoModel} fields={medicoFields} api={medicoApi}
                                      model_name={medicoModelName}/>,
                children: [
                    {
                        path: '/medico/add',
                        element: <CreateView model={MedicoModel} fields={medicoFields} api={medicoApi}
                                             model_name={medicoModelName}/>
                    },
                    {
                        path: '/medico/:id',
                        element: <CreateView model={MedicoModel} fields={medicoFields} api={medicoApi}
                                             model_name={medicoModelName}/>
                    },
                    {
                        path: '/medico/:id/delete',
                        element: <DeleteMessage api={medicoApi}/>
                    },
                ]
            },
            {path: '/paciente', element: <ContentView model={PacienteModel}/>},
            {path: '/consulta', element: <ContentView model={ConsultaModel}/>},
            {path: '/medicamento', element: <ContentView model={MedicamentoModel}/>},

        ]
    }
]

export const publicRoutes = [
    {path: "/login", element: <Login/>},
    {path: '/logout', element: <Logout/>}

]