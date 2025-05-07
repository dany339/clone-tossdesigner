document.addEventListener("DOMContentLoaded", function () {
  // 모든 p-tab--line 요소를 선택
  const designerTab = document.querySelectorAll(".designer-tab");
  const faqTab = document.querySelectorAll(".faq-tab");

  designerTab.forEach((designerTab) => {
    const tabItems = designerTab.querySelectorAll(".p-tab__item");
    const indicator = designerTab.querySelector(".p-tab__indicator");
    const desiugnerTabCon = document.querySelectorAll(".designer-tab-con");

    // 초기 상태 설정
    const firstTab = tabItems[0];
    firstTab.setAttribute("aria-selected", "true");
    firstTab.classList.add("p-tab__item--selected");
    updateIndicator(firstTab, indicator);

    // 초기 컨텐츠 표시
    desiugnerTabCon.forEach((con, index) => {
      con.style.display = index === 0 ? "block" : "none";
    });

    tabItems.forEach((tab, index) => {
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

        // 해당하는 컨텐츠 표시
        desiugnerTabCon.forEach((con, i) => {
          con.style.display = i === index ? "block" : "none";
        });
      });
    });
  });

  faqTab.forEach((faqTab) => {
    const tabItems = faqTab.querySelectorAll(".p-tab__item");
    const indicator = faqTab.querySelector(".p-tab__indicator");
    const faqTabCon = document.querySelectorAll(".faq-tab-con");

    // 초기 상태 설정
    const firstTab = tabItems[0];
    firstTab.setAttribute("aria-selected", "true");
    firstTab.classList.add("p-tab__item--selected");
    updateIndicator(firstTab, indicator);

    // 초기 컨텐츠 표시
    faqTabCon.forEach((con, index) => {
      con.style.display = index === 0 ? "block" : "none";
    });

    tabItems.forEach((tab, index) => {
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

        // 해당하는 컨텐츠 표시
        faqTabCon.forEach((con, i) => {
          con.style.display = i === index ? "block" : "none";
        });
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

AOS.init({
  once: true,
});
