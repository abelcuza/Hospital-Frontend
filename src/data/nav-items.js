import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicationIcon from '@mui/icons-material/Medication';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';

const navItems = [
    {text: "Home", icon: <HomeIcon/>, url: '/'},
    {text: "Pacientes", icon: <AccountBoxIcon/>, url: '/paciente'},
    {text: "Medicos", icon: <LocalHospitalIcon/>, url: '/medico'},
    {text: "Consultas", icon: <AssignmentIcon/>, url: '/consulta'},
    {text: "Medicamentos", icon: <MedicationIcon/>, url: '/medicamento'},
    {text: "Inventario", icon: <InventoryIcon/>, url: '/inventario'},
]

export default navItems