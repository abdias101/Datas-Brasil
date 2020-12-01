
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
                break;
                
            case 'maiorq31e12':
                calendariop.innerHTML = 'O dia deve estar entre 1 e 31 e o mês entre 1 e 12 ou não será valido.'
                break;
        
            case 'maiorq31':
                calendariop.innerHTML = 'O dia deve ser selecionado entre 1 e 31 ou não será valido.'
                break;
                    
            case 'maiorq12':
                calendariop.innerHTML = 'O mês deve ser selecionado entre 1 e 12 ou não será valido.'
                break;
                    
            // Mês de Janeiro

            case '1/1':   // (feriado) ano-novo
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é Confraternização Universal (Ano Novo) <a href="../feriados/01-01-anonovo.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparaferiado.innerHTML = `<b>Confraternização Universal (Ano Novo)</b> é o momento em que um novo ano civil começa e um novo calendário é iniciado Em muitas culturas ao redor do mundo, o evento é comemorado principalmente na véspera da data chamada de<b>...</b>`
                pparacomemorativa.innerHTML = `<b>O que é uma data comemorativa?</b> Datas comemorativas são datas escolhidas para relembrar eventos históricos, conquistas importantes ou lutas que ainda estão sendo travadas por um grupo. Muitas delas possuem alcance internacional enquanto outras podem ser especificas para um país ou região.`
                btn_resultadoferiado.style.display = 'block'
                btn_resultadoferiado.setAttribute ("href", "../feriados/01-01-anonovo.html")

                btn_resultadocomemorativa.style.display = 'none'
                break;
                
            // Fim do Mês de Janeiro
            // Mês de Fevereiro
            case '16/2':   // (Comemoração) carnaval
                calendariop.innerHTML = `Olá <b>${pegoudia} de ${nomedosmeses[pegoumes]}</b> é Carnaval <a href="../comemorativas/m02/16-02-carnaval.html"><b>Saiba Mais Aqui</b></a> ou no link abaixo.`
                pparacomemorativa.innerHTML = `<b>Carnaval</b> é um festival do cristianismo ocidental que ocorre antes da estação litúrgica da Quaresma. Os principais eventos ocorrem tipicamente durante fevereiro ou início de março, durante o período historicamente conhecido como<b>...</b>`
                pparaferiado.innerHTML = `<b>O que é um feriado?</b> Feriado é uma data em que determinada ocasião é comemorada por uma nação, comunidade, religião, grupo étnico ou classe trabalhista. Os governos podem instituir feriados em nível federal, estadual, distrital ou ainda municipal, dependendo da extensão da importância comemorada.`
                btn_resultadocomemorativa.style.display = 'block'
                btn_resultadocomemorativa.setAttribute ("href", "../comemorativas/m02/16-02-carnaval.html")

                btn_resultadoferiado.style.display = 'none'
                break;
                
            // Fim do Mês de Fevereiro
            // Mês de Março

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
