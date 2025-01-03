import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

type Task = {
    id: number;
    text: string;
    completed: boolean;
}

const TaskList = ({tasks, setTasks}: { tasks: Task[]; setTasks: (tasks: Task[]) => void }) => {
    const handleToggleTask = (id: number) => {
        setTasks(
            tasks.map((task) => 
                task.id === id ? {...task, completed: !task.completed} : task
            )
        );
    };

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };


    return(
        <View style={styles.content}>
            {tasks.map((task) => (
            <View key={task.id} style={styles.taskItem}>
                <Text style={[styles.taskText, task.completed && styles.completedText]}>{task.text}</Text>

                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => handleToggleTask(task.id)}
                    style={styles.undoButton}
                >
                    <Text style={styles.buttonText}>
                        {task.completed ? 'Redo' : 'Done'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleDeleteTask(task.id)}
                    style={styles.deleteButton}
                >
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                </View>

            </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 15,
        width: '80%',
    },
    taskItem: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    taskText: {
        fontSize: 16
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#aaa'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    undoButton: {
        backgroundColor: '#ffd700',
        padding: 10,
        marginRight: 10,
        borderRadius: 5
    },
    deleteButton: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: '#000',
        fontSize: 14,
    }
})

export default TaskList;