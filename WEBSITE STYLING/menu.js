function loadMenu() {
    const menuHTML = `
    <!-- Header -->
        <header class="navbar">
            <div class="header-left">
                <button class="menu-toggle" id="menuToggle">&#9776;</button>
                <h1 class="site-title">${document.title}</h1>
            </div>
        </header>

        <!-- Overlay -->
        <div id="overlay"></div>

        <!-- Side Menu -->
        <nav class="side-menu" id="sideMenu">
            <button class="close-btn" id="closeMenu">&times;</button>

            <h3 class="menu-header h3-first" >Home</h3>
                <div class="collapsible-links">
                    <a  href="../../index.html">Welcome!</a>
                </div>

            <h3 class="menu-header " >Neural Networks</h3>
                <div class="collapsible-links">
                    <a  href="../../PYTHON/Neural Networks/Neural Network.html">Guide to Neural Networks</a>
                    <a href="../../PYTHON/Neural Networks/project.html">Project Time!</a>
                    <a  href="../../PYTHON/Neural Networks/project resources.html">Project Resources</a>
                    <a  href="../../PYTHON/Neural Networks/Major companies contributions.html">Advances in the Field</a>
                </div>

            <h3 class="menu-header" >Large Language Models</h3>
            <div class="collapsible-links">
                <a  href="../../PYTHON/LLM/LLM.html">Guide to Large Language Models</a>
                <a href="../../PYTHON/LLM/project.html">Project Time!</a>
                <a  href="../../PYTHON/LLM/project resources.html">Project Resources</a>
                <a  href="../../PYTHON/LLM/Major companies contributions.html">Advances in the Field</a>
            </div>            
            
         <h3 class="menu-header" >Natural Language Processing</h3>
            <div class="collapsible-links">
                <a  href="../../PYTHON/NLP/NLP.html">Guide to Natural Language Processing</a>
                <a href="../../PYTHON/NLP/project.html">Project Time!</a>
                <a  href="../../PYTHON/NLP/project resources table.html">Project Resources</a>
                <a  href="../../PYTHON/NLP/Major companies contributions.html">Advances in the Field</a>
            </div>  

         <h3 class="menu-header" >Blockchain Technology</h3>
            <div class="collapsible-links">
                <a  href="../../C++/Blockchain/blockchain.html">Guide to Blockchain Technology</a>
                <a  href="../../C++/Blockchain/further mining and validation.html">Deeper Dive into Mining and Validation</a>
                <a  href="../../C++/Blockchain/mining animation.html">Mining Animation</a>
                <a  href="../../C++/Blockchain/validation animation.html">Validation Animation</a>
                <a  href="../../C++/Blockchain/project.html">Project Time!</a>
                <a  href="../../C++/Blockchain/Major companies contributions.html">Advances in the Field</a>

            </div>  
        </nav>
    `;
    
    // Insert menu at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', menuHTML);
    
    // Initialize menu functionality
    initializeMenu();
    setDarkMode();
    initializeCollapsibleLinks();
    
}

function initializeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeMenu = document.getElementById('closeMenu');
    const overlay = document.getElementById('overlay');

    // Open menu
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
 
    });

    // Close menu function
    const closeMenuFunction = () => {
        sideMenu.classList.remove('open');
        overlay.classList.remove('show');
        // Restore body scroll
        document.body.style.overflow = '';
        resetCollapsibleLinks();
    };

    // Close menu events
    closeMenu.addEventListener('click', closeMenuFunction);
    overlay.addEventListener('click', closeMenuFunction);

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenuFunction();
        }
    });
}

//  dark mode 
function setDarkMode() {
    document.documentElement.setAttribute("data-theme", "dark");
}

function toggleCollapsible(header) {
  const content = header.nextElementSibling;
  header.classList.toggle("active");

  if (header.classList.contains("active")) {
    // OPENING
    content.style.display = "block"; // ensure visible
    const height = content.scrollHeight + "px";

    // animate
    requestAnimationFrame(() => {
      content.style.maxHeight = height;
    });
  } else {
    // CLOSING
    content.style.maxHeight = content.scrollHeight + "px"; // lock current height
    requestAnimationFrame(() => {
      content.style.maxHeight = "0";
    });

    content.addEventListener("transitionend", function hideIt() {
      if (!header.classList.contains("active")) {
        content.style.display = "none";
      }
      content.removeEventListener("transitionend", hideIt);
    });
  }
}

function initializeCollapsibleLinks() {
  const headers = document.querySelectorAll("h3.menu-header");

  headers.forEach(header => {
    const content = header.nextElementSibling;

    if (content && content.classList.contains("collapsible-links")) {
      // start closed
      content.style.display = "none";
      content.style.overflow = "hidden"; // keeps animation clean
      content.style.maxHeight = "0";
      content.style.transition = "max-height 0.3s ease";

      header.addEventListener("click", () => toggleCollapsible(header));
    }
  });
}

// Reset all collapsible links to closed state
function resetCollapsibleLinks() {
    const headers = document.querySelectorAll("h3.menu-header");
    
    headers.forEach(header => {
        const content = header.nextElementSibling;
        
        if (content && content.classList.contains("collapsible-links")) {
            // Remove active class from header
            header.classList.remove("active");
            
            // Close the content immediately (no animation when resetting)
            content.style.maxHeight = "0";
            content.style.display = "none";
        }
    });
}


// Load menu when page loads

document.addEventListener('DOMContentLoaded', loadMenu);

