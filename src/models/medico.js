export const medicoFields = ['nombre', 'apellidos', 'ci', 'email', 'direccion', 'categoria', 'especialidad', 'telefono']

class MedicoModel {
    constructor(nombre, apellidos, ci, email = "", direccion = "", categoria = "", especialidad = "", telefono = "", ...args) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.ci = ci
        this.email = email
        this.direccion = direccion
        this.categoria = categoria
        this.especialidad = especialidad
        this.telefono = telefono
    }
    values = () => ([this.nombre, this.apellidos, this.ci, this.email, this.direccion, this.categoria, this.especialidad, this.telefono])
    keys = () => (medicoFields)
}

export default MedicoModel;


