document.addEventListener("DOMContentLoaded", function () {
  // 모든 p-tab--line 요소를 선택
  const tabLines = document.querySelectorAll(".p-tab--line");

  tabLines.forEach((tabLine) => {
    const tabItems = tabLine.querySelectorAll(".p-tab__item");
    const indicator = tabLine.querySelector(".p-tab__indicator");

    // 초기 상태 설정
    const firstTab = tabItems[0];
    firstTab.setAttribute("aria-selected", "true");
    firstTab.classList.add("p-tab__item--selected");
    updateIndicator(firstTab, indicator);

    tabItems.forEach((tab) => {
      tab.addEventListener("click", function () {
        // 현재 p-tab--line 내의 모든 탭의 상태 초기화
        tabItems.forEach((t) => {
          t.setAttribute("aria-selected", "false");
          t.classList.remove("p-tab__item--selected");
        });

        // 클릭된 탭 활성화
        this.setAttribute("aria-selected", "true");
        this.classList.add("p-tab__item--selected");

        // 인디케이터 업데이트
        updateIndicator(this, indicator);
      });
    });
  });

  function updateIndicator(selectedTab, indicator) {
    const tabRect = selectedTab.getBoundingClientRect();
    const tabListRect = selectedTab.parentElement.getBoundingClientRect();

    indicator.style.width = `${tabRect.width}px`;
    indicator.style.left = `${tabRect.left - tabListRect.left}px`;
    indicator.style.bottom = "0";
  }
});
