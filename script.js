const menu = document.querySelector(".menu"),
  nav = document.querySelector("nav"),
  modal = document.querySelector("#modal"),
  content = document.querySelector("#modal-content");
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", open);
  nav.classList.toggle("open", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }),
);
const notes = {
  research: [
    "Research in progress",
    "The research brings together merit-badge traditions, national park graphics, patient experience, and conversations about chronic illness. The Oliver Patch Project provides a useful reference for personalization and ongoing encouragement. Badges of Honor explores an adult wilderness metaphor and personally defined milestones.",
    "Next steps: document the bibliography, verify quantitative claims, and test concepts directly with patients and caregivers.",
  ],
  brand: [
    "Brand direction",
    "The intended brand typefaces are Zesty Spirit for headlines, National Park Medium for body copy, and Alchosti Regular for display features. This first website uses system-font fallbacks until licensed web-font files are supplied.",
    "The palette shown here is sampled as a working direction from the journal artwork. Final brand color values and original badge artwork can replace these during the next iteration.",
  ],
  feedback: [
    "What the care team helped clarify",
    "The review included Jordan Karow, Erin Taylor, Melissa “Missy” Smith, and Regan Trexel. Their perspectives spanned adult palliative care, pediatric care, and child life.",
    "The conversation supported the calming visual direction and suggested short journal prompts, personally meaningful milestones, caregiver participation, and a page introducing the person behind the patient. These insights informed the journal spreads shown here.",
  ],
  reflection: [
    "An evolving practice",
    "Badges of Honor explores a shift from documenting other people’s stories to making room for my own lived experience within a design project. The system remains a capstone concept, with its future form still open.",
    "My immediate focus is on refining prototypes, improving usability on low-energy days, and learning how patients and caregivers assign meaning to these objects. A full reflection will follow as the capstone develops.",
  ],
};
document.querySelectorAll("[data-dialog]").forEach((b) =>
  b.addEventListener("click", () => {
    const [title, ...paras] = notes[b.dataset.dialog];
    content.className = "";
    content.replaceChildren();
    const h = document.createElement("h2");
    h.textContent = title;
    content.append(h);
    paras.forEach((t) => {
      const p = document.createElement("p");
      p.textContent = t;
      content.append(p);
    });
    modal.showModal();
  }),
);
document.querySelectorAll("[data-image]").forEach((b) =>
  b.addEventListener("click", () => {
    content.className = "modal-img";
    content.replaceChildren();
    const h = document.createElement("h2");
    h.textContent = b.dataset.title;
    const img = document.createElement("img");
    img.src = b.dataset.image;
    img.alt = b.dataset.title;
    content.append(h, img);
    modal.showModal();
  }),
);
document.querySelector(".close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    const r = modal.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      modal.close();
  }
});
document
  .querySelector("#print")
  .addEventListener("click", () => window.print());
