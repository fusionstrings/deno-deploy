addEventListener("fetch", (event) => {
    event.respondWith(
        fetch(new URL("./css/style.css", import.meta.url)),
    );
});