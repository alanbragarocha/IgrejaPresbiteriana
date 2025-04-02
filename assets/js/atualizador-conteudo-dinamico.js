// Script aprimorado para modificar o footer e a barra de eventos da Igreja Presbiteriana de Macaé
document.addEventListener('DOMContentLoaded', function() {
    // =========================================================
    // CONFIGURAÇÕES GERAIS DA PÁGINA - EDITE CONFORME NECESSÁRIO
    // =========================================================
    const dadosIgreja = {
        nome: "Igreja Presbiteriana de Macaé",
        descricao: "Uma comunidade de fé comprometida com a Palavra de Deus, adoração verdadeira e crescimento espiritual, fundamentada nos princípios da Reforma Protestante.",
        versiculo: {
            texto: "Tudo para a glória de Deus",
            referencia: "1 Coríntios 10:31"
        },
        
        // =========================================================
        // CONFIGURAÇÃO DA BARRA DE EVENTOS NO TOPO DA PÁGINA
        // =========================================================
        eventosDestacados: [
            { 
                nome: "Escola Dominical", 
                horario: "Domingo às 9h",
                icone: "fas fa-users" 
            },
            { 
                nome: "Culto", 
                horario: "Domingo às 9h e 18h",
                icone: "fas fa-bible" 
            },
            { 
                nome: "Reunião de Oração", 
                horario: "Quinta às 6h",
                icone: "fas fa-praying-hands" 
            },
           
        ],
        
        // =========================================================
        // CONFIGURAÇÃO DOS HORÁRIOS EXIBIDOS NO FOOTER
        // =========================================================
        cultos: [
            { nome: "Culto Dominical", horario: "Domingo às 9h e 18h" },
            { nome: "Escola Dominical", horario: "Domingo às 9h" },
            { nome: "Estudo Bíblico", horario: "Quarta às 19:30h" },
            { nome: "Culto de Oração", horario: "Quinta às 6h" },
            { nome: "Reunião de Jovens", horario: "Segunda às 19h" }
        ],
        
        // =========================================================
        // INFORMAÇÕES DE CONTATO PARA O FOOTER
        // =========================================================
        contato: {
            endereco: "Rua XXXX, nº XXX - Bairro, Macaé - RJ",
            telefone: "(22) XXXX-XXXX",
            email: "contato@ipmacae.com.br"
        },
        
        // =========================================================
        // REDES SOCIAIS DA IGREJA PARA O FOOTER
        // =========================================================
        redesSociais: [
            { nome: "Facebook", url: "https://facebook.com/ipmacae", icone: "fab fa-facebook-f" },
            { nome: "Instagram", url: "https://instagram.com/ipmacae", icone: "fab fa-instagram" },
            { nome: "YouTube", url: "https://youtube.com/ipmacae", icone: "fab fa-youtube" },
            { nome: "WhatsApp", url: "https://wa.me/5522XXXXXXXX", icone: "fab fa-whatsapp" },
            { nome: "Spotify", url: "https://open.spotify.com/show/XXXXXX", icone: "fab fa-spotify" }
        ],
        
        // Ano atual para o copyright
        anoAtual: new Date().getFullYear(),
        
        // =========================================================
        // CONFIGURAÇÃO DO LAYOUT DO FOOTER
        // =========================================================
        colunas: {
            quantidadeColunas: 3, // Possibilidade de alterar o layout para 2, 3 ou 4 colunas
            coluna1Visivel: true,
            coluna2Visivel: true,
            coluna3Visivel: true
        }
    };

    // =========================================================
    // FUNÇÕES PARA ATUALIZAR ELEMENTOS DA PÁGINA - NÃO MODIFICAR
    // =========================================================
    const PageUpdater = {
        // Nova função para atualizar a barra de próximos eventos
        atualizarBarraEventos: function() {
            const eventosSlider = document.querySelector('.eventos-slider');
            if (eventosSlider) {
                // Limpar conteúdo atual
                eventosSlider.innerHTML = '';
                
                // Adicionar cada evento destacado
                dadosIgreja.eventosDestacados.forEach(evento => {
                    const eventoDiv = document.createElement('div');
                    eventoDiv.className = 'evento-item';
                    
                    const iconeDiv = document.createElement('div');
                    iconeDiv.className = 'evento-icone';
                    
                    const iconeElement = document.createElement('i');
                    iconeElement.className = evento.icone;
                    
                    const textoSpan = document.createElement('span');
                    textoSpan.textContent = `${evento.nome}: ${evento.horario}`;
                    
                    iconeDiv.appendChild(iconeElement);
                    eventoDiv.appendChild(iconeDiv);
                    eventoDiv.appendChild(textoSpan);
                    
                    eventosSlider.appendChild(eventoDiv);
                });
            }
        },

        // Atualizar logo e informações da primeira coluna
        atualizarInfoIgreja: function() {
            const logoElement = document.querySelector('.footer-logo h3');
            if (logoElement) {
                logoElement.innerHTML = dadosIgreja.nome.replace(' de ', '<br>de ');
            }

            const descricaoElements = document.querySelectorAll('.footer-section p');
            if (descricaoElements.length >= 2) {
                descricaoElements[0].textContent = dadosIgreja.descricao;
                descricaoElements[1].innerHTML = `<em>"${dadosIgreja.versiculo.texto}" - ${dadosIgreja.versiculo.referencia}</em>`;
            }
        },

        // Atualizar horários dos cultos
        atualizarHorarios: function() {
            const horariosContainer = document.querySelector('.footer-horarios');
            if (horariosContainer) {
                horariosContainer.innerHTML = '';
                dadosIgreja.cultos.forEach(culto => {
                    const paragrafo = document.createElement('p');
                    paragrafo.innerHTML = `<strong>${culto.nome}:</strong> ${culto.horario}`;
                    horariosContainer.appendChild(paragrafo);
                });
            }
        },

        // Atualizar informações de contato
        atualizarContato: function() {
            const contatoElements = document.querySelectorAll('.footer-contact p');
            if (contatoElements.length >= 3) {
                contatoElements[0].innerHTML = `<strong>Endereço:</strong> ${dadosIgreja.contato.endereco}`;
                contatoElements[1].innerHTML = `<strong>Telefone:</strong> ${dadosIgreja.contato.telefone}`;
                contatoElements[2].innerHTML = `<strong>Email:</strong> <a href="mailto:${dadosIgreja.contato.email}">${dadosIgreja.contato.email}</a>`;
            }
        },

        // Atualizar redes sociais
        atualizarRedesSociais: function() {
            const socialIconsContainer = document.querySelector('.social-icons');
            if (socialIconsContainer) {
                socialIconsContainer.innerHTML = '';
                dadosIgreja.redesSociais.forEach(rede => {
                    const link = document.createElement('a');
                    link.href = rede.url;
                    link.setAttribute('aria-label', rede.nome);
                    link.setAttribute('target', '_blank');
                    link.setAttribute('rel', 'noopener noreferrer');
                    
                    const icone = document.createElement('i');
                    icone.className = rede.icone;
                    
                    link.appendChild(icone);
                    socialIconsContainer.appendChild(link);
                });
            }
        },

        // Atualizar copyright
        atualizarCopyright: function() {
            const copyrightElement = document.querySelector('.copyright p');
            if (copyrightElement) {
                copyrightElement.textContent = `© ${dadosIgreja.anoAtual} ${dadosIgreja.nome}. Todos os direitos reservados.`;
            }
        },

        // Aplicar configurações de layout (número de colunas visíveis)
        aplicarLayoutFooter: function() {
            const footerContainer = document.querySelector('.footer-container');
            if (footerContainer) {
                // Atualizar classe baseada no número de colunas
                footerContainer.className = `container footer-container colunas-${dadosIgreja.colunas.quantidadeColunas}`;
                
                // Obter todas as colunas
                const colunas = footerContainer.querySelectorAll('.footer-section');
                
                // Definir visibilidade das colunas
                if (colunas.length >= 1) colunas[0].style.display = dadosIgreja.colunas.coluna1Visivel ? 'block' : 'none';
                if (colunas.length >= 2) colunas[1].style.display = dadosIgreja.colunas.coluna2Visivel ? 'block' : 'none';
                if (colunas.length >= 3) colunas[2].style.display = dadosIgreja.colunas.coluna3Visivel ? 'block' : 'none';
            }
        },

        // Adicionar mapa do Google (opcional)
        adicionarMapa: function() {
            const contatoSection = document.querySelector('.footer-contact');
            if (contatoSection) {
                const mapaExistente = contatoSection.querySelector('.footer-map');
                
                // Só adicionar o mapa se não existir ainda
                if (!mapaExistente) {
                    const mapaDiv = document.createElement('div');
                    mapaDiv.className = 'footer-map';
                    mapaDiv.innerHTML = `
                        <h4>Nossa Localização</h4>
                        <div class="map-small">
                            <a href="#localizacao" title="Ver mapa completo">
                                <img src="./assets/imagens/map-thumbnail.webp" alt="Mapa Miniatura" width="180" height="100">
                                <span>Clique para ver o mapa completo</span>
                            </a>
                        </div>
                    `;
                    contatoSection.appendChild(mapaDiv);
                }
            }
        }
    };

    // =========================================================
    // FUNÇÃO PRINCIPAL QUE ATUALIZA TODOS OS ELEMENTOS
    // =========================================================
    function atualizarPaginaCompleta() {
        try {
            // Atualizar a barra de eventos
            PageUpdater.atualizarBarraEventos();
            
            // Aplicar layout conforme configuração
            PageUpdater.aplicarLayoutFooter();
            
            // Atualizar cada seção individualmente
            PageUpdater.atualizarInfoIgreja();
            PageUpdater.atualizarHorarios();
            PageUpdater.atualizarContato();
            PageUpdater.atualizarRedesSociais();
            PageUpdater.atualizarCopyright();
            
            // Recursos opcionais
            // PageUpdater.adicionarMapa();
            
            console.log('Página atualizada com sucesso!');
        } catch (erro) {
            console.error('Erro ao atualizar a página:', erro);
        }
    }

    // Adicionar listener para atualizar quando dados mudam
    function definirObservadores() {
        // Esta função pode ser expandida para reagir a mudanças em tempo real
        // Por exemplo, mudanças de tema claro/escuro ou atualizações de API
    }

    // Inicialização
    atualizarPaginaCompleta();
    definirObservadores();
    
    // =========================================================
    // API PARA MODIFICAÇÕES EXTERNAS (PARA PAINEL ADMINISTRATIVO)
    // =========================================================
    window.SiteAPI = {
        atualizar: atualizarPaginaCompleta,
        dados: dadosIgreja,
        atualizarDados: function(novosDados) {
            // Função para permitir atualização dos dados via painel admin
            Object.assign(dadosIgreja, novosDados);
            atualizarPaginaCompleta();
        }
    };
});