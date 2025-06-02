import '../Style/index.css'
import Card from 'react-bootstrap/Card';
import Cv from '../assets/ExpData.json';

export default function Experiance() {
    return (
        <>
            <h1>Experience</h1>
            <div className="project-section">
                {Cv.experiance.map((experiance, idx) => (
                    <Card className="card" key={idx}>
                        <Card.Img variant="top" src="https://picsum.photos/200/300" alt="random picture" className="card-img-fixed"/>
                        <Card.Body>
                            <Card.Title>{experiance.Company}</Card.Title>
                            <Card.Text>{experiance.Year}</Card.Text>
                            <Card.Text>{experiance.Description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}
