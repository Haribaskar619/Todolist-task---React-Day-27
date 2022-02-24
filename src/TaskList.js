import React from 'react'

function TaskList() {
  return (
    <div class="todo-list">
                        <div class="todo-item">
                            <div class="checker"><span class=""><input type="checkbox"/></span></div>
                            <span>Create theme</span>
                            <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
                        </div>
                        <div class="todo-item">
                            <div class="checker"><span class=""><input type="checkbox"/></span></div>
                            <span>Work on wordpress</span>
                            <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
                        </div>
                        
                        <div class="todo-item">
                            <div class="checker"><span class=""><input type="checkbox"/></span></div>
                            <span>Organize office main department</span>
                            <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
                        </div>
                        <div class="todo-item">
                            <div class="checker"><span><input type="checkbox"/></span></div>
                            <span>Error solve in HTML template</span>
                            <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
                        </div>
                    </div>
  );
}

export default TaskList