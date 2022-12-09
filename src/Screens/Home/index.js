import { FlatList, SafeAreaView, Text } from 'react-native'
import React, { useState } from 'react';
import Title from '../../Components/Title';
import Input from '../../Components/Input';
import ButtonAdd from '../../Components/Button';
import Task from '../../Components/Task';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const [taskTitle, setTaskTitle] = useState();
    const [taskDetail, setTaskDetail] = useState();
    const [data, setData] = useState([]);
    const navigation = useNavigation();

    const addTask = () => {
      if (taskTitle !== "" && !taskTitle.match(/^[ \t]+$/)){
        const newTask = {
          id: Date.now(),
          title: taskTitle,
          detail: taskDetail
        }
        setData((prev) => [...prev, newTask])
        setTaskTitle('')
        setTaskDetail('')
      }
    }

    const deleteTask = (id) => {
      const filteredData = data.filter(item => item.id !== id)
      setData(filteredData);
    }

    const goToDetails = (item) => {
      navigation.navigate('Details', { item })
    }

    return (
        <SafeAreaView>
          <FlatList
            data={data}
            ListHeaderComponent={(
              <>
                <Title text="To Do List" />
                <Input value={taskTitle} placeholder='Titulo da tarefa' onChange={value => setTaskTitle(value)} />
                <Input value={taskDetail} placeholder='Descreva melhor a tarefa' onChange={value => setTaskDetail(value)} />
                <ButtonAdd onPress={addTask} text='Adicionar' />
                
              </>
            )}
            ListEmptyComponent={(<Text style={{textAlign: 'center', marginTop: 40, fontSize: 25}}>Nenhuma tarefa enontrada</Text>)}
            renderItem={({item}) => <Task details={() => goToDetails(item)} deleteTask={() => deleteTask(item.id)} taskTitle={item.title} /> }
            keyExtractor={(item) => String(item.id)}
          />
        </SafeAreaView>
    )
}