function KanbasNavigation() {
  const links = [
    {
      name: "Account",
      url: "/Kanbas/Account/Navigation/index.html",
    },
    {
      name: "Dashboard",
      url: "/Kanbas/Dashboard/screen.html",
    },
    {
      name: "Courses",
      url: "/Kanbas/Courses/Home/screen.html",
    },
    {
      name: "Calendar",
      url: "#",
    },
    {
      name: "Inbox",
      url: "#",
    },
    {
      name: "Help",
      url: "#",
    },
    {
      name: "Commons",
      url: "#",
    },
    {
      name: "ChapGPT",
      url: "#",
    },
  ];
  return `
        <ul style="background-color: black; padding-left: 0px; list-style-type: none">
        ${links
          .map((link) => {
            return `
            <li style="padding: 20px"><a style="font-family: arial; color: white; text-decoration: none" href="${link.url}">${link.name}</a></li>
            `;
          })
          .join("")}

      </ul>
        `;
}
