import {styled} from "styled-components"


const Layout = ({children}) => {
    return <Body>
        <Container>{children}</Container>
    </Body>
}

export default Layout


const Body = styled.div`
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
`

const Container = styled.div`
    max-width: 768px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0px 16px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


