import getApi from "./base/get-api";

const {REACT_APP_BACKEND_API} = process.env;
const endpoint = `${REACT_APP_BACKEND_API}/medicos/`;

const medicoApi = {
    ...getApi(endpoint)
}

export default medicoApi