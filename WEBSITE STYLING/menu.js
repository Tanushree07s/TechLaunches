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
    });

    // Close menu
    closeMenu.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        overlay.classList.remove('show');
        resetCollapsibleLinks();
    });

    // Close menu on overlay click
    overlay.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        overlay.classList.remove('show');
        resetCollapsibleLinks();
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            sideMenu.classList.remove('open');
            overlay.classList.remove('show');
            resetCollapsibleLinks();
        }
    });
}

function setDarkMode() {
    document.documentElement.setAttribute("data-theme", "dark");
}


function toggleCollapsible(header) {
    header.classList.toggle('active');
    
    var content = header.nextElementSibling;
    var isExpanded = content.classList.contains('expanded');

    if (isExpanded) {
        // COLLAPSE: Animate from current height to 0
        content.style.height = content.scrollHeight + 'px';
        // Force reflow
        content.offsetHeight;
        content.style.height = '0px';
        content.classList.remove('expanded');
        
    } else {
        // EXPAND: Animate from 0 to full height
        content.style.height = '0px';
        content.classList.add('expanded');
        // Force reflow
        content.offsetHeight;
        content.style.height = content.scrollHeight + 'px';
        
        // Reset to auto after transition for responsive behavior
        setTimeout(function() {
            if (content.classList.contains('expanded')) {
                content.style.height = 'auto';
            }
        }, 300); 
    }
}

function initializeCollapsibleLinks() {
    var headers = document.querySelectorAll('h3.menu-header');
    
    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            toggleCollapsible(this);
        });
        
        // Ensure all .collapsible-links start collapsed
        var content = header.nextElementSibling;
        if (content && content.classList.contains('collapsible-links')) {
            content.style.height = '0px';
            content.classList.remove('expanded');
            header.classList.remove('active');
        }
    });
}

function resetCollapsibleLinks() {
    var collapsibleContents = document.querySelectorAll('h3.menu-header + .collapsible-links');
    collapsibleContents.forEach(function(content) {
        content.style.transition = 'none';
        content.style.height = '0px';
        content.classList.remove('expanded');
        
        var header = content.previousElementSibling;
        if (header) {
            header.classList.remove('active');
        }
        
        setTimeout(function() {
            content.style.transition = '';
        }, 10);
    });
}

// Load menu when page loads

document.addEventListener('DOMContentLoaded', loadMenu);

