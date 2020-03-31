import React from "react";
import Card from "./Card";
import Ventilator from "../img/project-joinville-croped.png";
import FaceShield from "../img/faceShield.png";
import { Form, Input } from "@rocketseat/unform";
/*  
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
*/

export default function OrderContent() {
  return (
    <div className="container">
      <div className="row">
        <Form /*schema={schema} onSubmit={handleSubmit}*/>
          <Input name="name" placeholder="Nome completo" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="Produto" type="text" placeholder="FaceShield modelo x" />

          <button type="submit">Enviar Pedido</button>
        </Form>
      </div>

      <div className="row">
        <div className="col-md-4 py-3 mb-3">
          <Card
            title="Respiradores"
            location=""
            updatedAt=""
            status=""
            imgPath={Ventilator}
            url="/respiradores"
            button="Ver Projetos"
          />
        </div>
        <div className="col-md-4 py-3 mb-3">
          <Card
            title="Suprimentos"
            location=""
            updatedAt=""
            status=""
            imgPath={FaceShield}
            url="/suprimentos"
            button="Ver Projetos"
          />
        </div>
      </div>
    </div>
  );
}
