import "../../css/home.css";
import { Menu, Footer, ControlledCarousel } from "../components";

const Home = () => {
  return (
    <>
      <Menu />
      <div className="content">
        <p>Oi, me chamo Gui!</p>
        <p className="content-sub">
          <ControlledCarousel />
          <br />
          Ajudo VOCÊ a se enxergar por outro olhar!
          <br />
          <br />
          Sou fotógrafo há mais de 2 anos.
          <br />
          <br />
          Além de ser apaixonado por fotografia, também amo editar as fotos nos
          mínimos detalhes. <br /> <br />
          {/* Sou fotógrafo há mais de 2 anos.<br /><br />
          Sou apaixonado por fotografia e amo também editar os mínimos detalhes.<br /><br />
          Bom, agora deixa eu te mostrar meus pacotes pra você escolher o que mais te agrada.       */}
        </p>
        <br />
      </div>
      <Footer />
    </>
  );
};

export default Home;
