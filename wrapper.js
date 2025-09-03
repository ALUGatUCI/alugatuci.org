function insertWrapper() {
    const pages = new Map([
        ["home", "Home"],
        ["about", "About Us"],
        ["involved", "Get Involved"],
        ["gallery", "Gallery"],
        ["news", "News"],
        ["faq", "FAQ"],
        ["contact", "Contact"]
    ]);
    const pathname = window.location.pathname;
    const i = pathname.lastIndexOf("/");
    const j = pathname.lastIndexOf(".");
    const currentPage = pathname.slice(i + 1, (j > i) ? j : pathname.size());
    function generateNav() {
        let nav = `<nav class="topnav">`;
        for(const [page, name] of pages)
            if(page == currentPage)
                nav += `<a href="${page}.html" class="active">${name}</a>`;
            else
                nav += `<a href="${page}.html">${name}</a>`;
        return nav + `</nav>`;
    }

    // <head>
    document.head.insertAdjacentHTML("afterbegin", `
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${pages.get(currentPage)} - ALUG@UCI</title>
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="icon" type="image/png" href="assets/images/ALUG@UCI_icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />

        <script defer data-domain="alugatuci.org" src="https://plausible.io/js/script.outbound-links.js"></script>
        <script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
    `);

    window.addEventListener("load", () => {
        // Header
        document.body.insertAdjacentHTML("afterbegin", `
            <a href="home.html" style="display: block; width: fit-content; margin: 0 auto;">
              <img
              src="assets/images/ALUG@UCI_Logo.png"
              alt="ALUG@UCI Logo"
              class="center-logo"
              style="max-width:100%; height:auto; display:block;"
              />
            </a>
            <br>
            ${generateNav()}
            <br>
        `);

        // Footer
        document.body.insertAdjacentHTML("beforeend", `
            <hr>
            <p>Made with ❤️ by Linux users, for Linux users </p>
            <p>Last updated: August 31st, 2025</p>
        `);
    });
}

insertWrapper();
