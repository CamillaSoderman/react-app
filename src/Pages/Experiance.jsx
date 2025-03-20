

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Cv from '../assets/Experiance.json'

export default function Experiance(){

    return (
        <>
        <h1>Experiance</h1>
        <CardGroup>
            {Cv.experiance.map( (experiance) => {
              return (
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/200/300" />
                <Card.Body>
                  <Card.Title>{experiance.Company}</Card.Title>
                  <Card.Text>{experiance.Year}</Card.Text>
                  <Card.Text>{experiance.Description}</Card.Text>
                </Card.Body>
             
              </Card>
              )
            })}
        </CardGroup>
        </>
      )
    
}