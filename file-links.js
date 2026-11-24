document.querySelectorAll('a[href^="assets/"], a[href^="/assets/"]').forEach(link => {
  link.target = "_blank";
  link.relList.add("noopener");
});
