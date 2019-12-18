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

  const toggleDay = (d) => {
    let newWorkoutDays = [...props.workoutDays];

    if(!props.workoutDays.includes(d)) 
      // inserir  
      newWorkoutDays.push(d)
    else 
      // remover
      newWorkoutDays = newWorkoutDays.filter(i => i != d);

    props.setWorkoutDays(newWorkoutDays);
    props.navigation.setParams({ workoutDays: newWorkoutDays });
  };

  let firstName = props.name.split(' ')[0];

  return (
    <Container>
      <HeaderText>Opa, <BoldText>{firstName}</BoldText> tudo bem?</HeaderText>
      <HeaderText>Quais <BoldText> dias da semana </BoldText> você pretende treinar?</HeaderText>

      <DaysArea>
        <DefaultButton
          bgcolor={props.workoutDays.includes(1) ? '#0072c0' : false}
          onPress={() => toggleDay(1)}
          style={{ marginBottom: 20, width: 100 }} underlayColor="#CCC" 
        >
          <Text>Segunda</Text>
        </DefaultButton>

        <DefaultButton
          bgcolor={props.workoutDays.includes(2) ? '#0072c0' : false}
          onPress={() => toggleDay(2)}
          style={{ marginBottom: 20, width: 100 }} underlayColor="#CCC" >
          <Text>Terça</Text>
        </DefaultButton>

        <DefaultButton
          bgcolor={props.workoutDays.includes(3) ? '#0072c0' : false}
          onPress={() => toggleDay(3)} 
          style={{ marginBottom: 20, width: 100 }} underlayColor="#CCC" >
          <Text>Quarta</Text>
        </DefaultButton>

        <DefaultButton
          bgcolor={props.workoutDays.includes(4) ? '#0072c0' : false}
          onPress={() => toggleDay(4)} 
          style={{ marginBottom: 20, width: 100 }} underlayColor="#CCC" >
          <Text>Quinta</Text>
        </DefaultButton>

        <DefaultButton
          bgcolor={props.workoutDays.includes(5) ? '#0072c0' : false}
          onPress={() => toggleDay(5)} 
          style={{ marginBottom: 20, width: 100 }} underlayColor="#CCC" >
          <Text>Sexta</Text>
        </DefaultButton>

        <DefaultButton
          bgcolor={props.workoutDays.includes(6) ? '#0072c0' : false}
          onPress={() => toggleDay(6)} 
          style={{ marginBottom: 20, width: 100 }} underlayColor="#CCC" >
          <Text>Sábado</Text>
        </DefaultButton>
      </DaysArea>
    </Container>
  );
};

StarterDays.navigationOptions = ({ navigation }) => {

  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.workoutDays.length) {
      alert('Você precisa treinar pelo menos 1 dia :)');
      return;
    }

    navigation.navigate('StarterLevel');
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
  name: state.userReducer.name,
  workoutDays: state.userReducer.workoutDays,
});


const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({ type: 'SET_NAME', payload: { name } }),
    setWorkoutDays: (workoutDays) => dispatch({ type: 'SET_WORKOUT_DAYS', payload: { workoutDays } }),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StarterDays);
