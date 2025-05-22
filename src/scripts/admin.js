document.addEventListener("DOMContentLoaded", () => {
  const alert = document.getElementById("alert");
  const tabButtons = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");
  const inputs = document.querySelectorAll("input, textarea");
  let hasUnsavedChanges = false;

  // Cambiar pestaña
  tabButtons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      tabContents.forEach(c => (c.style.display = "none"));
      tabContents[idx].style.display = "block";
    });
  });

  // Detectar cambios
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      hasUnsavedChanges = true;
      alert.classList.remove("hidden");
    });
  });

  // Descartar
  document.querySelector("button.outline.small:contains('Descartar')")?.addEventListener("click", () => {
    location.reload();
  });

  // Guardar cambios
  document.querySelector("button.primary.small:contains('Guardar')")?.addEventListener("click", async () => {
    const data = {};
    inputs.forEach(input => {
      data[input.id || input.placeholder] = input.value;
    });

    try {
      const response = await fetch("/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        hasUnsavedChanges = false;
        alert.classList.add("hidden");
        alert(" Cambios guardados correctamente.");
      } else {
        alert(" Error al guardar los cambios.");
      }
    } catch (err) {
      console.error(err);
      alert(" Fallo al conectar con el servidor.");
    }
  });

  // Mostrar solo primer tab
  tabContents.forEach((c, i) => (c.style.display = i === 0 ? "block" : "none"));
});
