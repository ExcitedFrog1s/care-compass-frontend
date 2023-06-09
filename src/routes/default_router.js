import {
    createBrowserRouter,
} from "react-router-dom";

// homepage
import Homepage from "../pages/landing/homepage.js";

// login and register
import LoginAndRegister from "../pages/user/loginAndRegister";
import FindPassword from "../pages/user/findPassword";

// manage
import Manage from "../pages/manage/left.js";
import Info from "../pages/manage/info.js";
import DoctorSchedule from "../pages/manage/doctorSchedule.js";
import DoctorLeave from "../pages/manage/doctorLeave.js";
import Department from "../pages/manage/department.js";
import Medicine from "../pages/manage/medicine.js";
import Portal from "../pages/manage/Portal";
import EditPortal from "../pages/manage/EditPortal";
import Board from "../pages/manage/board";
import DoctorAccount from "../pages/manage/doctorAccount"

// patient
import MakeAppointment from "../pages/patient/makeAppointment";
import Patient from "../pages/patient/patient";
import SelectDepartment from "../pages/patient/steps/selectDepartment";
import SelectDoctor from "../pages/patient/steps/selectDoctor";
import PayBill, {singleBillLoader} from "../pages/patient/payBill";
import MyAppointments from "../pages/patient/myAppointments";
import MyMedicalRecords from "../pages/patient/myMedicalRecords";
import MyBills from "../pages/patient/myBills";


// doctor
import DoctorMain from "../pages/doctorSystem/doctorMain.js";
import PatientAppointment from "../pages/doctorSystem/patientAppointment.js";
import CheckSchedule from "../pages/doctorSystem/checkSchedule.js";
import CheckProgress from "../pages/doctorSystem/checkProgress.js";
import ApplyVacation from "../pages/doctorSystem/applyVacation.js";
import PicturesWall  from "../pages/doctorSystem/pictureWall.js";
import VisitInterface from "../pages/doctorSystem/visitInterface.js";
import LeaveDetail from "../pages/doctorSystem/leaveDetail.js";
import MedicalRecord, {medicalRecordLoader} from "../pages/patient/medicalRecord";
import PersonInfo from "../pages/patient/personInfo";
import EditInfo from "../pages/patient/editInfo";
import PatientHistory from "../pages/doctorSystem/patientHistory.js";
import HistoricalRecord from "../pages/doctorSystem/historicalRecord.js";
import EditPortal2 from "../pages/manage/EditPortal2.js";

const default_router = createBrowserRouter([
    {
        //临时修改主页面方便调试，记得改回
        path: '/',
        element: <Homepage />
        // element:<DoctorMain/>
    },
    {
        path: '/loginAndRegister',
        element: <LoginAndRegister />
    },
    {
        path: '/findPassword',
        element: <FindPassword />
    },
    {
        path: '/doctorPortal/:doctorID',
        element: <Portal />
    },
    {
        path: '/editDoctorPortal',
        element: <EditPortal />
    },
    {
        path: '/editPortal',
        element:<EditPortal2></EditPortal2>
    },
    {
        path: '/manage',
        element: <Manage />,
        children: [
            {
                path: 'info',
                element: <Info />
            },
            {
                path: 'doctorSchedule',
                element: <DoctorSchedule />
            },
            {
                path: 'doctorLeave',
                element: <DoctorLeave />
            },
            {
                path: 'department',
                element: <Department />
            },
            {
                path: 'medicine',
                element: <Medicine />
            },
            {
                path: 'board',
                element: <Board />
            },
            {
                path: 'doctorAccount',
                element: <DoctorAccount />
            }
        ]
    },
    {
        path: '/patient',
        element: <Patient />,
        children: [
            {
                path: 'makeAppointment',
                element: <MakeAppointment />,
            },
            {
                path: 'payBill/:billID',
                element: <PayBill />,
                loader: singleBillLoader
            },
            {
                path: 'myBills',
                element: <MyBills />
            },
            {
                path: 'myAppointments',
                element: <MyAppointments />
            },
            {
                path: 'myMedicalRecords',
                element: <MyMedicalRecords />
            },
            {
                path: 'medicalRecord/:medicalRecordID',
                element: <MedicalRecord />,
                loader: medicalRecordLoader
            },
            {
                path: 'personInfo',
                element: <PersonInfo />
            },
            {
                path: 'editInfo',
                element: <EditInfo />
            }
        ]
    },
    {
        path:'/doctorMain',
        element:<DoctorMain/>,
        children:[
            {
                path:'patientAppointment',
                element:<PatientAppointment/>
            },
            {
                path:'checkSchedule',
                element:<CheckSchedule/>
            },
            {
                path:'applyVacation',
                element:<ApplyVacation/>,
            },
            {
                path:'checkProgress',
                element:<CheckProgress/>
            },
            {
                path:'visitInterface',
                element:<VisitInterface/>
            },
            {
                path:'leaveDetail',
                element:<LeaveDetail/>
            },
            {
                path:'patientHistory',
                element:<PatientHistory/>
            },
            {
                path:'historicalRecord',
                element:<HistoricalRecord/>
            }
        ]
    },

])

export default default_router;


