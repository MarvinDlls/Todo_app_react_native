import { View, StyleSheet } from "react-native";
import { useState } from "react";
import DismissKeyboard from "./src/Components/DismissKeyboard";
import Input from "./src/Components/Input";
import TaskList from "./src/Components/TaskList";

type Task = {
  id: number;
  text: string;
  completed: boolean;
}

function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const addTask = (task: string) => {
      const newTask = {
        id: Date.now(),
        text: task,
        completed: false
      }
      setTasks([...tasks, newTask])
    }
    
    return(
      
      <DismissKeyboard>
        <View style={styles.container}>
          <Input onAddTask={addTask} />
          <TaskList tasks={tasks} setTasks={setTasks}/>
        </View>
        </DismissKeyboard>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    top: 100
  }
});

export default Home;