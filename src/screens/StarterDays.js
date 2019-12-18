import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #fff;
  margin: 0 30px;
  margin-top: 50px;
`;

const HeaderText = styled.Text`
  font-size: 15px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

const NextButton = styled.Button``;

const BoldText = styled.Text`
  font-weight: bold;
`;

const DaysArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StarterDays = props => {

  const nextAction = () => {
    if (!props.name) {
      alert('Por favor informe um nome!');
      return;
    };

    props.navigation.navigate('StarterDays');
  };

  const handleChangeName = text => {
    props.setName(text);
    props.navigation.setParams({ name: text });
  };

  let firstName = props.name.split(' ')[0];

  return (
    <Container>
      <HeaderText>Opa, <BoldText>{firstName}</BoldText> tudo bem?</HeaderText>
      <HeaderText>Quais <BoldText> dias da semana </BoldText> você pretende treinar?</HeaderText>

      <DaysArea>
        <DefaultButton style={{ marginBottom: 20, width: 100 }}>
          <Text>Segunda</Text>
        </DefaultButton>

        <DefaultButton style={{ marginBottom: 20, width: 100 }}>
          <Text>Terça</Text>
        </DefaultButton>

        <DefaultButton style={{ marginBottom: 20, width: 100 }}>
          <Text>Quarta</Text>
        </DefaultButton>

        <DefaultButton style={{ marginBottom: 20, width: 100 }}>
          <Text>Quinta</Text>
        </DefaultButton>

        <DefaultButton style={{ marginBottom: 20, width: 100 }}>
          <Text>Sexta</Text>
        </DefaultButton>

        <DefaultButton style={{ marginBottom: 20, width: 100 }}>
          <Text>Sábado</Text>
        </DefaultButton>
      </DaysArea>
    </Container>
  );
};

StarterDays.navigationOptions = ({ navigation }) => {

  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.name) {
      alert('Por favor informe um nome!');
      return;
    }

    navigation.navigate('StarterDays');
  };

  return {
    title: '',
    headerRight: <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    }
  }
};

const mapStateToProps = state => ({
  name: state.userReducer.name
});


const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({ type: 'SET_NAME', payload: { name } }),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StarterDays);
