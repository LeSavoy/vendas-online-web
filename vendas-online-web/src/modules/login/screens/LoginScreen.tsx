import { useState } from "react";
import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleLogin = () => {
    
  }

  return (
    <>
      <ContainerLoginScreen>
        <ContainerLogin>
          <LimitedContainer>
            <LogoImage src="./logo.png" />
            <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
            <Input title="Usuário" margin="32px 0 0" onChange={handleUsername} value={username}/>
            <Input type="password" title="Senha" margin="32px 0 0" onChange={handlePassword} value={password}/>
            <Button type="primary" margin="64px 0 16px 0" onClick={handleLogin}>Entrar</Button>
          </LimitedContainer>
          <BackgroundImage src="./background.jpg" />
        </ContainerLogin>
      </ContainerLoginScreen>
    </>
  )
};

export default LoginScreen;
