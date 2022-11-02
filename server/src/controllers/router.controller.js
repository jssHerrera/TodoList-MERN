import { pool } from "../conexion.js";

// =========================================
//obteniendo tareas
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({
      messages: "server no fount",
    });
  }
};

// =========================================
// Obteneiendo una tarea"
export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM tasks where id=?", [id]);
    if (result.length <= 0)
      return res.status(404).json({
        messages: "tarea no encontrada",
      });
    res.send(result[0]);
  } catch (error) {
    res.status(500).json({
      messages: "server no fount",
    });
  }
};

// =========================================
// añade nueva tarea
export const createTaskpost = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await pool.query(
    "INSERT INTO tasks(title, description) VALUES (?,?) ",
    [title, description]
  );
  res.json({
    id: result.insertId,
    title,
    description,
  });
};

// =========================================
// actualizando Tarea"
export const updateTaskPut = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query("UPDATE tasks  SET ?  WHERE id=?", [
      req.body,
      id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({
        messages: "no se actualizao",
      });

    const [rows] = await pool.query("SELECT * FROM tasks where id=?", [id]);

    res.json(rows);

  } catch (error) {
    res.status(500).json({
      messages: "server no fount",
    });
  }
};

// =========================================
// eliminando tarea
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE from tasks WHERE id=?", [id]);

    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: `no existe el id: ${id} - tasks no found`,
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      messages: "server no fount",
    });
  }
};
