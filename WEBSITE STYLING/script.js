/* ====== COLLAPSIBLE BOXES ====== */

document.addEventListener("DOMContentLoaded", function () {
  var collapsibleHeaders = document.querySelectorAll('.collapsible');

  collapsibleHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      header.classList.toggle('active');

      var content = header.nextElementSibling;

      if (header.classList.contains("active")) {
        // Opening
        content.style.display = "block"; // make it visible first
        let height = content.scrollHeight + "px";
        content.style.maxHeight = height;
      } else {
        // Closing
        content.style.maxHeight = content.scrollHeight + "px"; // set current height
        setTimeout(() => {
          content.style.maxHeight = "0";
        }, 10);

        // After transition ends → hide completely
        content.addEventListener("transitionend", function hideIt() {
          if (!header.classList.contains("active")) {
            content.style.display = "none";
          }
          content.removeEventListener("transitionend", hideIt);
        });
      }
    });
  });
});


/* ====== TOOLTIP  BOXES ====== */

document.querySelectorAll('.tooltip').forEach(el => {
    let tooltipDiv;

    el.addEventListener('mouseenter', () => {
        const tooltipText = el.querySelector('.tooltiptext');
        if (!tooltipText) return;

        // Create new tooltip element
        tooltipDiv = document.createElement('div');
        tooltipDiv.className = 'floating-tooltip';
        tooltipDiv.innerHTML = tooltipText.innerHTML;
        document.body.appendChild(tooltipDiv);

        // Get position of hovered element
        const rect = el.getBoundingClientRect();
        const tooltipRect = tooltipDiv.getBoundingClientRect();

        // Position tooltip above or below based on space
        let top = rect.top - tooltipRect.height - 8; // above by default
        if (top < 0) top = rect.bottom + 8; // if not enough space above, show below

        let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
        // Prevent tooltip from going off screen
        left = Math.max(8, Math.min(left, window.innerWidth - tooltipRect.width - 8));

        // Apply position
        tooltipDiv.style.top = `${top + window.scrollY}px`;
        tooltipDiv.style.left = `${left + window.scrollX}px`;
    });

    el.addEventListener('mouseleave', () => {
        if (tooltipDiv) {
            tooltipDiv.remove();
            tooltipDiv = null;
        }
    });
});


// Auto-stagger animation for any number of cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.collapsible');
    
    cards.forEach((card, index) => {
        const delay = (index + 1) * 0.1; // 0.1s between each card
        card.style.animation = `slideUp 0.6s ease-out ${delay}s forwards`;
    });

    // Handle references section
    const references = document.querySelector('.nocollapse-content');
    if (references) {
        const totalCards = cards.length;
        const referencesDelay = (totalCards + 1) * 0.1;
        references.style.animation = `slideUp 0.6s ease-out ${referencesDelay}s forwards`;
    }
});