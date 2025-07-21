# 🌌 My Bini

Welcome to **My Bini**, a futuristic personal web gallery dedicated to waifu appreciation 💖  
Built with **HTML**, **CSS**, and enhanced by animations and visual polish — a sentimental space to express digital affection.
<br/>
> _“Pencet rikka di bawah ini!!!.”_
<br/>

[![Click to visit My Bini](https://c.tenor.com/MnKTOrmSEnYAAAAC/tenor.gif)](https://my-kisah-rucky.vercel.app/)



---

## 🚀 Features

- ✨ **Glow Effects** — text shadows and border glows that stand out.
- 🎨 **Soft UI** — gradient backgrounds, blur overlays, and soft color palettes.
- 🎬 **Smooth Animations** — custom `@keyframes` transitions for dynamic entry.
- 📱 **Responsive Design** — mobile-first and optimized across devices.
- 🖱️ **Interactive Cards** — hover scaling and subtle transformations.
- 🔁 **Smart Redirect** — remembers if user already clicked "Get Started" via `localStorage`.

---

## 💻 Sample Code

### ✅ Auto-Redirect Script
```js
// Auto redirect dari index kalau sudah klik Get Started
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("index.html")) {
    const already = localStorage.getItem("alreadyStarted");
    if (already === "yes") {
      window.location.href = "home.html";
    }
  }
});
```


## 🎞️ CSS Fade-In Animation
```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out both;
}
```
## 🖱️ Hover Scale Effect
```css
.scale-in {
  transform: scale(0.9);
  transition: transform 0.4s ease-in-out;
}
.scale-in:hover {
  transform: scale(1);
}
```

## 📁 Folder Structure
```
my-bini/
├── index.html
├── home.html
├── styles.css
├── scripts.js
└── README.md
```

## 📜 License

This project is open-source and free to customize for your own waifu tributes or aesthetic galleries. Tapi kalau ambil waifu, ga boleh

---

✨ *"Bini bukan sekadar gambar. Dia inspirasi, motivasi, dan my bini."* ✨
