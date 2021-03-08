// I need to use this thing because relative links do not work correctly on project pages

const projectName = "/SIO-2100-blog";
const user = "https://nalf3in.github.io";

function prefixLinks() {
  let links = document.links;
  for (var i = 0, iLen = links.length; i < iLen; i++) {
    // use of \/\/ is to avoid SO posting rules
    const currentLink = links[i].href;

    if (currentLink.indexOf(user) != -1) {
      links[i].href = links[i].href.replace(user, user + projectName);
    }
  }
}
