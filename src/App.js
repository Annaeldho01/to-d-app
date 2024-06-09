import './App.css';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteTodo from './components/DeleteTodo';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
    
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddTodo/>}/>
        <Route path='/search' element={<SearchTodo/>}/>
        <Route path='/delete' element={<DeleteTodo/>}/>
        <Route path='/view' element={<ViewAll/>}/>
        

        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
