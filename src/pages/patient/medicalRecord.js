import {useEffect, useState} from "react";
import {Col, Row, Space, Typography} from "antd";
import {Center} from "@chakra-ui/react";
import axios from "axios";
import {useLoaderData, useOutletContext} from "react-router-dom";
import DescriptionCard from "./medicalRecordCards/DescriptionCard";
import PrescriptionAndInspectionCard from "./medicalRecordCards/PrescriptionAndInspectionCard";
import DiagnoseCard from "./medicalRecordCards/DiagnoseCard";
import './personInfo.css'

const { Title, Paragraph, Text } = Typography;

export function medicalRecordLoader({params}){
    const medicalRecordID = params.medicalRecordID;

    return { medicalRecordID };

}

function MedicalRecord(props){

    // const {medicalRecordID} = useLoaderData();
    const [medicalRecordID, setMedicalRecordID] = useState(props.medicalRecordID);
    const [medicalRecord, setMedicalRecord] = useState(null);
    const [loading, setLoading] = useState(true);

    const [patientID, setPatientID] = useOutletContext();

    useEffect(() => {
        const getMedicalRecord = async () => {
            try {
                if (medicalRecordID === -1){
                    setLoading(true);
                    return;
                }

                let customHeaders = {
                    token: localStorage.getItem('userToken')
                }

                const response = await axios.post('/treatment/getHistoryRecord/single/', {
                    recordID: medicalRecordID,
                    patientID: patientID
                }, {
                    headers: customHeaders
                });
                if (response.status === 200) {
                    setMedicalRecord(response.data.data.record);
                    console.log(response.data.data.record)
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getMedicalRecord();
    }, []);


    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : (
                <div style={{'marginTop': '3vh'}}>
                    <Row>
                        <Col span={3} />
                        <Col span={18}>
                            <Space direction='vertical'>
                                <Title level={1}>
                                    诊疗记录 #{props.medicalRecordID}
                                </Title>
                                <Text style={{'fontSize': '18px'}} strong>
                                    {medicalRecord.departmentName},{medicalRecord.doctorName}
                                </Text>
                                <Text style={{'fontSize': '18px'}} strong>
                                    {medicalRecord.date}, {medicalRecord.time === 0 ? '上午' : '下午'}
                                </Text>
                                <Center>
                                    <Space direction='vertical' size='medium' style={{'width': '50vw'}}>
                                        <DescriptionCard description={medicalRecord.description} />
                                        <PrescriptionAndInspectionCard
                                            prescriptionList={medicalRecord.prescriptionList}
                                            inspectionList={medicalRecord.inspectionList}
                                        />
                                        <DiagnoseCard diagnose={medicalRecord.diagnose}/>
                                    </Space>
                                </Center>
                            </Space>
                        </Col>
                        <Col span={3} />
                    </Row>
                </div>
            )}
        </div>
    )
}

export default MedicalRecord;
