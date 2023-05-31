import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: snow;
    display: flex;
    align-items: center;
    font-style: 14px;
    font-weight: 500;
    justify-content: center;
    letter-spacing: 4px;
    justify: space-between;
`

const Announcement = () => {
  return (
    <Container>
    <em>HURRY WHILE STOCK LASTS SUPER DEAL 50% OFF</em>
    </Container>
  )
}

export default Announcement