
// script para a div pegar datas, dia e mês

/* o input pegoudia e pegoumes mesmo que tenha um zero digitado n vai para a var
 ex. valor digitado 01, 02, 03, a var receberá 1, 2, 3,
 mas se o input dia e mes estiver vazio ele receberá valor zero
*/

var dataswitch = 'vazio'
nomedosmeses =  new Array ("????", "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",)

function pegardatas() {
    var pegardia = window.document.getElementById('pegardia')
    var pegarmes = window.document.getElementById('pegarmes')
    var calendariop = document.getElementById('calendariop')
    var btn_resultadoferiado = window.document.getElementById('btn-resultadoferiado')
    var btn_resultadocomemorativa = window.document.getElementById('btn-resultadocomemorativa')
    var pegoudia = Number(pegardia.value)
    var pegoumes = Number(pegarmes.value)

if (pegoudia == 0 || pegoumes == 0 ) {
        alert('Por favor digite uma data antes de pesquisar. O dia ou o mês não podem estar vazios, ou com valor 0 digite uma data valida.')
        dataswitch = 'igual0'
        // calendariop.innerHTML = 'O dia ou o mês não podem estar vazios, ou com valor 0 digite uma data valida.'
    } else if ( pegoudia > 31 && pegoumes > 12) {
        alert('Olá o dia e mês digitado está incorreto. O dia deve estar entre 1 e 31 e o mês entre 1 e 12 ou não será valido.')
        dataswitch = 'maiorq31e12'
        // calendariop.innerHTML = 'O dia deve estar entre 1 e 31 e o mês entre 1 e 12 ou não será valido.'
    } else if ( pegoudia > 31){
        alert('Olá o dia digitado está incorreto ele é maior que 31. O dia deve ser selecionado entre 1 e 31 ou não será valido.')
        dataswitch = 'maiorq31'
        // calendariop.innerHTML = 'O dia deve ser selecionado entre 1 e 31 ou não será valido.'
    } else if ( pegoumes > 12) {
        alert('Olá o mês digitado está incorreto ele é maior que 12. O mês deve ser selecionado entre 1 e 12 ou não será valido.')
        dataswitch = 'maiorq12'
        // calendariop.innerHTML = 'O mês deve ser selecionado entre 1 e 12 ou não será valido.'
    } else {
       var pegoudatas = `${pegoudia}/${pegoumes}`
       dataswitch = pegoudatas
       
    }
   
        switch (dataswitch) {
            case 'vazio':
                break;
                
            case 'igual0':
                calendariop.innerHTML = 'O dia ou o mês não podem estar vazios, ou com valor 0 digite uma data valida.'
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'none'
                btn_resultadocomemorativa.style.display = 'none'
                break;
                
            case 'maiorq31e12':
                calendariop.innerHTML = 'O dia deve estar entre 1 e 31 e o mês entre 1 e 12 ou não será valido.'
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'none'
                btn_resultadocomemorativa.style.display = 'none'
                break;
        
            case 'maiorq31':
                calendariop.innerHTML = 'O dia deve ser selecionado entre 1 e 31 ou não será valido.'
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'none'
                btn_resultadocomemorativa.style.display = 'none'
                break;
                    
            case 'maiorq12':
                calendariop.innerHTML = 'O mês deve ser selecionado entre 1 e 12 ou não será valido.'
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'none'
                btn_resultadocomemorativa.style.display = 'none'
                break;
                    
            // Mês de Janeiro

            case '1/1':   // (feriado) ano-novo + (Comemoração) Confraternização Universal e Dia Mundial da Paz
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link: <a href="../feriados/01-01-anonovo.html"><b>Ano Novo.</b></a> <br><br> Link: <a href="../comemorativas/m01/01-01-confraternizacaouniversal.html"><b>Confraternização Universal.</b></a> <br><br> Link: <a href="../comemorativas/m01/01-01-diamundialdapaz.html"><b>Dia Mundial da Paz.</b></a>`
                pparaferiado.innerHTML = `<b>Ano Novo</b> é o momento em que um novo ano civil começa e um novo calendário é iniciado em muitas culturas ao redor do mundo, o evento é comemorado principalmente na véspera da data chamada de<b>...</b>`
                pparacomemorativa.innerHTML = `<b>Confraternização Universal</b> O Dia da Fraternidade Universal ou Dia da Confraternização Universal é um feriado nacional no Brasil, comemorado no dia 1 de janeiro. Foi instituído por lei em 1935, por Getúlio Vargas. <a href="../comemorativas/m01/01-01-confraternizacaouniversal.html"><b>Saber +</b></a><br><br> <b>Dia Mundial da Paz</b> O Dia Mundial da Paz, inicialmente chamado simplesmente de Dia da Paz, é comemorado em 1 de janeiro, tendo sido criado pelo papa Paulo VI em 1967. <a href="../comemorativas/m01/01-01-diamundialdapaz.html"><b>Saber +</b></a>`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href","../feriados/01-01-anonovo.html")
                btn_resultadocomemorativa.style.display = 'none'
                break;
                
            case '2/1':   // (Comemoração) Dia do Sanitarista
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é:<br><br> Link: <a href="../comemorativas/m01/02-01-diadosanitarista.html"><b>Dia do Sanitarista.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia do Sanitarista</b> é comemorado em   2 de janeiro.  Esse profissional analisa a saúde pública, categorizando os problemas em ordem de prioridades, propondo soluções e também<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m01/02-01-diadosanitarista.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '4/1':   // (Comemoração) Dia da Abreugrafia e Dia do Hemofílico
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é:<br><br> Link: <a href="../comemorativas/m01/04-01-diadaabreugrafia.html"><b>Dia da Abreugrafia.</b></a> <br><br> Link: <a href="../comemorativas/m01/04-01-diadohemofilico.html"><b>Dia do Hemofílico.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia da Abreugrafia</b> Abreugrafia era um método brasileiro rápido e barato de tirar pequenas chapas radiográficas dos pulmões, para facilitar o diagnóstico da tuberculose, doença mortal. O teste<b>...</b><a href="../comemorativas/m01/04-01-diadaabreugrafia.html"><b>Saber +</b></a> <br><br> <b>Dia do Hemofílico</b> no Brasil ocorre no dia 4 de janeiro. A data tem como objetivo conscientizar a população brasileira sobre essa doença rara. Um corpo frágil pela falta da capacidade de coagular o sangue, necessária para interromper hemorragias<b>...</b> <a href="../comemorativas/m01/04-01-diadohemofilico.html"><b>Saber +</b></a>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'none'
                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '5/1':   // (Comemoração) Dia Nacional da Tipografia
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é:<br><br> Link: <a href="../comemorativas/m01/05-01-dianacionaldatipografia.html"><b>Dia Nacional da Tipografia.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia Nacional da Tipografia</b> foi a sucessora da Imprensa Régia, criada por decreto de D. João VI em 13 de maio de 1808, e antecessora da atual Imprensa Nacional. Durante todo o período imperial e parte do período republicano foi subordinada ao Ministério da Fazenda<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m01/05-01-dianacionaldatipografia.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '6/1':   // (Comemoração) Dia de Reis / Dia da Gratidão / Dia do Mensageiro 
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é:<br><br> Link: <a href="../comemorativas/m01/06-01-diadereis.html"><b>Dia de Reis.</b></a> <br><br> Link: <a href="../comemorativas/m01/06-01-diadagratidao.html"><b>Dia da Gratidão.</b></a> <br><br> Link: <a href="../comemorativas/m01/06-01-diadomensageiro.html"><b>Dia do Mensageiro.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia de Reis</b> segundo a tradição cristã, seria aquele em que Jesus Cristo recém-nascido recebera a visita de "alguns magos do oriente" (Mateus 2:1) que, segundo o hagiológio, foram<b>...</b><a href="../comemorativas/m01/06-01-diadereis.html"><b>Saber +</b></a> <br><br> <b>Dia da Gratidão</b> Além da data comemorada no Brasil, há também o Dia Mundial da Gratidão, o qual se comemora em 21 de setembro<b>...</b><a href="../comemorativas/m01/06-01-diadagratidao.html"><b>Saber +</b></a> <br><br> <b>Dia do Mensageiro</b> é comemorado em referência à mensagem trazida pelos 3 Reis Magos do Oriente na visita ao Menino Jesus<b>...</b> <a href="../comemorativas/m01/06-01-diadomensageiro.html"><b>Saber +</b></a>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'none'
                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '7/1':   // (Comemoração) Dia do Leitor / Dia da Liberdade de Culto
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m01/07-01-diadoleitor.html"><b>Dia do Leitor.</b></a> <br><br> Link <a href="../comemorativas/m01/07-01-diadaliberdadedeculto.html"><b>Dia da Liberdade de Culto.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia do Leitor</b> é comemorado em 07 de janeiro, surgiu em 1928, quando o jornal cearense O Povo foi fundado. A fama da publicação era a de combater a corrupção e<b>...</b> <a href="../comemorativas/m01/07-01-diadoleitor.html"><b>Saber +</b></a> <br><br> <b>Dia da Liberdade de Culto</b> é celebrado em 7 de janeiro, serve para lembrar que todos os brasileiros podem exercer suas crenças de modo livre, sem sofrer perseguições e<b>...</b> <a href="../comemorativas/m01/07-01-diadaliberdadedeculto.html"><b>Saber +</b></a>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'none'
                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '8/1':   // (Comemoração) Dia da Fotografia / Dia do Fotógrafo 
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m01/08-01-diadafotografia.html"><b>Dia da Fotografia.</b></a> <br><br> Link <a href="../comemorativas/m01/08-01-diadofotografo.html"><b>Dia do Fotógrafo.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia da Fotografia</b> no Brasil a data é celebrada no dia 8 de janeiro, que seria o dia da chegada do Daguerreótipo ao país, em 1840. Trazido por Louis Compte<b>...</b> <a href="../comemorativas/m01/08-01-diadafotografia.html"><b>Saber +</b></a> <br><br> <b>Dia do Fotógrafo</b> a atividade registra momentos corriqueiros ou históricos por meio da habilidade de capturar imagens a partir da arte de combinar luz, ângulo, profundidade<b>...</b> <a href="../comemorativas/m01/08-01-diadofotografo.html"><b>Saber +</b></a>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'none'
                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '9/1':   // (Comemoração) Dia do Fico (em 1822) / Dia do Astronauta 
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m01/09-01-diadofico.html"><b>Dia do Fico.</b></a> <br><br> Link <a href="../comemorativas/m01/09-01-diadoastronauta.html"><b>Dia do Astronauta.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia do Fico</b> refere-se, na história do Brasil, ao dia 9 de janeiro de 1822. Neste dia, o então príncipe regente D. Pedro I declarou que não cumpriria as<b>...</b> <a href="../comemorativas/m01/09-01-diadofico.html"><b>Saber +</b></a> <br><br> <b>Dia do Astronauta</b> é em homenagem àqueles que se aventuram e se arriscam ao ultrapassar as barreiras da atmosfera da Terra<b>...</b> <a href="../comemorativas/m01/09-01-diadoastronauta.html"><b>Saber +</b></a>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'none'
                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '10/1':   // (Comemoração) Dia de São Gonçalo / Dia de Peculiar People Day 
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m01/10-01-diadesaogoncalo.html"><b>Dia de São Gonçalo.</b></a> <br><br> Link <a href="../comemorativas/m01/10-01-peculiarpeopleday.html"><b>Peculiar People Day.</b></a>`
                pparacomemorativa.innerHTML = `<b>São Gonçalo</b> foi um eclesiástico português. Gozando de grande devoção popular que se irradiou a partir do norte do país, é popularmente conhecido como São Gonçalo de Amarante. Na realidade, é<b>...</b> <a href="../comemorativas/m01/10-01-diadesaogoncalo.html"><b>Saber +</b></a> <br><br> <b>Dia de Peculiar People Day</b> é um dia para celebrar as diferenças e praticar a tolerância. É um dia para julgar menos e agregar mais. Um dia pra gente conhecer pessoas que vivem, pensam e são diferentes<b>...</b> <a href="../comemorativas/m01/10-01-peculiarpeopleday.html"><b>Saber +</b></a>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'none'
                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '11/1':   // (Comemoração) Dia de São Teodósio
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m01/11-01-saoteodosio.html"><b>Dia de São Teodósio.</b></a>`
                pparacomemorativa.innerHTML = `<b>São Teodósio</b> cujo nome significa "um presente de Deus", nasceu na Capadócia, atual Turquia, em 423, de pais ricos, nobres cristãos. Recebeu uma boa e sólida formação desde a infância<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m01/11-01-saoteodosio.html")
                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '19/1':   // (Comemoração) Dia Oficial do Cabeleireiro
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m01/19-01-diaoficialdocabeleireiro.html"><b>Dia Oficial do Cabeleireiro.</b></a> `
                pparacomemorativa.innerHTML = `<b>Dia Oficial do Cabeleireiro</b> é comemorado oficialmente no dia 19 de janeiro, Este profissional exerce atividades ligadas ao embelezamento e higienização capilar<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m01/19-01-diaoficialdocabeleireiro.html")
                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '20/1':   // (Comemoração) Dia do Farmacêutico
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m01/20-01-diadofarmaceutico.html"><b>Dia do Farmacêutico.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia do Farmacêutico</b> a data foi escolhida em função da fundação da Associação Brasileira de Farmacêuticos (ABF), em 20 de janeiro de 1916. Na época, era a maior instituição representativa da<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m01/20-01-diadofarmaceutico.html")
                btn_resultadoferiado.style.display = 'none'
                break;
                
            // Fim do Mês de Janeiro
            // Mês de Fevereiro
            case '1/2':   // (Comemoração) Dia do Publicitário
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m02/01-02-diadopublicitario.html"><b>Dia do Publicitário</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia do Publicitário</b> é comemorado no Brasil em 1º de fevereiro, de acordo com o Decreto de Lei nº 57.690, de 1º de fevereiro de 1966<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m02/01-02-diadopublicitario.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '2/2':   // (Comemoração) Apresentação de Cristo / Nossa Senhora dos Navegantes
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m02/02-02-apresentacaodejesus.html"><b>Apresentação de Cristo.</b></a> <br><br> Link <a href="../comemorativas/m02/02-02-nossasenhoradosnavegantes.html"><b>Dia de Nossa Sr. dos Navegantes.</b></a>`
                pparacomemorativa.innerHTML = `<b>Apresentação de Cristo</b> foi o dia da Festa de Apresentação do Menino Jesus no templo é comemorado no dia 2 de fevereiro, em homenagem ao dia em que Maria, José e Jesus entraram a<b>...</b> <a href="../comemorativas/m02/02-02-apresentacaodejesus.html"><b>Saber +</b></a> <br><br> <b>Dia de Nossa Senhora dos Navegantes</b> é um título dado a Mãe de Jesus, Maria<b>...</b> <a href="../comemorativas/m02/02-02-nossasenhoradosnavegantes.html"><b>Saber +</b></a>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'none'
                btn_resultadoferiado.style.display = 'none'
                break;

            case '16/2':   // (Comemoração) carnaval
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m02/16-02-carnaval.html"><b>Carnaval.</b></a>`
                pparacomemorativa.innerHTML = `<b>Carnaval</b> é um festival do cristianismo ocidental que ocorre antes da estação litúrgica da Quaresma. Os principais eventos ocorrem tipicamente durante fevereiro ou início de março, durante o período historicamente conhecido como<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m02/16-02-carnaval.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '24/2':   // (Comemoração) Promulgação da primeira Constituição da República do Brasil (1891)
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m02/24-02-constituicaobrasileira1891.html"><b>Promulgação da Constituição.</b></a>`
                pparacomemorativa.innerHTML = `<b>A Constituição da República dos Estados Unidos do Brasil de 1891</b> foi a segunda constituição do Brasil e primeira no sistema republicano de governo, marcando a transição da monarquia para a república<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m02/24-02-constituicaobrasileira1891.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            // Fim do Mês de Fevereiro
            // Mês de Março
            case '8/3':   // (Comemoração) Dia Internacional da Mulher
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m03/08-03-diainternacionaldamulher.html"><b>Dia Internacional da Mulher.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia Internacional da Mulher</b> a ideia de uma celebração anual surgiu depois que o Partido Socialista da América organizou um Dia da Mulher, em 20 de fevereiro de 1909, em Nova York — uma jornada de manifestação pela igualdade de direitos civis e<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m03/08-03-diainternacionaldamulher.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '12/3':   // (Comemoração) Dia do Bibliotecário
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m03/12-03-diadobibliotecario.html"><b>Dia do Bibliotecário.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia do Bibliotecário</b> foi instituído pelo Decreto nº 84.631, de 9 de abril de 1980, a ser comemorado em todo o território nacional a 12 de março, data do nascimento do bibliotecário<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m03/12-03-diadobibliotecario.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '14/3':   // (Comemoração) Dia dos Carecas
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m03/14-03-diadoscarecas.html"><b>Dia dos Carecas.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia dos Carecas</b> é comemorado em 14 de março no Brasil. A data celebra aqueles que possuem calvície, uma forma gradual e progressiva onde as pessoas perdem os cabelos, e é mais comum nos homens<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m03/14-03-diadoscarecas.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '15/3':   // (Comemoração) Dia do Consumidor
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m03/15-03-diadoconsumidor.html"><b>Dia do Consumidor.</b></a>`
                pparacomemorativa.innerHTML = `<b>O Dia Mundial dos Direitos do Consumidor</b> foi comemorado, pela primeira vez, em 15 de março de 1983. Essa data foi escolhida em razão do famoso discurso feito, em 15 de março de 1962, pelo então presidente dos EUA, John Kennedy. Em seu discurso<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m03/15-03-diadoconsumidor.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '17/3':   // (Comemoração) Dia de São Patrício
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m03/17-03-diadesaopatricio.html"><b>Dia de São Patrício.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia de São Patrício</b> é uma festa anual realizada desde 1997, comemorada em 17 de Março (nos países anglofônicos), celebrando a morte de São Patrício, padroeiro da Irlanda. Quando as pessoas<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m03/17-03-diadesaopatricio.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            case '27/3':   // (Comemoração) Dia Mundial do Teatro
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é: <br><br> Link <a href="../comemorativas/m03/27-03-diamundialdoteatro.html"><b>Dia Mundial do Teatro.</b></a>`
                pparacomemorativa.innerHTML = `<b>Dia Mundial do Teatro</b> é celebrado no dia 27 de março. Foi criado pelo Instituto Internacional do Teatro em 1961. A primeira mensagem internacional do Dia Mundial do Teatro foi<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m03/27-03-diamundialdoteatro.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            // Fim do Mês de Março
            // Mês de Abril
            case '2/4':   // (feriado) Paixão de Cristo
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é Sexta-feira Santa (Paixão de Cristo) <a href="../feriados/02-04-PaixaodeCristo.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>Sexta-feira Santa (Paixão de Cristo)</b> Sexta-feira Santa ou Sexta-Feira da Paixão é uma data religiosa cristã que relembra a crucificação de Jesus Cristo e sua morte no Calvário. O feriado é observado sempre na sexta-feira que antecede o Domingo de Páscoa, o sexto dia da Semana Santa no<b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../feriados/02-04-PaixaodeCristo.html")

                btn_resultadocomemorativa.style.display = 'none'
                break;
                
            case '4/4':   // (feriado) Páscoa
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é Domingo de Páscoa <a href="../feriados/04-04-pascoa.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>Páscoa ou Domingo da Ressurreição</b> é uma festividade religiosa e um feriado que celebra a ressurreição de Jesus ocorrida ao terceiro dia após sua crucificação no Calvário, conforme o relato do Novo Testamento. É a principal celebração do<b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../feriados/04-04-pascoa.html")

                btn_resultadocomemorativa.style.display = 'none'
                break;

            case '21/4':   // (feriado) Tiradentes
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é Dia de Tiradentes <a href="../feriados/21-04-tiradentes.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>Joaquim José da Silva Xavier, o Tiradentes</b> foi um dentista, tropeiro, minerador, comerciante, militar e ativista político que atuou no Brasil, mais especificamente nas capitanias de Minas Gerais e Rio de Janeiro. Personagem símbolo da conspiração denominada Inconfidência Mineira, é patrono cívico do Brasil, além de<b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../feriados/21-04-tiradentes.html")

                btn_resultadocomemorativa.style.display = 'none'
                break;

            // Fim Mês de Abril
            // Mês de Maio
            case '1/5':   // (feriado) Dia do Trabalho
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é O Dia do Trabalhador <a href="../01-05-diadotrabalho.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>O Dia do Trabalhador ou Dia do Trabalho</b> é uma data comemorativa internacional, dedicada aos trabalhadores, celebrada anualmente no dia 1 de maio, em quase todos os países do mundo, sendo<b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../01-05-diadotrabalho.html")

                btn_resultadocomemorativa.style.display = 'none'
                break;

            // Fim do Mês de Maio
            // Mês de Junho
            case '3/6':   // (feriado) Corpus Christi
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é Corpus Christi <a href="../feriados/03-06-corpuschristi.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>A Solenidade de Corpus Christi ou Corpus Domini</b> é uma comemoração litúrgica católica que ocorre na quinta-feira seguinte ao domingo da Santíssima Trindade, que, por sua vez, acontece no domingo seguinte ao de Pentecostes. É uma Festa de Guarda, em que a participação da<b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../feriados/03-06-corpuschristi.html")

                btn_resultadocomemorativa.style.display = 'none'
                break;

            // Fim do Mês de Junho 
            // Mês de Julho

            // Fim do Mês de Julho
            // Mês de Agosto

            // Fim do Mês de Agosto
            // Mês de Setembro
            case '7/9':   // (feriado) Independência do Brasil
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é Independência do Brasil <a href="../07-09-independenciadobrasil.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>Independência do Brasil</b> foi o processo histórico de separação entre Brasil e Portugal, que se estendeu de 1821 a 1825, colocando em violenta oposição as duas partes dentro do Reino Unido de Portugal, Brasil e Algarves. As Cortes Gerais e<b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../07-09-independenciadobrasil.html")

                btn_resultadocomemorativa.style.display = 'none'
                break;

            // Fim do Mês de Setembro
            // Mês de Outubro
            case '12/10':   // (feriado) Dia de Nossa Senhora Aparecida (Padroeira do Brasil)
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é Dia de Nossa Senhora Aparecida <a href="../feriados/12-10-diadenossasenhora.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>Dia de Nossa Senhora Aparecida</b> é a padroeira do Brasil. Venerada na Igreja Católica, Nossa Senhora Aparecida é representada por uma pequena imagem de terracota de Nossa Senhora da Imaculada Conceição, atualmente alojada na Catedral<b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../feriados/12-10-diadenossasenhora.html")

                btn_resultadocomemorativa.style.display = 'none'
                break;

            // Fim do Mês de Outubro
            // Mês de Novembro
            case '2/11':   // (feriado) Finados
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é Dia de Finados ou Dia dos Mortos <a href="../feriados/02-11-finados.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>Dia de Finados ou Dia dos Mortos</b> é celebrado pela Igreja Católica no dia 2 de novembro Desde o século II, alguns cristãos rezavam pelos falecidos quando visitavam os túmulos dos mártires. No século V, a Igreja dedicava um dia do ano para rezar por todos os mortos já esquecidos. O abade Odilo de Cluny, no final do século<b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../feriados/02-11-finados.html")

                btn_resultadocomemorativa.style.display = 'none'
                break;

            case '15/11':   // (feriado) Proclamação da República
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é a Proclamação da República <a href="../feriados/15-11-proclamacaodarepublica.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>A Proclamação da República Brasileira</b>, também referida na História do Brasil como Golpe Republicano, foi um golpe de Estado político-militar, ocorrido em 15 de novembro de 1889, que instaurou a forma republicana presidencialista de governo no Brasil<b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../feriados/15-11-proclamacaodarepublica.html")

                btn_resultadocomemorativa.style.display = 'none'
                break;

            // Fim do Mês de Novembro
            // Mês de Dezembro
            case '25/12':   // (feriado) Natal
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é Natal <a href="../feriados/25-12-natal.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>Natal</b> ou Dia de Natal é um feriado e festival religioso cristão comemorado anualmente em 25 de dezembro (nos países eslavos e ortodoxos, cujos calendários eram baseados no calendário juliano, o Natal é comemorado no dia<b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../feriados/25-12-natal.html")

                btn_resultadocomemorativa.style.display = 'none'
                break;

            case '31/12':   // (Comemoração) Réveillon
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é Réveillon <a href="../comemorativas/m12/31-12-Reveillon.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparacomemorativa.innerHTML = `<b>A véspera de Ano-novo</b>, também chamada de réveillon termo da língua francesa que significa "reanimar", "despertar", virada de ano, ou passagem de ano refere-se ao dia 31 de dezembro, precedente ao Dia de Ano-Novo nos países que<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m12/31-12-Reveillon.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                

            // Fim do Mês de Dezembro
            default:
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> não é um feriado nacional nem data comemorativa ou ainda não foi adicionado ao site.`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'none'
                btn_resultadocomemorativa.style.display = 'none'
                break;
        }
       
        pegardia.value = ''
        pegarmes.value = ''
        dataswitch = ''
}

/*

            case '0/0':   // (feriado) nome do feriado
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é  <a href="../diretotio do link"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>nome do feriado</b> é <b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../diretorio do link")

                btn_resultadocomemorativa.style.display = 'none'
                break;


            case '0/0':   // (Comemoração) nome da comemoração
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é  <a href="../comemorativas/diretorio do link"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparacomemorativa.innerHTML = `<b>nome da comemoração</b> é <b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/diretorio do link")

                btn_resultadoferiado.style.display = 'none'
                break;
                
*/
