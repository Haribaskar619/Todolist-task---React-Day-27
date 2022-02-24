import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Tasks from './Tasks';
import TaskList from './TaskList';

function App() {
  return (
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card card-white">
                <div class="card-body">
                  <Form></Form>
                  <Tasks></Tasks>
                  <TaskList></TaskList>
                </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default App;
