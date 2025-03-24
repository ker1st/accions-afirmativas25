(function (d) {
  var s = d.createElement("script");
  /* uncomment the following line to override default position*/
  s.setAttribute("data-position", 3);
  /* uncomment the following line to override default size (values: small, large)*/
  s.setAttribute("data-size", "large");
  /* uncomment the following line to override default language (e.g., fr, de, es, he, nl, etc.)*/
  s.setAttribute("data-language", "es");
  /* uncomment the following line to override color set via widget (e.g., #053f67)*/
  s.setAttribute("data-color", "#4b0082");
  /* uncomment the following line to override type set via widget (1=person, 2=chair, 3=eye, 4=text)*/
  /* s.setAttribute("data-type", "1");*/
  /* s.setAttribute("data-statement_text:", "Our Accessibility Statement");*/
  /* s.setAttribute("data-statement_url", "http://www.example.com/accessibility")";*/
  /* uncomment the following line to override support on mobile devices*/
  s.setAttribute("data-mobile", true);
  /* uncomment the following line to set custom trigger action for accessibility menu*/
  /* s.setAttribute("data-trigger", "triggerId")*/
  s.setAttribute("data-account", "noiJTUAR6I");
  s.setAttribute("src", "https://cdn.userway.org/widget.js");
  (d.body || d.head).appendChild(s);
})(document)

document.addEventListener("DOMContentLoaded", function () {
  let observer = new MutationObserver(() => {
    document.querySelectorAll(".uwy-reading-mask").forEach(el => {
      el.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    });

    document.querySelectorAll(".uwy-reading-guide").forEach(el => {
      el.style.backgroundColor = "#6a0dad";
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
});


/*Accessibility Code for "www.iecm.mx" 

Want to customize your button? visit our documentation page:

https://login.equalweb.com/custom-button.taf

*/
window.interdeal = {
    "sitekey": "1511423308fb2322e7f859c1abaa1002",
    "Position": "right",
    "domains": {
        "js": "https://cdn.equalweb.com/",
        "acc": "https://access.equalweb.com/"
    },
    "Menulang": "es-MX",
    "btnStyle": {
        "vPosition": [
            "50%",
            "80%"
        ],
        "scale": [
            "0.5",
            "0.5"
        ],
        "color": {
            "main": "#5d0e57",
            "second": "#ffffff"
        },
        "icon": {
            "outline": false,
            "type": 1,
            "shape": "semicircle"
        }
    }
};
(function(doc, head, body){
    var coreCall             = doc.createElement('script');
    coreCall.src             = interdeal.domains.js + 'core/5.0.13/accessibility.js';
    coreCall.defer           = true;
    coreCall.integrity       = 'sha512-pk3CeR0KGJu+GfK2x2ybTSZ1o1qfua6XW2PRAxMWOhC85M3+CanPYmvRp6BOiW0/riZjWGerRN7+JH4wEF0wJQ==';
    coreCall.crossOrigin     = 'anonymous';
    coreCall.setAttribute('data-cfasync', true );
    body? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);
