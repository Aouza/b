import React from "react";
import Spacer from "../Spacer";
import { HiOutlineMail, HiOutlinePhone, HiOutlineMap } from "react-icons/hi";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import {
  Container,
  ContactForm,
  InputWrapper,
  HeaderForm,
  WrapperInfo,
  WrapperIcons,
} from "./styles";

const ContactSection = () => {
  return (
    <Container>
      <h2>FALE CONOSCO</h2>
      <Spacer gap={30} />

      <WrapperInfo>
        <span>
          <HiOutlineMap /> Rua Alexandre de Gusmão, 341 - Bairro do Socorro -
          São Paulo - SP
        </span>
        <span>
          <HiOutlinePhone />
          (11) 5547-9371
        </span>
        <span>
          <HiOutlineMail />
          braseal@braseal.com.br
        </span>
      </WrapperInfo>

      <WrapperIcons>
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaLinkedin />
      </WrapperIcons>

      <ContactForm>
        <HeaderForm>
          <InputWrapper>
            <label htmlFor="name">Nome</label>
            <input type="name" id="name" name="name" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="subject">Assunto</label>
            <input type="text" id="subject" name="subject" />
          </InputWrapper>
        </HeaderForm>
        <Spacer gap={40} />
        <InputWrapper>
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" />
        </InputWrapper>
        <Spacer gap={20} />
        <button>ENVIAR</button>
      </ContactForm>
      <Spacer gap={40} />
    </Container>
  );
};

export default ContactSection;
