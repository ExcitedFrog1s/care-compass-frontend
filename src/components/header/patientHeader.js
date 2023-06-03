import {Col, Menu, message, Popconfirm, Row} from "antd";
import {Link as ChakraLink} from "@chakra-ui/react";
import {
    Avatar, Button,
    Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent, PopoverHeader,
    PopoverTrigger,
    Text
} from "@chakra-ui/react";
import * as React from "react";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopMedical, faUserNurse} from "@fortawesome/free-solid-svg-icons";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const NavLink = ({ children, href }) => (
    <Link
        to={href}
    >
        <span
            style={{
                'width': '100px',
                'margin': '20px',
                'fontSize': '16px',
                'color': 'white'
            }}
        >
            {children}
        </span>
    </Link>
);

function PatientHeader(){
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn]=React.useState(1);
    const [user, setUser]=React.useState({uname:''});

    React.useEffect(() => {
        console.log(localStorage.getItem("userToken"))
        console.log(localStorage)
        if (localStorage.getItem("userToken") != null) {
            // 已经登录
            console.log(localStorage.getItem('userToken'))
            console.log(localStorage)
            setIsLoggedIn(1)

            var nowuser = {
                username:localStorage.getItem("username"),
                u_rid:localStorage.getItem('userID'),
                utype:localStorage.getItem('userType')

            }
            setUser(nowuser)
            console.log(user)
            // var config = {
            //     method: 'post',
            //     url: '/personInfo/',
            //     headers: {
            //         token: localStorage.getItem("userToken")
            //     }
            // };

            // axios(config)
            //     .then(res => {
            //         console.log(res)
            //         console.log('res')
                    
            //         SetUser(res.data.data)
            //         console.log('setuser')
            //         console.log(res.data.data);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        }

    }, [])

    const confirm = (e) => {
        setIsLoggedIn(0);
        localStorage.removeItem("userToken")
        localStorage.removeItem("userType")
        localStorage.removeItem("username")
        // localStorage.setItem("userToken", null);
        // localStorage.setItem("userType", null);
        // localStorage.setItem("username", null);
        message.success('退出成功');
        setTimeout(function () {
            navigate("/");
        }, 1000);
    };

    let userButton = (<Button w='220px' mt='8px' onClick={()=>{
        navigate('/patient/myBills')
    }}>我的账单</Button>)

    let depracatedButtons = (
        <>
            <Row>
                <Button w='220px' onClick={()=>{
                    navigate('/patient/myMedicalRecords')
                }}>
                    诊疗记录</Button>
            </Row>
            <Row>
                <Button w='220px' mt='8px' onClick={()=>{
                    navigate('/patient/myBills')
                }}>
                    我的账单</Button>
            </Row>
        </>
    )


    const patientMenuItems = [
        // getItem('预约挂号', 'makeAppointment', <FontAwesomeIcon icon={faUserNurse} />),
        // getItem('我的挂号', 'myAppointment', <FontAwesomeIcon icon={faLaptopMedical} />)
        {
            name: '预约挂号',
            key: 'makeAppointment'
        },
        {
            name: '我的挂号',
            key: 'myAppointments'
        }
    ]


    return (
        <div
            style={{
                'height': '9.5vh',
                'width': '100%',
                'backgroundColor': '#1A365D'
            }}
        >
            <Row style={{'width': '100%'}}>
                <Col span='6'>
                    <img
                        src={require("../../assets/cc_icon_header2.png")}
                        style={{height:55, marginTop:9, marginLeft:40}}
                        onClick={() => {
                            navigate("/")
                        }}
                    />
                </Col>
                <Col span={12} style={{margin:'auto'}} >
                    {
                        patientMenuItems.map((item) => {
                            return (
                                <NavLink
                                    key={item.key}
                                    children={item.name} href={item.key}
                                />
                            )
                        })
                    }
                </Col>
                <Col span='5' style={{margin:'auto'}} >
                    {isLoggedIn ?
                        <Popover >
                            <PopoverTrigger>
                                <Row style={{marginLeft:'60px'}}>
                                    <Col>
                                        <Text mt='6px' color='white' size='2xl' fontWeight='550'>👏Hey , {user.username}</Text>
                                    </Col>
                                    <Col>
                                        <Avatar width='35px' ml='8px' height='35px' name={user.username}></Avatar>
                                    </Col>
                                </Row >
                            </PopoverTrigger>
                            <PopoverContent w='240px' border='blue' >
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>
                                    <Text fontSize='md' fontWeight='550' mr='20px' >Email  </Text>
                                    <Text ml='20px' mt='10px'>{user.uemail}</Text>
                                </PopoverHeader>
                                <PopoverBody>
                                    <Row>
                                        <Button w='220px' mt='8px' onClick={()=>{
                                            navigate('/patient/personInfo')
                                        }}>
                                            账户信息一览</Button>
                                        <Button w='220px' mt='8px' onClick={()=>{
                                            navigate('/patient/editInfo')
                                        }}>
                                            个人信息修改</Button>
                                    </Row>
                                    <Row>

                                        <Popconfirm
                                            placement="bottom"
                                            title="确认退出登录？"
                                            onConfirm={confirm}
                                            okText="确认"
                                            cancelText="取消"
                                        >
                                            <Button w='220px' mt='8px'>退出登录</Button>
                                        </Popconfirm>
                                    </Row>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>

                        :
                        <Button w='150px' mt='8px' onClick={()=>{
                            navigate('/loginAndRegister')
                        }} id='loginButton'
                        >登录/注册</Button>
                    }
                </Col>

            </Row>
        </div>
    )
}


export default PatientHeader;
