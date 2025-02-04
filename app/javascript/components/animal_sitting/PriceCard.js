import React from "react"
import { Card } from 'antd';

const PriceCard = ({cost}) => {
    return(
        <>
        <Card size="small">
            <p>Total Cost:</p>
            <p>${cost}</p>
        </Card>
        </>
    )
}

export default PriceCard
