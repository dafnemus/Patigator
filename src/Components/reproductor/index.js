import React from 'react'
import ReactPlayer from 'react-player'
import { Card, Typography, Slider, Row, Col, Button} from "antd";
import {PlayCircleOutlined} from '@ant-design/icons'
import Portada from './portada/'
import 'antd/dist/antd.css';
import './styles.css'

const {Text} = Typography;

function Reproductor() {
    
    return (
        <Card className="player">
            <Row>
                <Col><Portada/></Col>
                <Col span={14}>
                    <Row className="songTitle">
                        <Col offset={2} span={20}><Text >Tom Cruise - Flightwave</Text></Col>
                    </Row>
                    <Row gutter={[8,8]} className="songControls">
                        <Col span={4}>
                            <Button  shape="circle" type="link"
                            icon={<PlayCircleOutlined className="songPlay"/>}/>
                        </Col>
                        <Col span={20}><Slider className="songBar" defaultValue={0}/></Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}

export default Reproductor;