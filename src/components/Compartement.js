import styled from "styled-components";

const Compartement = (props) => {
    return (
    <Container className="dark">
      <header>{props.titre}</header>
      <section>
        {props.children}
      </section>
    </Container>)
  };




  export default Compartement;

  const Container = styled.div`
  & > header {
    font-weight: 600;
    font-size : 18px;
    padding-bottom : 10px; 
    border-bottom : 1px solid #ffffff ;
  }

  & > section {
    padding-top: 8px;
  }
`;