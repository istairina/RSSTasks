let pageNumCurr = 1;

export function setPageNum(pageNum: number) {
  pageNumCurr = pageNum;
}

export function getPageNum() {
  return pageNumCurr;
}
