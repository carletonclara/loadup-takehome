import React from "react"
import { Card } from 'antd';

const PriceCard = ({cost}) => {
    return(
        <>
        <Card size="small" style={{ width: 300 }}>
            <p>Total Cost:</p>
            <p>${cost}</p>
        </Card>
        </>
    )
}

export default PriceCard
