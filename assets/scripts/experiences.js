/* Emerald Escapes - Experiences page
   Loads destinations from experiences.xml, builds the cards
   and filters them by search text, category and maximum price. */

document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    // ---------- Settings ----------
    const XML_PATH = "assets/data/experiences.xml";
    const FALLBACK_IMAGE = "assets/images/pngtree-no-image-available.jpg";

    // ---------- Page elements ----------
    const grid = document.getElementById("experience-grid");
    const searchInput = document.getElementById("search-input");
    const priceRange = document.getElementById("price-range");
    const priceOutput = document.getElementById("price-output");
    const resultsCount = document.getElementById("results-count");
    const noResults = document.getElementById("no-results");
    const resetButton = document.getElementById("reset-filters");
    const categoryButtons = document.querySelectorAll(".filter-btn");

    // Current filter values
    const filters = {
        category: "All",
        search: "",
        maxPrice: Infinity
    };

    // ---------- Helpers ----------

    // Create an element with an optional class and text
    const createEl = (tag, className, text) => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (text) el.textContent = text;
        return el;
    }

    // Read the text of a child tag, e.g. <name>...</name>
    const getText = (parent, tag) => {
        const node = parent.getElementsByTagName(tag)[0];
        return node ? node.textContent.trim() : "";
    }

    // Create a Font Awesome icon followed by text
    const iconText = (iconClass, text) => {
        const wrapper = createEl("span");
        const icon = createEl("i", iconClass);
        icon.setAttribute("aria-hidden", "true");
        wrapper.append(icon, " " + text);
        return wrapper;
    }

    // ---------- Build one card ----------
    const buildCard = (dest) => {
        const card = createEl("article", "experience-card");

        // Data attributes are used by the filter
        card.dataset.category = dest.category;
        card.dataset.price = dest.price;
        card.dataset.search = (dest.name + " " + dest.location + " " +
            dest.description + " " + dest.category).toLowerCase();

        // Image + category badge
        const imageBox = createEl("div", "card-image");
        const img = document.createElement("img");
        img.src = dest.image;
        img.alt = dest.name + " in " + dest.location;
        img.loading = "lazy";
        // If the remote image fails, use a local image instead
        img.addEventListener("error", () => {
                                    img.src = FALLBACK_IMAGE;
                                },
                                { once: true }
                            );
        imageBox.append(img, createEl("span", "card-badge", dest.category));

        // Text content
        const body = createEl("div", "card-body");
        const location = createEl("p", "card-location");
        location.appendChild(iconText("fa-solid fa-location-dot", dest.location));

        const footer = createEl("div", "card-footer");
        const duration = createEl("span", "card-duration");
        duration.appendChild(iconText("fa-regular fa-clock", dest.days));
        footer.append(duration, createEl("span", "card-price", "€" + dest.price));

        body.append(
            createEl("h3", "", dest.name),
            location,
            createEl("p", "card-description", dest.description),
            footer
        );

        card.append(imageBox, body);
        return card;
    }

    // ---------- Apply the filters ----------
    const applyFilters = () => {
        const cards = grid.querySelectorAll(".experience-card");
        let visible = 0;

        cards.forEach(card => {
            const matchCategory = filters.category === "All" ||
                card.dataset.category === filters.category;
            const matchPrice = Number(card.dataset.price) <= filters.maxPrice;
            const matchSearch = card.dataset.search.includes(filters.search);

            const show = matchCategory && matchPrice && matchSearch;
            card.hidden = !show;
            if (show) visible++;
        });

        resultsCount.textContent = "Showing " + visible + " of " + cards.length + " experiences";
        noResults.classList.toggle("hidden", visible !== 0);
    }

    // ---------- Set up the price slider from the data ----------
    const setupPriceSlider = (destinations) => {
        const prices = destinations.map(d => d.price);
        const min = Math.floor(Math.min(...prices) / 50) * 50;
        const max = Math.ceil(Math.max(...prices) / 50) * 50;

        priceRange.min = min;
        priceRange.max = max;
        priceRange.step = 10;
        priceRange.value = max;
        filters.maxPrice = max;
        priceOutput.textContent = "€" + max;
    }

    // ---------- Event listeners ----------
    const setupEvents = () => {
        // Live text search
        searchInput.addEventListener("input", () => {
            filters.search = searchInput.value.trim().toLowerCase();
            applyFilters();
        });

        // Category buttons
        categoryButtons.forEach(button => {
            button.addEventListener("click", () => {
                categoryButtons.forEach(b => b.classList.remove("active"));
                button.classList.add("active");
                filters.category = button.dataset.category;
                applyFilters();
            });
        });

        // Price slider
        priceRange.addEventListener("input", () => {
            filters.maxPrice = Number(priceRange.value);
            priceOutput.textContent = "€" + priceRange.value;
            applyFilters();
        });

        // Reset everything
        resetButton.addEventListener("click", () => {
            searchInput.value = "";
            filters.search = "";
            filters.category = "All";
            categoryButtons.forEach(b =>
                b.classList.toggle("active", b.dataset.category === "All"));
            priceRange.value = priceRange.max;
            filters.maxPrice = Number(priceRange.max);
            priceOutput.textContent = "€" + priceRange.max;
            applyFilters();
        });
    }

    // ---------- Load the XML and start ----------
    async function loadExperiences() {
        try {
            const response = await fetch(XML_PATH);
            if (!response.ok) throw new Error("HTTP " + response.status);

            const xml = new DOMParser().parseFromString(await response.text(), "application/xml");
            if (xml.getElementsByTagName("parsererror").length) {
                throw new Error("XML could not be parsed");
            }

            // Turn each <destination> into a plain object
            const destinations = Array.from(xml.getElementsByTagName("destination")).map(node => ({
                name: getText(node, "name"),
                category: getText(node, "category"),
                location: getText(node, "location"),
                days: getText(node, "days"),
                price: Number(getText(node, "price")),
                image: getText(node, "image"),
                description: getText(node, "description")
            }));

            destinations.forEach(dest => grid.appendChild(buildCard(dest)));
            setupPriceSlider(destinations);
            setupEvents();
            applyFilters();
        } catch (error) {
            console.error("Could not load experiences:", error);
            grid.replaceChildren(createEl("p", "load-error",
                "Sorry, the experiences could not be loaded. " +
                "If you opened the file directly, run the site with a local server (e.g. VS Code Live Server)."));
        }
    }

    loadExperiences();
});