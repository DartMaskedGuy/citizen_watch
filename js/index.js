window.onload = () => {
    $(".dashboard").show();
    $(".safety-tips").hide();
    $(".profile").hide();
    $(".register").hide();

    $(".dashboard-icon").click(function () {
        $(".dashboard").show();
        $(".safety-tips").hide();
        $(".profile").hide();
    })

    $(".safety-tips-icon").click(function () {
        $(".dashboard").hide();
        $(".safety-tips").show();
        $(".profile").hide();
    })

    $(".profile-icon").click(function () {
        $(".dashboard").hide();
        $(".safety-tips").hide();
        $(".profile").show();
    })

    $(".gotoregister").click(function () {
        $(".login").hide();
        $(".register").show();
    })

    $(".gotologin").click(function () {
        $(".login").show();
        $(".register").hide();
    })

    // Navbar
    const navbarItem = document.querySelectorAll('.navbar-item');

    // Remove active class from all menu items
    const changeActiveItem = () => {
        navbarItem.forEach(item => {
            item.classList.remove('active');
        })
    }

    navbarItem.forEach(item => {
        item.addEventListener('click', () => {
            changeActiveItem();
            item.classList.add('active');
        })
    })

    // Search Box
    let openSearchBox = document.querySelector('.open-search');
    let searchWrapper = document.querySelector('.search-wrapper');
    let closeSearch = document.querySelector('.close-search');

    // Report
    let openReport = document.querySelector('.open-report');
    let sendReportWrapper = document.querySelector('.send-report-wrapper');
    let closeReport = document.querySelector('.close-report');

    // Notifications
    let openNotis = document.querySelector('.open-notis');
    let notisWrapper = document.querySelector('.notification-wrapper');
    let closeNotis = document.querySelector('.close-notis');

    openSearchBox.onclick = () => {
        searchWrapper.style.display = 'block';
    }
    closeSearch.onclick = () => {
        searchWrapper.style.display = 'none';
    }

    openReport.onclick = () => {
        sendReportWrapper.style.display = 'block';
    }
    closeReport.onclick = () => {
        sendReportWrapper.style.display = 'none';
    }

    openNotis.onclick = () => {
        notisWrapper.style.display = 'block';
    }
    closeNotis.onclick = () => {
        notisWrapper.style.display = 'none';
    }
}