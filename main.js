// main.js
document.addEventListener('DOMContentLoaded', function() {
    const sidebarElements = document.querySelectorAll('.sidebar');
    const originalPositions = [];

    // Store the original parents and next siblings
    sidebarElements.forEach(function(sidebarElement, index) {
        originalPositions[index] = {
            parent: sidebarElement.parentNode,
            nextSibling: sidebarElement.nextSibling
        };
    });

    function moveSidebars() {
        const sidebarContent = document.querySelector('.sidebarContent');
        if (window.innerWidth > 900) {
            // Move sidebars into sidebar-content
            sidebarElements.forEach(function(sidebarElement) {
                if (sidebarElement.parentNode !== sidebarContent) {
                    sidebarContent.appendChild(sidebarElement);
                }
            });
        } else {
            // Move sidebars back to their original positions
            sidebarElements.forEach(function(sidebarElement, index) {
                const { parent, nextSibling } = originalPositions[index];
                if (sidebarElement.parentNode !== parent) {
                    if (nextSibling) {
                        parent.insertBefore(sidebarElement, nextSibling);
                    } else {
                        parent.appendChild(sidebarElement);
                    }
                }
            });
        }
    }

    // Initial call
    moveSidebars();

    // Add event listener for resize
    window.addEventListener('resize', moveSidebars);
});