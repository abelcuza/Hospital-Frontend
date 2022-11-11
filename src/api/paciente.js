import getApi from "./base/get-api";

const {REACT_APP_BACKEND_API} = process.env;
const endpoint = `${REACT_APP_BACKEND_API}/pacientes/`;

const pacienteApi = (id="")=> ({
    ...getApi(endpoint, id)
})

export default pacienteApi