import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todo, setTodo] = useState("");
	const [items, setItems] = useState([]);
	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			setItems([...items, todo]);
			setTodo("");
		}
	};

	const handleDelete = (index) => {
		setItems(items.filter((_, i) => i !== index));
	};

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Todos</h1>
			<div className="text-center container mt-5">
				<input
					type="text" value={todo} className="form-control" placeholder="What needs to be done?"
					onChange={(e) =>
						setTodo(e.target.value)}
					onKeyDown={handleKeyPress}
				/>
				<ul className="list-unstyled">
					{items.length === 0 ? (<p className="no-tareas">No hay tareas, añadir tareas</p>
					) : (
						<>
							{items.map((item, index) => (
								<li className="d-flex justify-content-between align-items-center form-control container task-item" key={index}><span>{item}</span>
									<button className="btn btn-sm delete-btn"
										onClick={() =>
											handleDelete(index)}>X</button>
								</li>
							))}
							<div className="contador-tareas form-control container">
								{items.length} tarea{items.length > 1 ? "s" : ""} pendiente{items.length > 1 ? "s" : ""}
							</div>
						</>
					)}
				</ul>
			</div>

		</div>
	);
};

export default Home;