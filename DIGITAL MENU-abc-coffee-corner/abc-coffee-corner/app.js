// ΕΝΤΟΛΕΣ ΤΗΣ ΣΕΛΙΔΑΣ (loading, διακόπτης τιμών, εμφάνιση προϊόντων, footer)

var SHOP = {
  name: "ABC Coffee Corner",
  location: "Κάτω Νευροκόπι, Δράμας",
  creator: "Detsios Th.",
  creatorUrl: "https://www.instagram.com/dets1os/"
};

(function () {
  function get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }

  var mode = get("abc-mode") || "dine";

  function price(v) { return v.toFixed(2).replace(".", ",") + " €"; }

  function renderMenu() {
    var el = document.getElementById("menu");
    var cat = document.body.getAttribute("data-category");
    if (!el || !window.MENU || !MENU[cat]) return;
    var html = "";
    MENU[cat].forEach(function (sec) {
      if (sec.section) html += '<div class="sub">' + sec.section + "</div>";
      html += "<ul>";
      sec.items.forEach(function (x) {
        html += "<li><div><b>" + x.name + "</b>" + (x.desc ? "<small>" + x.desc + "</small>" : "") +
          '</div><span class="dots"></span><span class="p">' +
          price(mode === "dine" ? x.dine : x.take) + "</span></li>";
      });
      html += "</ul>";
    });
    el.innerHTML = html;
  }

  function syncToggle() {
    document.querySelectorAll(".mode button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-m") === mode);
    });
  }

  document.querySelectorAll(".mode button").forEach(function (b) {
    b.addEventListener("click", function () {
      mode = b.getAttribute("data-m");
      set("abc-mode", mode);
      syncToggle();
      renderMenu();
    });
  });

  var f = document.getElementById("footer");
  if (f) {
    f.innerHTML = '<span class="serif">' + SHOP.name + "</span>" + SHOP.location +
      '<div class="by">Designed By <a href="' + SHOP.creatorUrl +
      '" target="_blank" rel="noopener">' + SHOP.creator + "</a></div>";
  }

  var loader = document.getElementById("loader");
  if (loader) {
    if (get("abc-seen")) { loader.className = "done"; }
    else { setTimeout(function () { loader.className = "done"; set("abc-seen", "1"); }, 2200); }
  }

  syncToggle();
  renderMenu();
})();
