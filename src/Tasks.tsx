import React from 'react';

type PropsType = {
    data: DataType
}

type DataType = {
    title: string;
    tasks: Array<Task>
    students: Array<string>
}

interface Task {
    taskId: number
    title: string
    isDone: boolean
}

const Tasks: React.FC<PropsType> = ({data}) => {
    return (
        <div>
            <h2>{data.title}</h2>
                    {data.tasks.map(task => {
                        return (
                            <div key={task.taskId}>
                                <input type='checkbox' checked={task.isDone}/>
                                <span>{task.title}</span>
                            </div>
                        )
                    })
                    }
                    {data.students.map(student => {
                        return (
                            <div key={student}>{student}</div>
                        )
                    })}
        </div>
    );
}

export default Tasks;