import { Button, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

const Input = ({onAddTask}: {onAddTask: (task:string) => void}) => {
    const [task, setTask] = useState('');

    const handleTask = () => {
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    }

    return(
        <View style={styles.content}>
            <TextInput 
                style={styles.input}
                placeholder="Add a task..."
                value={task}
                onChangeText={setTask}
            />
            <Button title="Add" onPress={handleTask}/>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    }
})

export default Input;