import React from "react"
import { Image, Typography, Row } from 'antd';
import PageHeader from "./PageHeader";
import snowball from "../../../assets/images/snowball.png"

const Home = ({cost}) => {
    return(
        <>
            <PageHeader />
            <Row justify="center">
                <Typography.Title level={1}>
                    LoadUp Animal Sitting
                </Typography.Title>
            </Row>
            <Row justify="center" span={4}>
                <Image
                    width={200}
                    src={snowball}
                    alt="black_cat"
                />
            </Row>
        </>
    )
}

export default Home
