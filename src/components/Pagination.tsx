import { FC, ReactNode, useEffect } from "react";
import usePagination from "../hooks/usePagination";
import "../pagination.css";
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
  paginationContainerClass?: string;
  paginationInfoClass?: string;
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
  totalData?: number;
  limit?: number;
  paginationStyleType?: "default" | "box";
  // paginationThemeType?: paginationThemeType;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages = 0,
  breakLabel = "...",
  setCurrentPage,
  paginationContainerClass,
  paginationInfoClass,
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
  totalData = 0,
  limit = 10,
  setData = () => {},
  paginationStyleType = "default",
  // paginationThemeType = "dark",
}) => {
  if (data?.length) {
    totalPages = Math.ceil(data?.length / limit);
    totalData = data?.length || 0;
  } else if (totalData) {
    totalPages = Math.ceil(totalData / limit);
  }
  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, totalData);
  const paginationRange = usePagination(totalPages, currentPage, breakLabel);

  useEffect(() => {
    if (data?.length) {
      const currentBooks = data.slice(
        (currentPage - 1) * limit,
        currentPage * limit
      );
      setData(currentBooks);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage, data?.length, limit]);

  if (paginationRange.length < 2) {
    return null;
  }

  return (
    <div className={`paginationContainerClass ${paginationContainerClass}`}>
      <ul className={`paginationClass ${paginationClass}`}>
        <button
          className={` ${buttonClass} ${prevClass} ${
            paginationStyleType === "box" ? "buttonClassBox" : "buttonClass"
          } ${currentPage === 1 ? ` disabledClass ${disabledClass}` : ""}`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {prev}
        </button>

        {paginationRange.map((pageNumber, idx) => {
          if (pageNumber === breakLabel) {
            return (
              <li key={idx} className={`breakLabelClass ${breakLabelClass}`}>
                {breakLabel}
              </li>
            );
          }

          return (
            <li
              key={idx}
              className={`${paginationItemClass} ${
                paginationStyleType === "box"
                  ? "paginationItemClassBox"
                  : "paginationItemClass"
              } ${
                pageNumber === currentPage ? `activeClass ${activeClass}` : ""
              }`}
              onClick={() => setCurrentPage(Number(pageNumber))}
            >
              {pageNumber}
            </li>
          );
        })}

        <button
          className={`${buttonClass} ${nextClass} ${
            paginationStyleType === "box" ? "buttonClassBox" : "buttonClass"
          } ${
            currentPage === totalPages ? `disabledClass ${disabledClass}` : ""
          }`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {next}
        </button>
      </ul>
      <p className={`paginationInfoClass ${paginationInfoClass}`}>
        Showing {start} to {end} of {totalData}
      </p>
    </div>
  );
};

export default Pagination;
