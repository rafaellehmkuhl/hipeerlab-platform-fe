import React from "react";
import OrderContent from "../components/OrderContent";
/* import Carousel from "../components/Carousel"; */
import Header from "../components/Header";
// import { Container } from './styles';

export default class Order extends React.Component {
  render() {
    return (
      <div>
        {/* inclui o header nos moldes das paginas de conteudo */}
        <Header
          headerTitle="Pedidos de Equipamentos"
          headerText="Instituições de saúde podem fazer pedidos de equipamentos emergciais por esta página"
        />
        <OrderContent />
      </div>
    );
  }
}
