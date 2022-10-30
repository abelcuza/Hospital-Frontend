const tableColumnsDescription = {
    nombre: {
        id: 'nombre',
        label: 'Nombre',
        minWidth: 170
    },
    apellidos: {
        id: 'apellidos',
        label: 'Apellidos',
        minWidth: 170
    },
    ci: {
        id: 'ci',
        label: 'CI',
        minWidth: 170
    },
    direccion: {
        id: 'direccion',
        label: 'Dirección',
        minWidth: 170
    },
    email: {
        id: 'email',
        label: 'Email',
        minWidth: 170
    },
    especialidad: {
        id: 'especialidad',
        label: 'Especialidad',
        minWidth: 170
    },
    telefono: {
        id: 'telefono',
        label: 'Teléfono',
        minWidth: 170
    },
    categoria: {
        id: 'categoria',
        label: 'Categoría',
        minWidth: 170
    },
    population: {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    size: {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    density: {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
};

export default tableColumnsDescription