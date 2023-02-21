const initSidebarListener = () => {
    const sidebar = document.querySelector(".sidebar");
    const sidebarButton = document.querySelector(".sidebar__btn");
    const sidebarBlock = document.querySelector(".sidebar__block");

    if (sidebar === null) {
        throw new Error(`Sorry, element with requested class not found`);
    } else {
        const switchSidebarState = () => {
            sidebarButton.classList.toggle("sidebar_opened");
            sidebarBlock.classList.toggle("sidebar_opened");
        };

        const handlerSidebar = (event) => {
            const target = event.target;
            const isSidebar = target === sidebar || sidebar.contains(target);
            const isSidebarButton = target === sidebarButton;
            const isSidebarBlock = sidebarBlock.classList.contains("sidebar_opened");

            if (!isSidebar && !isSidebarButton && isSidebarBlock) {
                return switchSidebarState();
            } else if (!isSidebar && !isSidebarBlock && !isSidebarButton) {
                return document.removeEventListener("click", handlerSidebar);
            }
        };

        sidebarButton.addEventListener("click", (event) => {
            event.stopPropagation();
            switchSidebarState();
            document.addEventListener("click", handlerSidebar);
        });
    }
};

initSidebarListener();