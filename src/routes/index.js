import models from "../models";
import ContentView from "../pages/content-view";
import medicoApi from "../api/medico";
import Dashboard from "../pages/dashboard";
import CreateView from "../pages/create-view";
import DeleteMessage from "../pages/delete-message";
import Login from "../pages/login";
import Logout from "../pages/logout";
import pacienteApi from "../api/paciente";
import medicamentoApi from "../api/medicamento";
import consultaApi from "../api/consulta";

const {medico, paciente, consulta, medicamento} = models

export const authRoutes = [
    {
        path: '/',
        element: <Dashboard/>,
        children: [
            {
                path: '/medico',
                element: <ContentView model={medico.model} fields={Object.keys(medico.model)} api={medicoApi}
                                      model_name={medico.modelName}/>,
                children: [
                    {
                        path: '/medico/add',
                        element: <CreateView model={medico.model} fields={Object.keys(medico.model)} api={medicoApi}
                                             model_name={medico.modelName}/>
                    },
                    {
                        path: '/medico/:id',
                        element: <CreateView model={medico.model} fields={Object.keys(medico.model)} api={medicoApi}
                                             model_name={medico.modelName}/>
                    },
                    {
                        path: '/medico/:id/delete',
                        element: <DeleteMessage api={medicoApi}/>
                    },
                ]
            },
            {
                path: '/paciente',
                element: <ContentView model={paciente.model} fields={Object.keys(paciente.model)} api={pacienteApi}
                                      model_name={paciente.modelName}/>,
                children: [
                    {
                        path: '/paciente/add',
                        element: <CreateView model={paciente.model} fields={Object.keys(paciente.model)} api={pacienteApi}
                                             model_name={paciente.modelName}/>
                    },
                    {
                        path: '/paciente/:id',
                        element: <CreateView model={paciente.model} fields={Object.keys(paciente.model)} api={pacienteApi}
                                             model_name={paciente.modelName}/>
                    },
                    {
                        path: '/paciente/:id/delete',
                        element: <DeleteMessage api={pacienteApi}/>
                    },
                ]
            },
            {
                path: '/consulta',
                element: <ContentView model={consulta.model} fields={Object.keys(consulta.model)}
                                                         api={consultaApi} model_name={consulta.modelName}/>,
                children: [
                    {
                        path: '/consulta/add',
                        element: <CreateView model={consulta.model} fields={Object.keys(consulta.model)} api={consultaApi}
                                             model_name={consulta.modelName}/>
                    },
                    {
                        path: '/consulta/:id',
                        element: <CreateView model={consulta.model} fields={Object.keys(consulta.model)} api={consultaApi}
                                             model_name={consulta.modelName}/>
                    },
                    {
                        path: '/consulta/:id/delete',
                        element: <DeleteMessage api={consultaApi}/>
                    },
                ]
            },
            {
                path: '/medicamento',
                element: <ContentView model={medicamento.model} fields={Object.keys(medicamento.model)}
                                      api={medicamentoApi} model_name={medicamento.modelName}/>,
                children: [
                    {
                        path: '/medicamento/add',
                        element: <CreateView model={medicamento.model} fields={Object.keys(medicamento.model)} api={medicamentoApi}
                                             model_name={medicamento.modelName}/>
                    },
                    {
                        path: '/medicamento/:id',
                        element: <CreateView model={medicamento.model} fields={Object.keys(medicamento.model)} api={medicamentoApi}
                                             model_name={medicamento.modelName}/>
                    },
                    {
                        path: '/medicamento/:id/delete',
                        element: <DeleteMessage api={medicamentoApi}/>
                    },
                ]
            },

        ]
    }
]

export const publicRoutes = [
    {path: "/login", element: <Login/>},
    {path: '/logout', element: <Logout/>}

]