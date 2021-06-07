import Image from "next/image";
import { useState } from "react";
import Header from "../components/HeaderComponent";
import Spacer from "../components/Spacer";
import segments from "../services/segments";
import brands from "../services/brands";

import {
  Container,
  Hero,
  CallTrelleborg,
  ImageSliderContent,
  WrapperSlider,
  SegmentContent,
  ContainerBrands,
  Brands,
} from "./styles";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  const [imageUrl, setImageUrl] = useState(
    "/static/images/segmentos/segmento-alimenticio.jpg"
  );
  const handleSegmentImage = (url: string) => {
    setImageUrl(url);
  };
  return (
    <>
      <Header />
      <Container>
        <Hero>
          <div>
            <h1>A BRASEAL É DISTRIBUIDOR PREFERENCIAL</h1>
            <Spacer gap={10} />
            <h2>TRELLEBORG SEALING SOLUTIONS</h2>
            <Spacer gap={20} />
            <p>
              A Trelleborg Sealing Solutions oferece um portifólio incrivelmente
              extenso de produtos. Um único fornecedor provendo o melhor em
              elastômeros, silicone, termoplásticos, PTFE e compósitos de alta
              tecnologia. Nossas soluções são destaques em praticamente todas as
              aplicações cabíveis nos mercados industrial, automotivo e
              aeroespacial.
            </p>
          </div>
          <Image
            src="/static/images/home/global-map.png"
            alt="Imagem do mapa mundial"
            layout="responsive"
            objectFit="contain"
            width="50%"
            height="50%"
          />
        </Hero>
        <Spacer gap={40} />
        <CallTrelleborg>
          <div>
            <img src="/static/images/home/logo-trelleborg.png" />
          </div>
        </CallTrelleborg>
        <Spacer gap={40} />
        <ImageSliderContent>
          <WrapperSlider>
            <h2>Segmentos que atuamos</h2>
            <SegmentContent>
              <img src={imageUrl} alt="Imagem dos segmentos que atuamos" />
              <div>
                {segments.map((segment) => (
                  <button
                    key={segment.segment}
                    onClick={() => handleSegmentImage(segment.imageURL)}
                  >
                    {segment.segment}
                  </button>
                ))}
              </div>
            </SegmentContent>
          </WrapperSlider>
        </ImageSliderContent>
      </Container>
      <Container>
        <Brands>
          <h2>Comercializamos grandes marcas do setor</h2>
          <Spacer gap={60} />
          <div>
            {brands.map((brand) => (
              <img src={brand.path} />
            ))}
          </div>
        </Brands>
      </Container>
      <Container>
        <ContactSection />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
