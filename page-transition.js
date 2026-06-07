(() => {
    const DURATION_MS = 620;
    const EASING = "cubic-bezier(0.2, 0.84, 0.22, 1)";

    function shouldHandleLink(link, event) {
        if (!link || event.defaultPrevented) {
            return false;
        }

        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return false;
        }

        if (link.target && link.target !== "_self") {
            return false;
        }

        if (link.hasAttribute("download")) {
            return false;
        }

        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
            return false;
        }

        const nextUrl = new URL(link.href, window.location.href);
        if (nextUrl.origin !== window.location.origin) {
            return false;
        }

        if (nextUrl.href === window.location.href) {
            return false;
        }

        return true;
    }

    function createStackLayer(targetHref) {
        const layer = document.createElement("div");
        layer.setAttribute("aria-hidden", "true");
        layer.style.position = "fixed";
        layer.style.inset = "0";
        layer.style.zIndex = "2147483647";
        layer.style.pointerEvents = "none";
        layer.style.transform = "translateY(104%)";
        layer.style.willChange = "transform";
        layer.style.borderTopLeftRadius = "20px";
        layer.style.borderTopRightRadius = "20px";
        layer.style.overflow = "hidden";
        layer.style.background = "#ffffff";
        layer.style.boxShadow = "0 -18px 40px rgba(0, 0, 0, 0.24)";

        const frame = document.createElement("iframe");
        frame.setAttribute("aria-hidden", "true");
        frame.setAttribute("tabindex", "-1");
        frame.src = targetHref;
        frame.style.width = "100%";
        frame.style.height = "100%";
        frame.style.border = "0";
        frame.style.display = "block";
        frame.style.background = "#ffffff";

        layer.appendChild(frame);
        document.body.appendChild(layer);

        return layer;
    }

    function initPageStackTransition() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        let isNavigating = false;
        let activeLayer = null;

        document.addEventListener(
            "click",
            event => {
                const link = event.target.closest("a[href]");
                if (!shouldHandleLink(link, event) || isNavigating) {
                    return;
                }

                event.preventDefault();
                isNavigating = true;
                activeLayer = createStackLayer(link.href);

                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";

                activeLayer.style.transition = `transform ${DURATION_MS}ms ${EASING}`;
                requestAnimationFrame(() => {
                    activeLayer.style.transform = "translateY(0%)";
                });

                window.setTimeout(() => {
                    window.location.assign(link.href);
                }, Math.round(DURATION_MS * 0.96));
            },
            true
        );

        window.addEventListener("pageshow", () => {
            isNavigating = false;
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";

            if (activeLayer && activeLayer.parentNode) {
                activeLayer.parentNode.removeChild(activeLayer);
            }
            activeLayer = null;
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initPageStackTransition, { once: true });
    } else {
        initPageStackTransition();
    }
})();
