function tabs(tabsSelector, tabsParentSelector,tabsContentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsParent = document.querySelector(tabsParentSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
    })
    tabs.forEach(item => {
        item.classList.remove(activeClass.slice(1));
    })
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass.slice(1));
    }
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains(activeClass.slice(1))){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
    hideTabContent();
    showTabContent();
}

export default tabs;