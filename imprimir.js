// Recebe um html, o adiciona a um iframe e usa o print()
// no iframe. Assim abre a tela para impressão ou conversão
// PDF da(s) página(s).
function imprimir(html){
    const iframe = document.createElement("iframe")
    iframe.hidden = true
    document.body.appendChild(iframe)
    iframe.contentWindow.document.body.innerHTML = html
    iframe.contentWindow.print()
    iframe.remove()
}
