const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const checkboxInput = document.querySelector('input[type="checkbox"]');

checkboxInput.checked = prefersDarkMode;
verificaCaixa(checkboxInput);

checkboxInput.addEventListener('change', function() {
    verificaCaixa(this);
});

function verificaCaixa(checkbox) {
    const corFundo = checkbox.checked ? 'var(--cor-fundo-escuro)' : 'var(--cor-fundo-claro)';
    document.body.style.backgroundColor = corFundo;
}