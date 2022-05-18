import React from "react";
import { Container,
        Col,
        Row,
        Card,
        ListGroup    
    } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCoins, FaQrcode } from 'react-icons/fa';
import Wave from 'react-wavify'
import './style.css';
import image1 from '../images/green.png';
import pqreciclar from '../images/pqreciclar.png';


const MainPage = () => {

    return (
        <Container fluid>
            <Row className="textMain">
                <Card className="back">
                
                <h1 className="titleTop" >Trash<span>back</span></h1>
                <p className="textTop">Aqui seu lixo vira recompensa!</p>     
                
                </Card>
                <Col md="6" >
                <img
                className="imgPrincial"
                alt="principal"
                src={pqreciclar}
                />
                </Col>
                <Col md="5">
                <h1 className="h1Top">Por quê reciclar?</h1>
                <p className="p">A reciclagem é o processo de reaproveitamento de materiais descartados. Seu objetivo é reintroduzi-los na cadeia produtiva a fim de que ainda gerem valor e sejam reutilizados, reduzindo-se a produção de lixo, aumentando a preservação dos recursos naturais e melhorando a qualidade de vida das pessoas. É considerada uma das alternativas mais eficientes para tratar os resíduos sólidos, tanto do ponto de vista ambiental quanto social, e está diretamente inserida no contexto da Economia Circular.
                </p>
                <h2 className="h2Top">Para que serve a reciclagem</h2>
                <p className="p">
                O processo de reciclagem impacta diretamente o meio ambiente, reintroduzindo na cadeia produtiva itens com potencial de reaproveitamento que seriam descartados. A reciclagem serve para dar nova vida aos resíduos, evitando o desperdício, o impacto ambiental e os problemas sanitários. Com a reciclagem, um material que foi jogado na lixeira reciclável pode virar o mesmo produto ou ser transformado em algo com outra utilidade.
                </p>
            
                
                </Col>   
  
            </Row>

            <Row xs={12} md={3} className="g-4">
            <Wave 
                className="wave"
                mask="url(#mask)" 
                fill="#00f777" 
                options={{
                    width: 20,
                    height: 20,
                    amplitude: 50,
                    speed: 0.15,
                    points: 3
                  }}
                >
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0" stopColor="white" />
                    <stop offset="0.5" stopColor="black" />
                    </linearGradient>
                    <mask id="mask">
                    <rect x="0" y="0" width="2000" height="300" fill="url(#gradient)"  />
                    </mask>
                </defs>
                </Wave>
              
                <Col>
                <Card col="12" md="4" className="card">
                    <FaCoins className='iconBottom'/>
                    <Card.Body className='cardBody'>
                    <h2  className='title'>trashcoins</h2>
                    <Card.Text>
                       <p className="cardText">O usuário receberá uma certa quantia de coins a cada descarte que realizar, ao final, ele poderá trocar por um valor de acordo com os pontos obtidos.</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card>
                    <FaMapMarkerAlt className='iconBottom'/>
                    <Card.Body className='cardBody'>
                    <h2 className='title'>Maps</h2>
                    <Card.Text className="cardText">
                        <p className="cardText">No aplicativo, o usuário poderá consultar nossos pontos de coletas espalhados pela cidade através do maps, fazendo que ache o ponto mais próximo.</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card>
                    <FaQrcode className='iconBottom'/>
                    <Card.Body className='cardBody'>
                    <h2 className='title'>qrcode</h2>
                    <Card.Text>
                    <p className="cardText">Contamos com um sistema scanner, onde o usuário realizará o scaneamento do tipo de lixo que irá descartar, após, o mesmo receberá uma quantia de pontos.</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
              
            </Row>      

           
        </Container>
    );
}

export default MainPage;