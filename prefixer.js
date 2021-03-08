const projectName = "/SIO-2100-blog";
const user = "https://nalf3in.github.io";

function prefixLinks() {
  console.log("it works !")
  let links = document.links;
  for (var i = 0, iLen = links.length; i < iLen; i++) {
    // use of \/\/ is to avoid SO posting rules
    const currentLink = links[i].href;

    if (currentLink.indexOf(user) != -1) {
      links[i].href = links[i].href.replace(user, user + projectName);
    }
    //links[i].href = prefix + links[i].href;
  }
}
