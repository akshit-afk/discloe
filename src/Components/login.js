import styled from "styled-components";

const Login = (props)=>{
    return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src = "/images/cta-logo-one.svg" alt = "" />
                <Signup>GET ALL THERE</Signup>
                <Description> Get Premier Access to Raya and Shang Chi for an additional fee
            with a Disney+ subscription. As of 11/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</Description>
                <CTALogoTwo src = "/images/cta-logo-two.png" alt="" />
            </CTA>

            <BgImage />
            
        </Content>
    </Container>
    );
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
font-size: larger;
`;
const Content = styled.div`
width: 100%;
min-height: 100vh;
position: relative;
box-sizing: border-box;
margin-bottom: 10vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height:100%;

`;
const BgImage = styled.div`
height: 100%;
background-image: url("/images/login-background.jpg");
background-position: top;
background-size: cover;
background-repeat:no-repeat;
position: absolute;
top: 0;
right: 0;
left:0;
z-index:-1;
`;
const CTA = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;
margin-top: 0;
margin-bottom: 2vw;
flex-wrap: wrap;
max-width: 650px;
width: 100%;
transition-timing-function: ease-in-out;
transition: opacity 0.2s;

`;
const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;
const Signup = styled.a`
font-weight: 500;
color: #f9f9f9;
background-color: #0063e5;
width: 90%;
margin-bottom:12px;
letter-spacing: 1.5px;
font-size: 20px;
padding: 16.5px 0;
border: solid 1px transparent;
border-radius: 4px;
transition: 0.5s;


&:hover{
    background-color: #0483ee;
    cursor: pointer;
}

`;
const Description = styled.p`
color: hsla(0,0%,95.3%,1);
font-size: 11.3px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing:1.3px;
`;
const CTALogoTwo = styled.img`
max-width: 650px;
margin-bottom: 20px;
display: inline;
vertical-align: bottom;
width: 100%;
`;
export default Login