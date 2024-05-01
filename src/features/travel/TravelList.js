import { DESTINATIONS } from "../../app/shared/DESTINATIONS";
import { Col, Row } from "reactstrap";
import TravelCard from "./TravelCard";
// import { selectAllDestinations } from './travelSlice';

const TravelList = () => {
  // const destinations = useSelector (selectAllDestinations);
  // console.log('campsites:', campsites);

  return (
    <Row className="ms-auto">
      {DESTINATIONS.map((destination) => {
        return (
          <Col md="3" className="m-4" key={destination.id}>
            <TravelCard destination={destination} />
          </Col>
        );
      })}
    </Row>
  );
};

export default TravelList;
