import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './style.css';

const FooterPagePro = () => {
  return (
    <MDBFooter className="page-footer font-small pt-0" id="contato">
      <div style={{ backgroundColor: "#00f777" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="12" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 text">
              Aqui seu lixo vira recompensa!
              </h6>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="6" lg="4" xl="4" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Womp Móvel</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p className="textFooterPrime">
            O Trashback proporciona aos usuários uma forma de melhorar nosso planeta através da conscientização ambiental. Trazendo inovação junto a sustentabilidade. A plataforma trata-se de fazer com que o seu lixo, lhe traga algum retorno de volta.
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" xl="4" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Apps</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p className="textFooter">
              <a href="#!">App trashback em breve</a>
            </p>
            
          </MDBCol>
      
          <MDBCol md="4" lg="4" xl="4" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contato</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p className="textFooter">
              <i className="fa fa-home mr-3" /> Av. Constantino Nery, 2533 - Chapada, Manaus - AM, 69050-000
            </p>
            <p className="textFooter">
              <i className="fa fa-envelope mr-3" /> kevinbfv@gmail.com
            </p>
            <p className="textFooter">
              <i className="fa fa-phone mr-3" /> (92) 996080250
            </p>
           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 text-white">
      <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright – Móvel Play® – <a href="www.movelplay.com">movelplay.com</a> – Todos os direitos reservados
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;