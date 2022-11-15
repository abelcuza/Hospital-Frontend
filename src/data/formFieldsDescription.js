const formFieldsDescription = {
    nombre: {
        id: 'nombre',
        label: 'Nombre',
        required: true,
        type: 'text'
    },
    apellidos: {
        id: 'apellidos',
        label: 'Apellidos',
        required: true,
        type: 'text'
    },
    ci: {
        id: 'ci',
        label: 'CI',
        required: true,
        type: 'text'
    },
    direccion: {
        id: 'direccion',
        label: 'Dirección',
        required: true,
        type: 'text'
    },
    email: {
        id: 'email',
        label: 'Email',
        required: true,
        type: 'text'
    },
    especialidad: {
        id: 'especialidad',
        label: 'Especialidad',
        required: true,
        type: 'select',
        values: [
            {
                id: "mgi",
                name:"Médico General Integral"
            },
            {
                id: "ginecologo",
                name:"Ginecologo"
            },
            {
                id: "geriatra",
                name:"Geriatra"
            },
            {
                id: "pediatra",
                name:"Pediatra"
            },
            {
                id: "imagenologo",
                name:"Imagenólogo"
            },
        ]
    },
    telefono: {
        id: 'telefono',
        label: 'Teléfono',
        required: true,
        type: 'text'
    },
    grado_academico: {
        id: 'grado_academico',
        label: 'Grado Académico',
        required: true,
        type: 'select',
        values: [
            {
                id: "universitario",
                name:"Universitario"
            },
            {
                id: "master",
                name:"Master en Ciencias"
            },
            {
                id: "doctor",
                name:"Doctor en Ciencias"
            }
        ]
    },
    municipio: {
        id: 'municipio',
        label: 'Municipio',
        required: true,
        type: 'text'
    },
    provincia: {
        id: 'provincia',
        label: 'Provincia',
        required: true,
        type: 'text'
    },
    tipo: {
        id: 'tipo',
        label: 'Tipo',
        required: true,
        type: 'select',
        values: [
            {
                id: "analgesico",
                name:"Analgésico"
            },
            {
                id: "antiinflamatorio",
                name:"Antiinflamatorio"
            },
            {
                id: "antiacido",
                name:"Antiácido"
            },
            {
                id: "antipiretico",
                name:"Antipirético"
            },
            {
                id: "antiinfeccioso",
                name:"Antiinfeccioso"
            },
            {
                id: "antitusivo_mucolitico",
                name:"Antitusivo y mucolítico"
            },
            {
                id: "antialergico",
                name:"Antialérgico"
            },
            {
                id: "antidiarreico_laxante",
                name:"Antidiarreico y Laxante"
            },
        ]
    },
    nombre_generico: {
        id: 'nombre_generico',
        label: 'Nombre Genérico',
        required: true,
        type: 'text'
    },
    nombre_comercial: {
        id: 'nombre_comercial',
        label: 'Nombre Comercial',
        required: true,
        type: 'text'
    },
    medico: {
        id: 'medico',
        label: 'Médico',
        required: true,
        type: 'model'
    },
    paciente: {
        id: 'paciente',
        label: 'Paciente',
        required: true,
        type: 'model'
    },
    fecha: {
        id: 'fecha',
        label: 'Fecha',
        required: true,
        type: 'date'
    },
    medicamentos: {
        id: 'medicamentos',
        label: 'Medicamentos',
        required: true,
        type: 'list'
    },
    diagnostico: {
        id: 'diagnostico',
        label: 'Diagnóstico',
        required: true,
        type: 'text'
    },
    medicamento: {
        id: 'medicamento',
        label: 'Medicamento',
        required: true,
        type: 'model'
    },
    cantidad: {
        id: 'cantidad',
        label: 'Cantidad',
        required: true,
        type: 'text'
    },
}

export default formFieldsDescription