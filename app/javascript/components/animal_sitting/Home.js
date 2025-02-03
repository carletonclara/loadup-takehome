import React from "react"
import { Typography } from 'antd';
import PageHeader from "./PageHeader";

const PriceCard = ({cost}) => {
    return(
        <>
            <PageHeader />
            <Typography.Title level={1}>
                LoadUp Animal Sitting
            </Typography.Title>
        </>
    )
}

export default PriceCard
