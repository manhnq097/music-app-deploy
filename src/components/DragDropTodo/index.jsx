// import './DragDropTodo.scss';
// import Grid from '@material-ui/core/Grid';
// import { useTranslation } from "react-i18next";
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const DragDropTodo = () => {

//     const { t } = useTranslation();
//     const [todos, setTodos] = useState([]);
//     const [todosProcessing, setTodosProcessing] = useState([]);
//     // const [todosFinished, setTodosFinished] = useState([]);
//     // const [todosExpired, setTodosExpired] = useState([]);
//     // const [todosCancel, setTodosCancel] = useState([]);

//     // useEffect(() => {
//     //     axios.get('http://localhost:4000/todos')
//     //         .then(res => setTodos(res.data));
//     // }, [])
//     // useEffect(() => {
//     //     setTodosProcessing(todos.filter(todo => todo.status === 1));
//     //     setTodosFinished(todos.filter(todo => todo.status === 2));
//     //     setTodosExpired(todos.filter(todo => todo.status === 3));
//     //     setTodosCancel(todos.filter(todo => todo.status === 4));
//     // }, [])
//     const [states, setStates] = useState([
//         {
//             name: 'Waiting list',
//             stateCol: 3,
//             items: [
//                 { id: 'asdasd', title: "To do 1" },
//                 { id: 'awerta', title: "To do 2" },
//                 { id: 'awerawet', title: "To do 3" },
//                 { id: 'a45awert', title: "To do 4" }
//             ]
//         },
//         {
//             name: 'Processing',
//             stateCol: 3,
//             items: [
//                 { id: 'setse', title: "To do 5" },
//                 { id: 'WER', title: "To do 6" },
//                 { id: 'aWETAE', title: "To do 7" },
//                 { id: 'AWET6', title: "To do 8" }
//             ]
//         },
//         {
//             name: 'Finished',
//             stateCol: 3,
//             items: [
//                 { id: 'q346tery', title: "To do 9" },
//                 { id: 'WSer', title: "To do 10" },
//                 { id: 'ertaert', title: "To do 11" },
//                 { id: 'SDfsdg', title: "To do 12" }
//             ]
//         },
//         {
//             name: 'Cancel',
//             stateCol: 3,
//             items: [
//                 { id: 'ae4ry', title: "To do 13" },
//                 { id: 'aerwerwety', title: "To do 14" },
//                 { id: 'q2w35', title: "To do 15" },
//                 { id: 'aw4yaery', title: "To do 16" }
//             ]
//         }
//     ]);
//     function handleOnDragEnd(result) {
//         if (!result.destination) return;
//         const items = Array.from(todosProcessing);
//         const [reorderedItem] = items.splice(result.source.index, 1);
//         items.splice(result.destination.index, 0, reorderedItem);
//         setTodosProcessing(items);
//     }
//     return (
//         <div className="dragdrop-todo">
//             <DragDropContext onDragEnd={handleOnDragEnd}>
//                 <Grid container spacing={3}>
//                     {states.map((state) => {
//                         const todoList = state.items;
//                         return (
//                             <Grid item md={state.stateCol}>
//                                 <div className="dragdrop-todo__box processing">
//                                     <div className="dragdrop-todo__box-heading">
//                                         <div className="dragdrop-todo__box-heading-title">{t(state.name)}</div>
//                                         <div className="dragdrop-todo__box-heading-statistic">{todoList.length}</div>
//                                     </div>
//                                     <div className="dragdrop-todo__box-body">
//                                         <Droppable droppableId="characters">
//                                             {(provided) => (
//                                                 <ul className="dragdrop-todo__list" className="characters" {...provided.droppableProps} ref={provided.innerRef}>
//                                                     {todoList.map((todo, index) => {
//                                                         return (
//                                                             <Draggable key={todo.id} draggableId={`'${todo.id}'`} index={index}>
//                                                                 {(provided) => (
//                                                                     <li className="dragdrop-todo__item" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
//                                                                         <div className="dragdrop-todo__title">{todo.title}</div>
//                                                                         <div className="dragdrop-todo__detail">{todo.detail}</div>
//                                                                         <div className="dragdrop-todo__date">{todo.date}</div>
//                                                                         123
//                                                                     </li>
//                                                                 )}
//                                                             </Draggable>
//                                                         )
//                                                     })}
//                                                     {provided.placeholder}
//                                                 </ul>
//                                             )}
//                                         </Droppable>
//                                     </div>
//                                 </div>
//                             </Grid>
//                         )
//                     })}
//                 </Grid>
//             </DragDropContext>
//         </div>
//     )
// }

// export default DragDropTodo;