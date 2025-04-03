document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();

            try {
                const targetId = anchor.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (!targetElement) throw new Error(`Sección '${targetId}' no encontrada.`);

                targetElement.scrollIntoView({ behavior: "smooth" });
            } catch (error) {
                console.error("Error al desplazarse a la sección:", error.message);
                alert("Sección no disponible. Verifica que el enlace esté bien escrito.");
            }
        });
    });
});
