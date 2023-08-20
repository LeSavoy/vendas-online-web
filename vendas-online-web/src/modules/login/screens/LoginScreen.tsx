import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginScreen.styles";

const LoginScreen = () => {
  return (
    <>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
          </LimitedContainer>
          <BackgroundImage src="./background.jpg" />
        </ContainerLogin>
      </ContainerLoginScreen>
    </>
  )
};

export default LoginScreen;
