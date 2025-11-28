const jekpro = document.getElementById("jekpro")

const projek1 = {
    title: "calculator",
    description:
        "Alikasi Web untuk menghitung zakat emas dengan fitur riawayat penyimpanan menggunakan localStorage",
    image: "",
    tags: ["LocalStorage"],
    link: "https://github.com/faizmubarok123/aplikasi-calculator-form-hover.and.domlampu-traffict-etc",
};

const projek2 = {
    title: "Lampu Merah",
    description: "Simulasi Lampu merah",
    image: "",
    tags: ["LocalStorage"],
    link: "https://github.com/faizmubarok123/aplikasi-calculator-form-hover.and.domlampu-traffict-etc",
};

const projek3 = {
    title: "Kalkulator Zakat",
    description:
        "Alikasi Web untuk menghitung zakat emas dengan fitur riawayat penyimpanan menggunakan localStorage",
    image: "",
    tags: ["LocalStorage"],
    link: "https://github.com/faizmubarok123/zakat-emas",
};
const myChannel = {
    title: "Channel Youtube",
    description:
        "Alikasi Web untuk menghitung zakat emas dengan fitur riawayat penyimpanan menggunakan localStorage",
    image: "",
    tags: ["LocalStorage"],
    link: "https://www.youtube.com/@fzzmubarok",
};

const linkCanva = {
    title: "Portpolio Canva",
    description:
        "Alikasi Web untuk menghitung zakat emas dengan fitur riawayat penyimpanan menggunakan localStorage",
    image: "",
    tags: ["LocalStorage"],
    link: "https://www.canva.com/design/DAGq2QZmCAU/3hpJ5gnvF6zwmkGQC3Ickg/edit?utm_content=DAGq2QZmCAU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
};
const projek = [projek1, projek2, projek3, myChannel,linkCanva];

for (let i = 0; i < projek.length; i++){
    let project = projek[i];

    let card = document.createElement("div");
    card.className = "card"

    let link = document.createElement("a")
    link.href = project.link
    link.className = "style-projek"
    link.textContent = project.title

    card.appendChild(link)

    jekpro.appendChild(card)

}