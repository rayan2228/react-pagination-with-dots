# react-pagination-with-dots

\"react-pagination-with-dots\" is a highly customizable and responsive pagination library designed for React applications. This package enables easy integration of pagination in your projects, allowing you to create dynamic and paginated lists with minimal effort. Whether you're dealing with large datasets or creating a simple paginated data grid, this React Pagination Package offers flexibility and simplicity.

With full control over pagination navigation, customizable labels, and support for React Hooks, this pagination UI component allows you to seamlessly paginate and manage data in any React-based application. Ideal for developers looking to build responsive pagination components that adapt to various layouts and devices.

Use this library to add powerful and intuitive pagination features to your React project, enhancing the user experience and improving data accessibility with easy React pagination.

## Demo

[DEMO](https://stackblitz.com/edit/vitejs-vite-3kfukr?file=src%2FApp.tsx)

## Installation

Install my-project with npm

```bash
npm i react-pagination-with-dots
```

## Usage/Examples Pagination using API

```javascript
import "react-pagination-with-dots/dist/index.css";
import Pagination  from "rc-pagination-component";
function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
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

import "react-pagination-with-dots/dist/index.css";
import Pagination  from "rc-pagination-component";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(books);
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
| currentPage         | variable   | currentPage    | pass useState variable                                                              |
| setCurrentPage   | function     | function   | pass useState function  |
| totalPages      | variable   | 0 | if you use API for getting data. total pages value are required and must be in number  |
| breakLabel      | string     | ...    | pass any string                 |
| data      | array | []            | if you use demo data                                                                   |
| setData     | function     | function    | pass useState function                 |
| activeClass               | string     | activeClass               | design active filed                                                     |
| paginationClass        | string     | paginationClass            | add design pagination item filed                                                                   |
| paginationItemClass   | string     | paginationItemClass            | design pagination item filed                                                                  |
| disabledClass       | string     | disabledClass            | design pagination disabled button                                                  |                                                                |
| breakLabelClass      | string     | breakLabelClass            | design pagination break label                                                                   |
| buttonClass | string     | buttonClass            | design pagination  buttons                                                                   |
| prevClass           | string | prevClass             | design pagination prev button                                                        |
| nextClass           | string     | nextClass             | design pagination next button                                                          |
| prev     | string or react component | prev             | change the value of prev button                                                           |
| next     | string or react component | next             | change the value of next button                                                           |
| limit      | number | 10             | pass limit if you pass data manually                                                                   |
| paginationStyleType      | string | default             | default or box                                                                   |

# Hi, I'm Rayan Hossain! 👋

## 🚀 About Me

Passionate MERN Stack Developer || Building Innovative Web Solutions with MongoDB || Express JS || React JS || Next JS || Node.js || Mentor

## 🔗 Links

[![github](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/rayan2228)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rayan2228/)

## License

This software is free to use under the MIT license. See the [LICENSE file](https://choosealicense.com/licenses/mit/) for license text and copyright information.
