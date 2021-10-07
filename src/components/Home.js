import React, { Component } from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title='Model S'
                description="Order Online For Touchless Delivery"
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroungImg='model-s.jpg'
            />

            <Section
                title='Model Y'
                description="Order Online For Touchless Delivery"
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroungImg='model-y.jpg'
            />

            <Section
                title='Model 3'
                description="Order Online For Touchless Delivery"
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroungImg='model-3.jpg'
            />

            <Section
                title='Model X'
                description="Order Online For Touchless Delivery"
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroungImg='model-x.jpg'
            />
            <Section
                title='Solar Panel'
                description="Lowest Cost Solar Panels in America"
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroungImg='solar-panel.jpg'
            />
            <Section
                title='solar Roof'
                description="Produce Clean Energy From Your Roof"
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
                backgroungImg='solar-roof.jpg'
            />
            <Section
                title='Accessories'
                //description= "Order Online For Touchless Delivery"
                leftBtnText='Custom Order'
                backgroungImg='accessories.jpg'
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;

`
