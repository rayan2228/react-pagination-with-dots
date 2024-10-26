

const usePagination = (
  totalPages: number ,
  currentPage: number,
  breakLabel: string
) => {
  const siblingCount: number = 1;

  const range = (start: number, end: number) : number[] => {
    return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
  };
  
  if (totalPages <= 5) {
    return range(1, totalPages);
  }

  const showLeftDots = currentPage > siblingCount + 2;
  const showRightDots = currentPage < totalPages - siblingCount - 1;

  if (!showLeftDots && showRightDots) {
    return [...range(1, 3 + siblingCount), breakLabel, totalPages];
  }

  if (showLeftDots && !showRightDots) {
    return [1, breakLabel, ...range(totalPages - 2 - siblingCount, totalPages)];
  }

  if (showLeftDots && showRightDots) {
    return [
      1,
      breakLabel,
      ...range(currentPage - siblingCount, currentPage + siblingCount),
      breakLabel,
      totalPages,
    ];
  }

  return [];
};

export default usePagination