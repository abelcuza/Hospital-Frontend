const tableColumnsDescription = {
    id: {
        id: 'id',
        label: 'ID',
        type: 'text'
    },
    nombre: {
        id: 'nombre',
        label: 'Nombre',
        minWidth: 170,
        type: 'text'

    },
    apellidos: {
        id: 'apellidos',
        label: 'Apellidos',
        minWidth: 170,
        type: 'text'

    },
    ci: {
        id: 'ci',
        label: 'CI',
        minWidth: 170,
        type: 'text'
    },
    direccion: {
        id: 'direccion',
        label: 'Dirección',
        minWidth: 170,
        type: 'text'
    },
    email: {
        id: 'email',
        label: 'Email',
        minWidth: 170,
        type: 'text'
    },
    especialidad: {
        id: 'especialidad',
        label: 'Especialidad',
        minWidth: 170,
        type: 'select',
        values: {
            mgi: "Médico General Integral",
            ginecologo: "Ginecologo",
            geriatra: "Geriatra",
            pediatra: "Pediatra",
            imagenologo: "Imagenólogo",
        }
    },
    telefono: {
        id: 'telefono',
        label: 'Teléfono',
        minWidth: 170,
        type: 'text'
    },
    grado_academico: {
        id: 'grado_academico',
        label: 'Grado Académico',
        minWidth: 170,
        type: 'select',
        values: {
            universitario: "Universitario",
            master: "Master en Ciencias",
            doctor: "Doctor en Ciencias",
        }
    },
    municipio: {
        id: 'municipio',
        label: 'Municipio',
        minWidth: 170,
        type: 'text'
    },
    provincia: {
        id: 'provincia',
        label: 'Provincia',
        minWidth: 170,
        type: 'text'
    },
    tipo: {
        id: 'tipo',
        label: 'Tipo',
        minWidth: 170,
        type: 'select',
        values: {
            analgesico: "Analgésico",
            antiinflamatorio: "Antiinflamatorio",
            antiacido: "Antiácido",
            antipiretico: "Antipirético",
            antiinfeccioso: "Antiinfeccioso",
            antantitusivo_mucoliticoiacido: "Antitusivo y mucolítico",
            antialergico: "Antialérgico",
            antidiarreico_laxante: "Antidiarreico y Laxante",
        }
    },
    nombre_generico: {
        id: 'nombre_generico',
        label: 'Nombre Genérico',
        minWidth: 170,
        type: 'text'
    },
    nombre_comercial: {
        id: 'nombre_comercial',
        label: 'Nombre Comercial',
        minWidth: 170,
        type: 'text'
    },
    medico: {
        id: 'medico',
        label: 'Médico',
        minWidth: 170,
        type: 'text'
    },
    paciente: {
        id: 'paciente',
        label: 'Paciente',
        minWidth: 170,
        type: 'text'
    },
    fecha: {
        id: 'fecha',
        label: 'Fecha',
        minWidth: 170,
        type: 'datetime'
    },
    medicamentos: {
        id: 'medicamentos',
        label: 'Medicamentos',
        minWidth: 170,
        type: 'list'
    },
    diagnostico: {
        id: 'diagnostico',
        label: 'Diagnóstico',
        minWidth: 170,
        type: 'pharagraph'
    },
};

export default tableColumnsDescription