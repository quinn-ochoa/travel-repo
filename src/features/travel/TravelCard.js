import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from 'reactstrap';
// import { Link } from 'react-router-dom';

const TravelCard = ({ destination }) => {
    const { image, name, description } = destination;
    return (
        // <Link to={`${id}`}>
        <Card>
            <CardImg
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
            <CardBody className='card-body'>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
        // </Link>

    );
}

export default TravelCard;