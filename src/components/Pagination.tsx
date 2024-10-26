import { FC, ReactNode, useEffect } from "react";
import usePagination from "../hooks/usePagination";
import "../pagination.css";
enum paginationStyleType {
  default = "default",
  box = "box",
}
// enum paginationThemeType {
//   dark = "dark",
//   light = "light",
// }
interface PaginationProps {
  currentPage: number;
  totalPages?: number;
  breakLabel?: string;
  setCurrentPage: (page: number) => void;
  setData?: (data: any) => void;
  activeClass?: string;
  paginationItemClass?: string;
  paginationClass?: string;
  disabledClass?: string;
  breakLabelClass?: string;
  buttonClass?: string;
  nextClass?: string;
  prevClass?: string;
  prev?: ReactNode | string;
  next?: ReactNode | string;
  data?: any[];
  limit?: number;
  paginationStyleType?: paginationStyleType;
  // paginationThemeType?: paginationThemeType;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages = 20,
  breakLabel = "...",
  setCurrentPage,
  activeClass,
  paginationItemClass,
  paginationClass,
  disabledClass,
  breakLabelClass,
  prevClass,
  nextClass,
  buttonClass,
  prev = "prev",
  next = "next",
  data,
  limit = 10,
  setData = () => {},
  paginationStyleType = "default",
  // paginationThemeType = "dark",
}) => {
  switch (paginationStyleType) {
    case "box":
      activeClass = "activeClassBox";
      paginationItemClass = "paginationItemClassBox";
      paginationClass = "paginationClassBox";
      disabledClass = "disabledClassBox";
      breakLabelClass = "breakLabelClassBox";
      prevClass = "prevClassBox";
      nextClass = "nextClassBox";
      buttonClass = "buttonClassBox";
      break;
    default:
      activeClass = "activeClass";
      paginationItemClass = "paginationItemClass";
      paginationClass = "paginationClass";
      disabledClass = "disabledClass";
      breakLabelClass = "breakLabelClass";
      prevClass = "prevClass";
      nextClass = "nextClass";
      buttonClass = "buttonClass";
      break;
  }

  if (data?.length) totalPages = Math.ceil(data?.length / limit);

  const paginationRange = usePagination(totalPages, currentPage, breakLabel);

  useEffect(() => {
    if (data?.length) {
      const currentBooks = data.slice(
        (currentPage - 1) * limit,
        currentPage * limit
      );
      setData(currentBooks);
    }
  }, [currentPage, data?.length, limit]);

  if (paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className={`${paginationClass}`}>
      <button
        className={`${buttonClass} ${prevClass} ${
          currentPage === 1 ? `${disabledClass}` : ""
        }`}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {prev}
      </button>

      {paginationRange.map((pageNumber, idx) => {
        if (pageNumber === breakLabel) {
          return (
            <li key={idx} className={`${breakLabelClass}`}>
              {breakLabel}
            </li>
          );
        }

        return (
          <li
            key={idx}
            className={`${paginationItemClass} ${
              pageNumber === currentPage ? `${activeClass}` : ""
            }`}
            onClick={() => setCurrentPage(Number(pageNumber))}
          >
            {pageNumber}
          </li>
        );
      })}

      <button
        className={`${buttonClass} ${nextClass} ${
          currentPage === totalPages ? `${disabledClass}` : ""
        }`}
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {next}
      </button>
    </ul>
  );
};

export default Pagination;
