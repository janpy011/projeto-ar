//TROCA TEMA
document.getElementById("tema").addEventListener("change", function() {
    document.body.classList.toggle("trocaTema");
});

//DIRECIONA WATSAPP
function sendToWhatsAppWpp() {
    let name = document.getElementById('name-wpp').value;
    let phone = document.getElementById('phone-wpp').value;
    let message = document.getElementById('message-wpp').value;
    
    if (name === "" || phone === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    let url = `https://wa.me/55${11988806169}?text=${encodeURIComponent(`Olá, meu nome é ${name}. ${message}`)}`;
    window.open(url, '_blank');
}