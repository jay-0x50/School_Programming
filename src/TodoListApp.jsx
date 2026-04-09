function TodoListApp() {
    return (
        <div>
            <h1>Sudo List App</h1>

            <form>
                <input type="text" />
                <button type="submit">Add</button>
            </form>

            <ul>
                <li>
                    <label ><input type="checkbox" id=""/>지각 하기</label>
                    <button>🔮</button>
                    <button>✖️</button>
                </li>
                <li>
                    <label><input type="checkbox" id=""/>롤체 in down</label>
                    <button>🔮</button>
                    <button>✖️</button>
                </li>
            </ul> 
        </div> // div
    ) // return
} // TodoListApp()

export default TodoListApp;