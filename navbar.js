        // Toggle mobile menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const hamburger = document.getElementById('hamburgerIcon');
            const close = document.getElementById('closeIcon');
            
            menu.classList.toggle('hidden');
            hamburger.classList.toggle('hidden');
            close.classList.toggle('hidden');
        }

        // Desktop dropdown toggle
        document.getElementById('schoolsDropdown').addEventListener('click', function(e) {
            e.stopPropagation();
            const menu = document.getElementById('schoolsMenu');
            const icon = document.getElementById('dropdownIcon');
            menu.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });

        // Mobile dropdown toggle
        document.getElementById('mobileSchoolsDropdown').addEventListener('click', function(e) {
            e.stopPropagation();
            const menu = document.getElementById('mobileSchoolsMenu');
            const icon = document.getElementById('mobileDropdownIcon');
            menu.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            const desktopMenu = document.getElementById('schoolsMenu');
            const desktopIcon = document.getElementById('dropdownIcon');
            const mobileMenu = document.getElementById('mobileSchoolsMenu');
            const mobileIcon = document.getElementById('mobileDropdownIcon');
            
            if (!desktopMenu.classList.contains('hidden')) {
                desktopMenu.classList.add('hidden');
                desktopIcon.classList.remove('rotate-180');
            }
        });

        // Close dropdown menu after clicking a link
        document.querySelectorAll('#schoolsMenu a, #mobileSchoolsMenu a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('schoolsMenu').classList.add('hidden');
                document.getElementById('dropdownIcon').classList.remove('rotate-180');
                document.getElementById('mobileSchoolsMenu').classList.add('hidden');
                document.getElementById('mobileDropdownIcon').classList.remove('rotate-180');
                
                // Close mobile menu
                const mobileMenuMain = document.getElementById('mobileMenu');
                if (!mobileMenuMain.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    const menu = document.getElementById('mobileMenu');
                    if (!menu.classList.contains('hidden')) {
                        toggleMobileMenu();
                    }
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });