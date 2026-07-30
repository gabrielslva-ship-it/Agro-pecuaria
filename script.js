// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MENU RESPONSIVO (MOBILE)
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            
            // Muda o ícone entre o "hambúrguer" e o "X"
            if (navMenu.classList.contains("active")) {
                menuToggle.textContent = "✕";
            } else {
                menuToggle.textContent = "☰";
            }
        });
    }

    // 2. ROLAGEM SUAVE AO CLICAR NOS LINKS
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Evita o pulo brusco padrão
            
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Fecha o menu mobile se ele estiver aberto após o clique
                if (navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                    menuToggle.textContent = "☰";
                }

                // Faz a rolagem suave até a seção
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // 3. EFEITO NO CABEÇALHO AO ROLAR A PÁGINA (SCROLL)
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#142b15"; // Fica um verde levemente mais escuro ao rolar
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
        } else {
            header.style.backgroundColor = "#1e3f20"; // Volta à cor original
            header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        }
    });

});