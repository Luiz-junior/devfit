import React from 'react';
import styled from 'styled-components/native';
import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: 0 30px;
`;
const WelcomeText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
`;
const WelcomeImage = styled.View`
  flex: 1;
  justify-content: center;
`;
const WelcomeLogo = styled.Image`
  width: 200px;
  height: 200px;
`;

const BeginConfigArea = styled.View`
  margin-bottom: 50px;
  width: 100%;
  margin-bottom: 50px;
`;

const ButtonText = styled.Text`
  color: #FFF;
`;

const StarterIntro = props => {

  const onStart = () => {
    props.navigation.navigate('StartedName');
  };

  return (
    <Container>
      <WelcomeText>Bem Vindo(a) ao DevFit</WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={require('../assets/boneco.png')} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton width="100%" bgcolor="#0072c0" underlayColor="#0B7AC6"  onPress={onStart}>
          <ButtonText> Iniciar configuração </ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
};

StarterIntro.navigationOptions = {
  header: null,
};

export default StarterIntro;
