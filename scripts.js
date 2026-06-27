document.addEventListener("DOMContentLoaded", () => {
    const btnAndroid = document.getElementById("btnAndroid");
    const btnIos = document.getElementById("btnIos");
    const instructionsSection = document.getElementById("instructionsSection");
    const instructionsAndroid = document.getElementById("instructionsAndroid");
    const instructionsIos = document.getElementById("instructionsIos");
    const closeBtns = document.querySelectorAll(".close-btn");

    if (!btnAndroid || !btnIos || !instructionsSection || !instructionsAndroid || !instructionsIos) {
        console.error("No se encontraron los elementos necesarios en el DOM.");
        return;
    }

    // Función para abrir la sección de instrucciones con la plataforma correcta
    const openInstructions = (platform) => {
        // Desactivar ambos primero
        instructionsAndroid.classList.remove("active");
        instructionsIos.classList.remove("active");

        if (platform === "android") {
            instructionsAndroid.classList.add("active");
        } else if (platform === "ios") {
            instructionsIos.classList.add("active");
        }

        // Abrir contenedor general
        instructionsSection.classList.add("open");

        // Scroll suave hacia la sección de instrucciones (especialmente útil en móviles)
        setTimeout(() => {
            instructionsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
    };

    // Función para cerrar las instrucciones
    const closeInstructions = () => {
        instructionsSection.classList.remove("open");
        
        // Esperamos a que termine la animación de cerrado antes de ocultar el elemento
        setTimeout(() => {
            instructionsAndroid.classList.remove("active");
            instructionsIos.classList.remove("active");
        }, 400);
    };

    // Listeners para los botones principales
    btnAndroid.addEventListener("click", () => openInstructions("android"));
    btnIos.addEventListener("click", () => openInstructions("ios"));

    // Listeners para los botones de cerrar (la cruz de los modales)
    closeBtns.forEach(btn => {
        btn.addEventListener("click", closeInstructions);
    });

    // Cerrar si se presiona la tecla Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && instructionsSection.classList.contains("open")) {
            closeInstructions();
        }
    });
});
