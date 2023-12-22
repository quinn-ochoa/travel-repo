import { Container, Row, Col, Button } from 'reactstrap';
// import { Link } from 'react-router-dom'; 

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h3>Get in touch!</h3>
                        <p>Find out how our products can help you be more productive.</p>
                        <Button
                            style={{ color: 'white', backgroundColor: '#43A271' }} class="rounded">
                            Contact us
                        </Button>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <p><i className='fa fa-phone' /> 1-206-555-1234
                        <br />
                        <i className='fa fa-envelope-o' /> hello@reallygreatsite.com</p>

                    </Col>
                    <Col sm='4' className='text-center'>
                        <p>Social</p>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
