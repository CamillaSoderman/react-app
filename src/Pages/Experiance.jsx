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
