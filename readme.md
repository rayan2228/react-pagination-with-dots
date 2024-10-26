# react-pagination-with-dots

A \"react-pagination-with-dots\" component designed for seamless integration with React/Next JS. This component allows developers to easily manage paginated API data, complete with customizable page limits, scroll-to-top functionality, and responsive design options. Perfect for applications requiring smooth pagination, it simplifies managing large datasets while enhancing user experience with smooth scrolling and efficient data fetching. Ideal for projects utilizing Redux Toolkit, this package is both easy to implement and highly configurable, making it an essential tool for modern web development.

## Demo

[DEMO](https://stackblitz.com/edit/vitejs-vite-3kfukr?file=src%2FApp.tsx)

## Installation

Install my-project with npm

```bash
npm i react-pagination-with-dots
```

## Usage/Examples Pagination using API

```javascript
function App() {
  const [currentPage, setCurrentPage] = useState < number > 1;
  return (
    <Pagination
      totalPages={20} // from api
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default App;
```

## Usage/Examples Pagination using list of data

```javascript
const books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
  { id: 3, title: "Book 3" },
  { id: 4, title: "Book 4" },
  { id: 5, title: "Book 5" },
  { id: 6, title: "Book 6" },
  { id: 7, title: "Book 7" },
  { id: 8, title: "Book 8" },
  { id: 9, title: "Book 9" },
  { id: 10, title: "Book 10" },
  // Add more books here as needed
];
function App() {
  const [currentPage, setCurrentPage] = useState < number > 1;
  const [data, setData] = useState < [] > books;
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      <Pagination
        data={books}
        setData={setData}
        limit={5}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
```

## Package Customization

| Property name        | Type       | Default         | Description                                                                         |
| -------------------- | ---------- | --------------- | ----------------------------------------------------------------------------------- |
| currentPage         | variable   | inputOptions    | pass useState variable                                                              |
| totalPages      | function   | setInputOptions | pass useState state update function                                                 |
| breakLabel      | object     | empty object    | input attributes with key pair value. example {readonly:"readonly"}                 |
| setCurrentPage   | object     | empty object    | (for input two) input attributes with key pair value. example {readonly:"readonly"} |
| setData     | object     | empty object    | input attributes with key pair value. example {diabaled:"disabled"}                 |
| activeClass               | number     | 0               | how many options can added                                                          |
| paginationItemClass   | string     | null            | add your own css                                                                    |
| paginationClass        | string     | null            | add your own css                                                                    |
| disabledClass       | string     | null            | add your own css                                                                    |
| cancelClassName      | string     | null            | add your own css                                                                    |
| breakLabelClass      | string     | null            | add your own css                                                                    |
| buttonClass | string     | null            | add your own css                                                                    |
| nextClass           | string     | add             | add your own button text                                                            |
| prevClass           | image file | svg             | add your own icon                                                                   |
| prev     | image file | svg             | add your own icon                                                                   |
| next      | image file | svg             | add your own icon                                                                   |
| data      | image file | svg             | add your own icon                                                                   |
| limit      | image file | svg             | add your own icon                                                                   |
| paginationStyleType      | image file | svg             | add your own icon                                                                   |

# Hi, I'm Rayan Hossain! 👋

## 🚀 About Me

Passionate MERN Stack Developer || Building Innovative Web Solutions with MongoDB || Express JS || React JS || Next JS || Node.js || Mentor

## 🔗 Links

[![github](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/rayan2228)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rayan2228/)

## License

This software is free to use under the MIT license. See the [LICENSE file](https://choosealicense.com/licenses/mit/) for license text and copyright information.
