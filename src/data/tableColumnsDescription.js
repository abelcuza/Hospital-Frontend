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