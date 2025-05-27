/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);

  // navbar toggle
  const toggleButton = document.getElementById("navbar-toggler");
  const navbar = document.getElementById("navbarNav");

  toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
  });
})();
