import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
export default function HomeCards() {
    return (
        <div>
            <Card style={{ width: '18rem', border: '4px solid', margin: '1rem' }}>
            <Card.Img variant="top" src="https://assets.rockpapershotgun.com/images/2019/07/AMD-Ryzen-5-2600-best-budget-gaming-cpu.jpg" />
            <h6 className="mb-3 text-end" style={{margin: '0.75rem'}}>
              <span style={{backgroundColor: '#d81e1e', border: '1px solid', borderRadius: '0.5em'}}>$30000</span>
            </h6>
            <hr></hr>
            <Card.Body>
                <Card.Title>CPU Ryzen</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary"><a href="/Producto">Build PC</a></Button>
            </Card.Body>
            </Card>       
        </div>
    )
}
