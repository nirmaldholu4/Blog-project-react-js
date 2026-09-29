import { useEffect, useState } from "react";
import "./App.css";


function App() {

  const [blogs, setBlogs] = useState([]);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [editId, setEditId] = useState(null);


  function getData() {

    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });

  }


  function addBlog(e) {

    e.preventDefault();

    let newBlog = {
      title: title,
      image: image,
      category: category,
      date: date
    };

    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBlog)
    })
      .then((res) => res.json())
      .then((data) => {

        setBlogs([...blogs, data]);

        setTitle("");
        setImage("");
        setCategory("");
        setDate("");

      });

  }


  function deleteBlog(id) {

    fetch("http://localhost:3000/blogs/" + id, {
      method: "DELETE"
    })
      .then(() => {

        setBlogs(
          blogs.filter((blog) => blog.id !== id)
        );

      });

  }


  function editBlog(blog) {

    setEditId(blog.id);

    setTitle(blog.title);
    setImage(blog.image);
    setCategory(blog.category);
    setDate(blog.date);

  }


  function updateBlog(e) {

    e.preventDefault();

    let updatedBlog = {
      id: editId,
      title: title,
      image: image,
      category: category,
      date: date
    };

    fetch("http://localhost:3000/blogs/" + editId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBlog)
    })
      .then((res) => res.json())
      .then((data) => {

        setBlogs(
          blogs.map((blog) =>
            blog.id === editId ? data : blog
          )
        );

        setEditId(null);

        setTitle("");
        setImage("");
        setCategory("");
        setDate("");

      });

  }


  useEffect(() => {

    getData();

  }, []);


  return (

    <div className="main">

      <h1>Blog CRUD</h1>


      <div className="form">

        <h2>
          {editId ? "Edit Blog" : "Add Blog"}
        </h2>

        <form
          onSubmit={
            editId ? updateBlog : addBlog
          }
        >

          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />


          <input
            type="text"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) =>
              setImage(e.target.value)
            }
          />


          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          />


          <input
            type="text"
            placeholder="Enter Date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />


          <button type="submit">

            {editId ? "Update Blog" : "Add Blog"}

          </button>

        </form>

      </div>


      <div className="blogs">

        {blogs.map((blog) => (

          <div className="card" key={blog.id}>

            <div
              style={{
                padding: "10px 16px",
                background: "#f4f6f9",
                fontSize: "14px",
                fontWeight: "600",
                color: "#4f46e5",
                borderBottom: "1px solid #e5e7eb"
              }}
            >
              Blog No. {blog.id}
            </div>

            <img
              src={blog.image}
              alt=""
            />

            <div className="content">

              <h2>{blog.title}</h2>

              <p>
                Category: {blog.category}
              </p>

              <p>
                Date: {blog.date}
              </p>


              <button
                onClick={() =>
                  editBlog(blog)
                }
              >
                Edit
              </button>


              <button
                onClick={() =>
                  deleteBlog(blog.id)
                }
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default App;