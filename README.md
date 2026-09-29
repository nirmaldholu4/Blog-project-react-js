# 📝 Blog CRUD App

A clean and responsive **Blog Management application** built with **React JS** and **JSON Server**. It lets you **Create, Read, Update and Delete** blog posts through a modern card-based UI with a sticky side form.

![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON%20Server-Fake%20REST%20API-orange)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3&logoColor=white)

---



## 🎥 Demo Video

[▶️ Watch the Blog Project Demo Video](https://drive.google.com/file/d/126S7r49qnQd6LNJlOwZ6uPSCVDE1HW86/view?usp=sharing)

---

## 📸 Blog project Screenshots

### ➕ Add new blog

![add new blog Screenshot](./src/assets/screenshot/add-blog.png)

### 🏠 Home

![Home Screenshot](./src/assets/screenshot/home.png)

### ▶️ Button section 

![Button section Screenshot](./src/assets/screenshot/delete-edit-button.png)

### 🛠️ Edit blog section

![Edit blog section Screenshot](./src/assets/screenshot/edit-blog.png)


## 📑 Table of Contents

1. [About the Project](#-about-the-project)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Project Structure](#-project-structure)
5. [Getting Started](#-getting-started)
6. [API Endpoints](#-api-endpoints)
7. [Data Structure](#-data-structure)
8. [How It Works](#-how-it-works)
9. [Responsive Design](#-responsive-design)
10. [Known Issues & Tips](#-known-issues--tips)
11. [Future Improvements](#-future-improvements)
12. [Author](#-author)

---

## 📖 About the Project

**Blog CRUD** is a beginner-to-intermediate friendly React project that demonstrates how a frontend communicates with a REST API. It uses the browser's `fetch` API to talk to a local **JSON Server**, which acts as a fake backend using a simple `db.json` file.

The project is a great way to practice:

- React Hooks (`useState`, `useEffect`)
- Controlled form inputs
- REST API calls (`GET`, `POST`, `PUT`, `DELETE`)
- Responsive layouts using CSS Grid
- Add / Edit form reuse with a single component

---

## ✨ Features

- ✅ **View Blogs** – All blogs are displayed as beautiful cards with image, title, category and date
- ➕ **Add Blog** – Add a new blog using the form on the left side
- ✏️ **Edit Blog** – Click *Edit* to load blog data into the form and update it
- 🗑️ **Delete Blog** – Remove any blog instantly with one click
- 🔁 **Smart Form** – The same form switches between *Add Blog* and *Edit Blog* mode automatically
- 📌 **Sticky Form** – The form stays visible while scrolling through blogs
- 📱 **Fully Responsive** – 3 columns on desktop, 2 on tablet, 1 on mobile
- 🎨 **Hover Animations** – Smooth lift effects on cards, form and buttons
- ⚡ **Fast Development** – Powered by Vite

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React JS** | Frontend UI library |
| **Vite** | Fast dev server and build tool |
| **JSON Server** | Fake REST API using `db.json` |
| **CSS3 (Grid + Flexbox)** | Styling and responsive layout |
| **Fetch API** | Communicating with the backend |
| **Bootstrap** | Imported in `main.jsx` (optional, currently not used in components) |
| **Unsplash** | Sample blog images |

---

## 📂 Project Structure

```text
blog-crud/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── screenshot/
│   │       ├── add-blog.png
│   │       ├── delete-edit-button.png
│   │       ├── edit-blog.png
│   │       └── home.png
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── db.json
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── vite.config.js
└── README.md

---
---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)
- Git (optional)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/blog-crud.git
cd blog-crud
```

### 2️⃣ Install dependencies

```bash
npm install
```

If Bootstrap or JSON Server are not installed yet:

```bash
npm install bootstrap
npm install -g json-server
```

### 3️⃣ Start the JSON Server (Backend)

Open a terminal and run:

```bash
json-server --watch db.json --port 3000
```

If you are using the newer version of JSON Server (v1+):

```bash
npx json-server db.json --port 3000
```

The API will now be available at:

```
http://localhost:3000/blogs
```

### 4️⃣ Start the React app (Frontend)

Open a **second terminal** and run:

```bash
npm run dev
```

Open the link shown in the terminal (usually `http://localhost:5173`).

> ⚠️ **Both servers must be running at the same time** for the app to work.

---

## 🔌 API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/blogs` | Get all blogs |
| `GET` | `/blogs/:id` | Get a single blog |
| `POST` | `/blogs` | Add a new blog |
| `PUT` | `/blogs/:id` | Update an existing blog |
| `DELETE` | `/blogs/:id` | Delete a blog |

### Example – Add a blog

```js
fetch("http://localhost:3000/blogs", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "My New Blog",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    category: "React JS",
    date: "28 September 2026"
  })
});
```

---

## 🗄️ Data Structure

Every blog object in `db.json` looks like this:

```json
{
  "id": "1",
  "title": "Learn React JS",
  "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  "category": "React JS",
  "date": "28 September 2026"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | Unique ID (auto-generated by JSON Server on POST) |
| `title` | String | Blog title |
| `image` | String | Image URL |
| `category` | String | Blog category / topic |
| `date` | String | Published date |

The included `db.json` comes with **15 sample blogs** covering React, JavaScript, HTML, CSS, Node JS, MongoDB, Git & GitHub, API Integration, Full Stack and more.

---

## ⚙️ How It Works

### State Management

```js
const [blogs, setBlogs] = useState([]);      // all blogs
const [title, setTitle] = useState("");      // form fields
const [image, setImage] = useState("");
const [category, setCategory] = useState("");
const [date, setDate] = useState("");
const [editId, setEditId] = useState(null);  // null = Add mode, id = Edit mode
```

### CRUD Functions

| Function | What it does |
|----------|--------------|
| `getData()` | Fetches all blogs from the server (runs once on page load via `useEffect`) |
| `addBlog(e)` | Sends a `POST` request and appends the new blog to the list |
| `editBlog(blog)` | Fills the form with the selected blog's data and sets `editId` |
| `updateBlog(e)` | Sends a `PUT` request and replaces the blog in the list |
| `deleteBlog(id)` | Sends a `DELETE` request and removes the blog from the list |

### Add / Edit Mode Switching

The form title, button text and submit handler change based on `editId`:

```jsx
<h2>{editId ? "Edit Blog" : "Add Blog"}</h2>

<form onSubmit={editId ? updateBlog : addBlog}>
  ...
  <button type="submit">{editId ? "Update Blog" : "Add Blog"}</button>
</form>
```

---

## 📱 Responsive Design

| Screen Size | Layout |
|-------------|--------|
| **Desktop** (> 1100px) | Sticky form on the left + 3-column blog grid |
| **Tablet** (≤ 1100px) | 2-column blog grid |
| **Mobile** (≤ 750px) | Form on top + single-column blog grid |
| **Small Mobile** (≤ 450px) | Reduced padding and image heights |

---

## 🐞 Known Issues & Tips

- **Bootstrap import typo** – In `main.jsx`, make sure the import is written as `bootstrap/dist/css/bootstrap.min.css` (all lowercase). A wrong letter case can break the build on case-sensitive systems (Linux / macOS / deployment servers). If you are not using Bootstrap classes, you can remove both Bootstrap imports.
- **Duplicate CSS** – `.form` is defined twice in `App.css`. The second block overrides the first, so you can merge them into one.
- **Empty fields** – The form currently allows empty values. Add validation before submitting.
- **Backend must be running** – If the blog list is empty, check that JSON Server is running on port `3000`.
- **Typos in sample data** – Blog #4 title is `"HTML for BBeginners"` and blog #8 has a trailing space (`"Node JS "`). You can fix them in `db.json`.

---

## 🔮 Future Improvements

- [ ] Form validation with error messages
- [ ] Search blogs by title
- [ ] Filter blogs by category
- [ ] Sort by date
- [ ] Pagination or infinite scroll
- [ ] Delete confirmation popup
- [ ] Toast notifications for success / error
- [ ] Loading spinner while fetching data
- [ ] Image preview in the form
- [ ] Date picker instead of a text input
- [ ] Blog details page using React Router
- [ ] Dark mode
- [ ] Use environment variables for the API URL
- [ ] Connect to a real backend (Node.js + Express + MongoDB)

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m "Add some AmazingFeature"`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

📄 License 👉 This project is created for educational purposes only.👈

---

## 👨‍💻 Author

**Dholu Nirmal.**

- GitHub: [@nirmaldholu4](https://github.com/nirmaldholu4)
- LinkedIn: [dholu-nirmal](https://www.linkedin.com/in/dholu-nirmal/)
- Email: nirmaldholu4@gmail.com

---

⭐ If you like this project, don't forget to give it a **star**!
