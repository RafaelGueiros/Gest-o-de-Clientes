$(document).on("ready", function () {
    // Audio-Inicio

    $('audio').audioPlayer();
    $(document).on("click", ".change-speed", function () {
        $(this).addClass("btn-primary");
        $(this).siblings().removeClass("btn-primary").addClass("btn-default");
        $('audio')[0].playbackRate = $(this).data("speed");
    });
    $(document).on("click", "#downloadAudio", function () {
        var audioSource = $('audio').attr("src");
        audioSource = audioSource.replace("stream", "get");
        if (typeof ($("#hiddenDownload")[0]) === "undefined")
            $("body").append($("<a>", { href: audioSource, download: "download", id: "hiddenDownload", css: { display: "none" }, html: "Click Here If You Can" }));
        else
            $("#hiddenDownload").attr("href", audioSource);
        $("#hiddenDownload")[0].click();
    });
    $(document).on("click", ".plus-seconds", function () {

        var adicionalTime = $(this).data("increase");
        var currentTime = $('audio')[0].currentTime;
        currentTime += adicionalTime;
        $('audio')[0].currentTime = currentTime;
    });
    // Audio-Fim

    // Formulario-Inicio
    $(document).on("change", ".select-resposta", function () {
        OnChangeResposta(this);
    });

    $(document).on("change", ".check-pergunta", function () {
        OnChangeCheckbox(this);
    });

    $(document).on("change", "#cbConcorda", function () {
        if ($(this).val() == "true") {
            $(".txtNaoConcorda").addClass("hidden");
            $("#txtPorqueNaoConcorda").val("");
        }
        else {
            $(".txtNaoConcorda").removeClass("hidden");
        }
    });

    $(document).on("click", "#btnLogin", function () {
        $("#btnLogin").attr("disabled", true);
        var login = $("#txtLogin").val();
        var senha = $("#txtSenha").val();

        $.post(urlBase + "/Monitoria/LoginAtendente", { idMonitoria: id_monitoria, login: login, senha: senha })
        .done(function (res) {
            console.log(res);
            if (res == "True") {
                $(".divResposta").removeClass("hidden");
                $("#txtLogin").attr("readonly", true);
                $("#txtSenha").attr("readonly", true);
            }
            else {
                $("#btnLogin").attr("disabled", false);
                alert("A combinação login e senha está incorreta");
            }
        })
        .fail(function () {
            $("#btnLogin").attr("disabled", false);
            alert("Erro ao tentar logar-se");
        });
    });

    $(document).on("click", "#btnSalvarFormulario", function () {
        if (ValidarFormulario()) {
            var observacao = $("#txtObservacaoChamada").val();
            var novoscript = $("#txtNovoScript").val();
            var entendeuaquisicao = $("#txtEntendeuAquisicao").val();
            var ativarchips = $("#txtAtivarchips").val();
            var entendeuvaloresindividuais = $("#txtEntendeuValoresIndividuais").val();
            var assinaturapospre = $("#txtAssinaturaPosPre").val();            
            var Tabulacao = $("#txtTabulacaoCorreta").val();
            var contaonline = $("#txtContaOnline").val();
            var argumentacaocontaonline = $("#txtargumentoucontaonline").val();            
            var Tabulacao_Correta = $("#cbTabulacao").val();
            var notaFinal = +$("#valorPontuacao").html();
            var notaTsa = +$("#valorPontuacaoTsa").html();
            //
            //Campos Adicionados em 18/10/2016
            //
            var ofertouFibra = $("#cbOfertouFibra").val();
            var aceitouFibra = $("#cbAceitouFibra").val();
            var motivoRecusa = $("#cbMotivoRecusa").val();
            var produtosFixa = $("#cbProdutosFixa").val();
            var produtosMovel = $("#cbProdutosMovel").val();
            var sabiaTransferencia = $("#cbSabiaTransferencia").val();
            var argumentacaoRecusa = $("#cbArgumentacaoRecusa").val();
            var outrosMotivos = $("#txtOutrosMotivos").val();
            //
            //Campos Adicionados em 18/10/2016
            //
            $.post(urlBase + "/Monitoria/SalvarMonitoria", {
                idMonitoria: id_monitoria, notaFinal: notaFinal, notaTsa: notaTsa,
                observacao: observacao, novoscript: novoscript, entendeuaquisicao: entendeuaquisicao,
                ativarchips: ativarchips, entendeuvaloresindividuais: entendeuvaloresindividuais,
                assinaturapospre: assinaturapospre, Tabulacao: Tabulacao, Tabulacao_Correta: Tabulacao_Correta,
                contaonline: contaonline, argumentacaocontaonline: argumentacaocontaonline,
                ofertouFibra: ofertouFibra,
                aceitouFibra: aceitouFibra,
                motivoRecusa: motivoRecusa,
                produtosFixa: produtosFixa,
                produtosMovel: produtosMovel,
                sabiaTransferencia: sabiaTransferencia,
                argumentacaoRecusa: argumentacaoRecusa,
                outrosMotivos: outrosMotivos
            })
            .done(function (res) {
                console.log(res);
                if (res == false)
                    alert("Erro ao salvar monitoria");
                else {
                    alert("Monitoria salva com sucesso!")
                    window.location = urlBase + "/Home";
                }
            })
            .fail(function () {
                alert("Erro ao salvar monitoria");
            });
        }
    });

    //SALVAR DA TELA EM BRANCO
    $(document).on("click", "#btnSalvarFormularioNovo", function () {
        if (ValidarFormulario()) {
            var observacao = $("#txtObservacaoChamada").val();
            var novoscript = $("#txtNovoScript").val();
            var entendeuaquisicao = $("#txtEntendeuAquisicao").val();
            var ativarchips = $("#txtAtivarchips").val();
            var entendeuvaloresindividuais = $("#txtEntendeuValoresIndividuais").val();
            var assinaturapospre = $("#txtAssinaturaPosPre").val();            
            var Tabulacao = $("#txtTabulacaoCorreta").val();
            var contaonline = $("#txtContaOnline").val();
            var argumentacaocontaonline = $("#txtargumentoucontaonline").val();            
            var Tabulacao_Correta = $("#cbTabulacao").val();
            var notaFinal = +$("#valorPontuacao").html();
            var notaTsa = +$("#valorPontuacaoTsa").html();
            //
            //Campos Adicionados em 18/10/2016
            //
            var ofertouFibra = $("#cbOfertouFibra").val();
            var aceitouFibra = $("#cbAceitouFibra").val();
            var motivoRecusa = $("#cbMotivoRecusa").val();
            var produtosFixa = $("#cbProdutosFixa").val();
            var produtosMovel = $("#cbProdutosMovel").val();
            var sabiaTransferencia = $("#cbSabiaTransferencia").val();
            var argumentacaoRecusa = $("#cbArgumentacaoRecusa").val();
            var outrosMotivos = $("#txtOutrosMotivos").val();
            //
            //Campos Adicionados em 18/10/2016
            //
            //
            //CAMPOS PREENCHIDOS PELO MONITOR
            //
            var IdChamada = $("#txtIdChamada").val();
            var Data = $("#txtData").val();
            var Hora = $("#txtHora").val();
            var Operador = $("#txtOperador").val();
            var IdAuditor = $("#txtIdAuditor").val();
            var Monitor = $("#txtMonitor").val();
            var Supervisor = $("#txtSupervisor").val();
            var Operacao = $("#txtOperacao").val();
            var TabulacaoMonitor = $("#txtTabulacao").val();
            var Status = $("#txtStatus").val();
            var Obs = $("#txtObs").val();
            var Nome = $("#txtNome").val();
            var CpfTitular = $("#txtCpfTitular").val();
            var RgTitular = $("#txtRgTitular").val();
            var DataNascimento = $("#txtDataNascimento").val();
            var DataNascimentoTerceiro = $("#txtDataNascimentoTerceiro").val();
            var CpfSolicitante = $("#txtCpfSolicitante").val();
            var Tel1 = $("#txtTel1").val();
            var Tel2 = $("#txtTel2").val();
            var Email = $("#txtEmail").val();
            var NomeSolicitante = $("#txtNomeSolicitante").val();
            var RgSolicitante = $("#txtRgSolicitante").val();
            var Endereco = $("#txtEndereco").val();
            var NumEndereco = $("#txtNumEndereco").val();
            var Complemento = $("#txtComplemento").val();
            var Bairro = $("#txtBairro").val();
            var CEP = $("#txtCEP").val();
            var Cidade = $("#txtCidade").val();
            var UF = $("#txtUF").val();
            var Plano1 = $("#txtPlano1").val();
            var Plano2 = $("#txtPlano2").val();
            var Solicitacao1 = $("#txtSolicitacao1").val();
            var Solicitacao2 = $("#txtSolicitacao2").val();
            var VencimentoFatura = $("#txtVencimentoFatura").val();
            var NumeroPortado = $("#txtNumeroPortado").val();
            var Portabilidade = $("#txtPortabilidade").val();
            var TipoPlano = $("#txtTipoPlano").val();
            var Operadora = $("#txtOperadora").val();
            var Email2 = $("#txtEmail2").val();
            var NomeMae = $("#txtNomeMae").val();
            var NomeMaeSolicitante = $("#txtNomeMaeSolicitante").val();
            //
            //CAMPOS PREENCHIDOS PELO MONITOR
            //

            $.post(urlBase + "/Monitoria/SalvarMonitoriaCriada", {
                idMonitoria: id_monitoria,
                notaFinal: notaFinal,
                notaTsa: notaTsa,
                observacao: observacao,
                novoscript: novoscript,
                entendeuaquisicao: entendeuaquisicao,
                ativarchips: ativarchips,
                entendeuvaloresindividuais: entendeuvaloresindividuais,
                assinaturapospre: assinaturapospre,
                Tabulacao: Tabulacao,
                Tabulacao_Correta: Tabulacao_Correta,
                contaonline: contaonline,
                argumentacaocontaonline: argumentacaocontaonline,
                ofertouFibra: ofertouFibra,
                aceitouFibra: aceitouFibra,
                motivoRecusa: motivoRecusa,
                produtosFixa: produtosFixa,
                produtosMovel: produtosMovel,
                sabiaTransferencia: sabiaTransferencia,
                argumentacaoRecusa: argumentacaoRecusa,
                outrosMotivos: outrosMotivos,
                //
                //CAMPOS PREENCHIDOS PELO MONITOR
                //
                IdChamada: IdChamada,
                Data: Data,
                Hora: Hora,
                Operador: Operador,
                IdAuditor: IdAuditor,
                Monitor: Monitor,
                Supervisor: Supervisor,
                Operacao: Operacao,
                TabulacaoMonitor: TabulacaoMonitor,
                Status: Status,
                Obs: Obs,
                Nome: Nome,
                CpfTitular: CpfTitular,
                RgTitular: RgTitular,
                DataNascimento: DataNascimento,
                DataNascimentoTerceiro: DataNascimentoTerceiro,
                CpfSolicitante: CpfSolicitante,
                Tel1: Tel1,
                Tel2: Tel2,
                Email: Email,
                NomeSolicitante: NomeSolicitante,
                RgSolicitante: RgSolicitante,
                Endereco: Endereco,
                NumEndereco: NumEndereco,
                Complemento: Complemento,
                Bairro: Bairro,
                CEP: CEP,
                Cidade: Cidade,
                UF: UF,
                Plano1: Plano1,
                Plano2: Plano2,
                Solicitacao1: Solicitacao1,
                Solicitacao2: Solicitacao2,
                VencimentoFatura: VencimentoFatura,
                NumeroPortado: NumeroPortado,
                Portabilidade: Portabilidade,
                TipoPlano: TipoPlano,
                Operadora: Operadora,
                Email2: Email2,
                NomeMae: NomeMae,
                NomeMaeSolicitante: NomeMaeSolicitante
            })
            .done(function (res) {
                console.log(res);
                if (res == false)
                    alert("Erro ao salvar monitoria");
                else {
                    alert("Dados salvos!")
                    $("#btnSalvarFormulario").click();
                }
            })
            .fail(function () {
                alert("Erro ao salvar monitoria");
            });
        }
    });

    $(document).on("click", "#btnSalvarResposta", function () {

        var observacaoOperador = $("#txtPorqueNaoConcorda").val();
        var concordaMonitoria = $("#cbConcorda").val();

        $.post(urlBase + "/Monitoria/SalvarMonitoriaAtendente", { idMonitoria: id_monitoria, observacaoOperador: observacaoOperador, concordaMonitoria: concordaMonitoria })
        .done(function (res) {
            console.log(res);
            if (res == false)
                alert("Erro ao salvar monitoria atendente");
            else {
                alert("Resposta do atendente salva com sucesso!")
                window.location = urlBase + "/Monitoria/Listar";
            }
        })
        .fail(function () {
            alert("Erro ao salvar monitoria atendente");
        });
    });


    $(document).on("focusout", ".text-pergunta", function () {
        var $elem = $(this);
        var $select = $elem.parent().find(".check-pergunta");

        var id_pergunta = $select.data("id-pergunta");
        var obs = $elem.val();

        if (!$elem.hasClass("hidden"))
            SalvarObservacao(id_pergunta, obs);
    });

    $(document).on("change keyup paste", ".text-pergunta", function () {
        OnChangeTextPergunta(this);
    });

    // Formulario-Fim
});

function ContructGrupo(p_painel_master, p_nivel, p_nome_grupo, p_valor, p_zera_monitoria, p_sub_grupo_desc, p_id_sub_grupo) {

    var $painel;
    if (p_nivel == "sub-grupo") {

        $painel = $('<div class="panel panel-default" data-panel-sub-grupo="' + p_id_sub_grupo + '"><div class="panel-heading"><div><span class="panel-title pull-left">' + p_nome_grupo + '</span><span class="pull-right"><div style="display: inline; margin-right: 20px"><span>Pontuação: </span><span class="pontuacao">' + p_valor + '</span></div><a href="javascript:void(0)"><span class="glyphicon glyphicon-info-sign" data-toggle="modal" data-target="#modal-sub-grupo-' + p_id_sub_grupo + '"></span></a></span><div class="clearfix"></div></div></div><div class="panel-body"><div class="form-group"><select data-id-sub-grupo="' + p_id_sub_grupo + '" class="form-control select-resposta"><option data-value="0" value="Conforme">Conforme</option> <option data-zera-monitoria="' +p_zera_monitoria + '" data-value="' + p_valor + '" value="Não Conforme">Não Conforme</option><option data-value="0" value="N/A">N/A</option></select></div><ul class="list-group hidden"></ul></div></div>');
        //<option value="">== Selecione ==</option>

        var $pontuacaoGrupo = p_painel_master.find(".pontuacao");
        $pontuacaoGrupo.val($pontuacaoGrupo.val() + p_valor);

        // Contruir modal de descrição longa da pergunta

        var modalContainer = $("#modalsContainer");
        var modal = $("<div>", { id: "modal-sub-grupo-" + p_id_sub_grupo, class: "modal fade", role: "dialog" });
        var modalDialog = $("<div>", { class: "modal-dialog" });
        var modalContent = $("<div>", { class: "modal-content" });
        var modalBody = $("<div>", { class: "modal-body" });
        var h4 = $("<h4>", { html: "Descrição da Pergunta" });
        var modalInside = $("<div>", { class: "modal-inside", html: p_sub_grupo_desc });
        var textCenter = $("<div>", { class: "text-center" });
        var anchor = $("<a>", { href: "#", class: "btn btn-lg btn-default", "data-dismiss": "modal", html: "Fechar" });

        textCenter.append(anchor);
        modalBody.append(h4).append(modalInside).append(textCenter);
        modalContent.append(modalBody);
        modalDialog.append(modalContent);
        modal.append(modalDialog);
        modalContainer.append(modal);

    }
    else if (p_nivel == "grupo" && p_painel_master.find("[data-panel-grupo='" + p_nome_grupo + "']").length == 0) {
        $painel = $('<div class="panel panel-default" data-panel-grupo="' + p_nome_grupo + '"><div class="panel-heading"><span class="panel-title text-info">' + p_nome_grupo + '</span></div><div class="panel-body"></div></div>');
        //<span class="pull-right"><div style="display: inline-block; margin-right: 20px"><span>Pontuação: </span><span class="pontuacao">0</span></div></span>
    }

    if (p_painel_master.attr("id") != "formularioContainer" && !p_painel_master.hasClass("panel-body"))
        p_painel_master = p_painel_master.find(".panel-body").first();

    p_painel_master.append($painel);

    return true;

}

function ContructPergunta(p_sub_grupo, p_id_pergunta, p_pergunta_desc, p_conta_tsa) {

    var container = $("#formularioContainer");
    container = container.find("[data-panel-sub-grupo='" + p_sub_grupo + "']");
    container = container.find("ul.list-group");

    var pergunta = $('<li class="list-group-item"><div class="checkbox"><label><input type="checkbox" class="check-pergunta" value="true" data-conta-tsa="' + p_conta_tsa + '" data-id-sub-grupo="' + p_sub_grupo  + '" data-id-pergunta="' + p_id_pergunta + '" id="check-pergunta-' + p_id_pergunta + '">' + p_pergunta_desc + '</label></div><textarea rows="3" maxlength="1000" class="form-control hidden text-pergunta" id="text-pergunta-' + p_id_pergunta + '"></textarea><p class="help-block text-right" id="char-text-pergunta-' + p_id_pergunta + '">1000 caracteres restantes</p></li>');

    container.append(pergunta);
    return true;

}

function OnChangeTextPergunta(elem) {
    var id = $(elem)[0].id.replace("text-pergunta-", "");
    // troco o símbolo de retorno por dois caracteres, já que o maxlength do html considera como dois caracteres
    $("#char-text-pergunta-" + id).html((1000 - $(elem).val().replace(/\n\r?/g, 'AA').length) + " caracteres restantes");
}

function OnChangeResposta(elem) {
    var $elem = $(elem);
    $elem.attr("disabled", true);
    $elem.parent().removeClass("has-error");

    var optSelecionada = $elem.find(":selected");
    var valorResposta =  optSelecionada.data("value");
    var idSubgrupo = $elem.data("id-sub-grupo");
    var obs = "";


    AtualizarPontuacao(valorResposta, $elem);

    SalvarSubGrupo(idSubgrupo, optSelecionada.val(), obs)

    if (optSelecionada.data("zera-monitoria")) {
        ZerarPontuacao($elem);
    }

    if (optSelecionada.html() == "Não Conforme") {
        $elem.addClass("bg-danger");
        $elem.closest(".panel").find("ul.list-group").removeClass("hidden");
    }
    else {
        $elem.removeClass("bg-danger");
        $elem.closest(".panel").find("ul.list-group").addClass("hidden");
    }

    // ativo o select após 2 segundos
    setTimeout(function () {
        if (status == 0 || (status == 1 && is_supervisor == true))
            $elem.attr("disabled", false);
    }, 2000);
}

function OnChangeCheckbox(elem) {
    var $elem = $(elem);
    $elem.attr("disabled", true);

    var checked = $elem.is(":checked");
    var idPergunta = $elem.data("id-pergunta");
    var contaTsa = $elem.data("conta-tsa");
    $elem.closest("ul.list-group").children().removeClass("has-error");
    var $textarea = $elem.closest("li.list-group-item").find(".text-pergunta");

    if (checked) {
        $textarea.removeClass("hidden");
    }
    else {
        $textarea.val("");
        $textarea.addClass("hidden");
        $textarea.trigger("focusout")
    }

    SalvarPergunta(idPergunta, checked);

    VerificarPerguntaTSA($elem);

    // ativo o select após 2 segundos
    setTimeout(function () {
        if (status == 0 || (status == 1 && is_supervisor == true))
            $elem.attr("disabled", false);
    }, 2000);
}

function SalvarSubGrupo(id_sub_grupo, resposta, obs) {
    if (resposta != "") {
        $.post(urlBase + "/Monitoria/SalvarSubGrupo", { idMonitoria: id_monitoria, idSubGrupo: id_sub_grupo, resposta: resposta, observacao: obs })
            .done(function (res) {
                console.log(res);
                if (res == false)
                    alert("Erro ao salvar sub grupo");
            })
            .fail(function () {
                alert("Erro ao salvar sub grupo");
            });
    }
}

function SalvarPergunta(id_pergunta, optSelecionada) {
    $.post(urlBase + "/Monitoria/SalvarPergunta", { idMonitoria: id_monitoria, idPergunta: id_pergunta, opcao: optSelecionada })
        .done(function (res) {
            console.log(res);
            if (res == false) {
                $("#check-pergunta-" + id_pergunta).attr("readonly", true);
                setTimeout(function () {
                    $("#check-pergunta-" + id_pergunta).prop('checked', false);
                }, 2000)                
            }
        })
        .fail(function () {
            $("#check-pergunta-" + id_pergunta).attr("readonly", true);
            setTimeout(function () {
                $("#check-pergunta-" + id_pergunta).prop('checked', false);
            }, 2000)
        });
}

function SalvarObservacao(id_pergunta, obs) {
    $.post(urlBase + "/Monitoria/SalvarObservacaoPergunta", { idMonitoria: id_monitoria, idPergunta: id_pergunta, obs: obs })
        .done(function (res) {
            console.log(res);
            if (res == false)
                alert("Erro ao salvar observação da pergunta");
        })
        .fail(function () {
            alert("Erro ao salvar observação da pergunta");
        });
}

function ChecarRespostasAnteriores() {
    // TODO
}

var subGruposAtivos = [];

var gruposEspeciais = [
    43, 44, 45, 46,
    62, 63, 64, 65,
    80, 81, 82, 83,
    153, 154, 155, 156, 157,
    192, 193, 194, 195, 196,
    215, 216, 217, 218, 219,
    254, 255, 256, 257, 258    
];

function AtualizarPontuacao(valor, $subGrupo, $pergunta) {
    var valorInicial = 100;

    if (valor == null)
        valor = 0;

    var index = -1;

    // se estou mudando o combo para um item sem valor, removo o item da listagem de elementos com pontos ativos
    if (valor == 0) {
        // remove item se ele existir        

        for (var i = 0; i < subGruposAtivos.length; i++) {
            if (subGruposAtivos[i].id_sub_grupo == $subGrupo.data("id-sub-grupo")) {
                index = i;
                break;
            }
        }

        if (index > -1)
            subGruposAtivos.splice(index, 1);
    }
    else {
        // adiciona o item se ele não existir existir
        var index = -1;

        for (var i = 0; i < subGruposAtivos.length; i++) {
            if (subGruposAtivos[i].id_sub_grupo == $subGrupo.data("id-sub-grupo")) {
                index = i;
                break;
            }
        }

        if (index == -1)
            subGruposAtivos.push({ valor: valor, id_sub_grupo: $subGrupo.data("id-sub-grupo") });
    }
    
    var $pontuacao = $("#valorPontuacao");
    var $pontuacaoTsa = $("#valorPontuacaoTsa");

    var novoValor = valorInicial;
    var novoValorTsa = valorInicial;
    var temSubGrupoEspecial = false;
    var temSubGrupoEspecialTsa = false;

    subGruposAtivos.forEach(function (item) {

        var existePerguntaContaTsa = perguntasAtivas.some(function (pergunta) {
            return pergunta.id_sub_grupo == item.id_sub_grupo && pergunta.conta_tsa == true;
        });

        if (existePerguntaContaTsa) {
            // se pertence ao grupo especial e não se passou nenhum outro item do grupo até agora, seto a flag de temSubGrupoEspecial para true e calculo o valor
            if ((inStruct(item.id_sub_grupo, gruposEspeciais))
                && !temSubGrupoEspecialTsa) {
                temSubGrupoEspecialTsa = true;
                novoValorTsa = (novoValorTsa - item.valor) < 0 ? 0 : (novoValorTsa - item.valor);
            }
            // se não pertence ao grupo especial, calculo o valor com este item
            if (!(inStruct(item.id_sub_grupo, gruposEspeciais)))
                novoValorTsa = (novoValorTsa - item.valor) < 0 ? 0 : (novoValorTsa - item.valor);
        }

        // se pertence ao grupo especial e não se passou nenhum outro item do grupo até agora, seto a flag de temSubGrupoEspecial para true e calculo o valor
        if (inStruct(item.id_sub_grupo, gruposEspeciais)
            && !temSubGrupoEspecial) {
            temSubGrupoEspecial = true;
            novoValor = (novoValor - item.valor) < 0 ? 0 : (novoValor - item.valor);
        }
        // se não pertence ao grupo especial, calculo o valor com este item
        if (!(inStruct(item.id_sub_grupo, gruposEspeciais)))
            novoValor = (novoValor - item.valor) < 0 ? 0 : (novoValor - item.valor);
    });

    if (novoValor == 0) {
        $pontuacao.addClass("text-danger");
    }
    else {
        $pontuacao.removeClass("text-danger");
    }
    $pontuacao.html(novoValor);

    if (novoValorTsa == 0) {
        $pontuacaoTsa.addClass("text-danger");
    }
    else {
        $pontuacaoTsa.removeClass("text-danger");
    }
    $pontuacaoTsa.html(novoValorTsa);
}

var perguntasAtivas = [];

function VerificarPerguntaTSA($pergunta) {

    var selecionado = $pergunta.is(":checked");
    var index = -1;

    for (var i = 0; i < perguntasAtivas.length; i++) {
        if (perguntasAtivas[i].id_pergunta == $pergunta.data("id-pergunta")) {
            index = i;
            break;
        }
    }

    var $subGrupo = $("select[data-id-sub-grupo='" + $pergunta.data("id-sub-grupo") + "']")
    var optSelecionada = $subGrupo.find(":selected");
    var valor = optSelecionada.data("value");

    if (selecionado == true) {
        // adiciona o item se ele não existir e remove se existir
        var index = -1;

        for (var i = 0; i < perguntasAtivas.length; i++) {
            if (perguntasAtivas[i].id_pergunta == $pergunta.data("id-pergunta")) {
                index = i;
                break;
            }
        }

        if (index == -1)
            perguntasAtivas.push({
                valor: valor,
                id_sub_grupo: $pergunta.data("id-sub-grupo"),
                id_pergunta: $pergunta.data("id-pergunta"),
                conta_tsa: $pergunta.data("conta-tsa")
            });
    }
    else {
        if (index > -1)
            perguntasAtivas.splice(index, 1);
    }

    AtualizarPontuacao(valor, $subGrupo);
}

function ZerarPontuacao(elem) {
    // TODO
}

function ValidarFormulario() {
    // Sinaliza Sub-Grupos não respondidos
    var subGruposNaoRespondidos = $(".select-resposta").find("option[value='']:selected").parent().parent().addClass("has-error").length;

    /*
    // Sinaliza Sub-Grupos selecionados como Não Conforme e que não tem sub-item especificando o porquê do erro ter ocorrido
    var $li = $(".select-resposta").find("option[value='Não Conforme']:selected").closest(".panel").find("li.list-group-item");

    var naoConformeNaoEspecificado = false;
    $li.each(function () {
        if ($(this).find("input[type=checkbox]:checked").length == 0)
            naoConformeNaoEspecificado = true;

        // Se existe algum checkbox checado       
        if ($(this).find("input[type=checkbox]:checked").length == 0) {
            $(this).addClass("has-error");
        }
    });
    */

    // Sinaliza Sub-Grupos selecionados como Não Conforme e que não tem sub-item especificando o porquê do erro ter ocorrido
    var $ulComNaoConforme = $(".select-resposta").find("option[value='Não Conforme']:selected").closest(".panel").find("ul.list-group");

    var naoConformeNaoEspecificado = false;
    $ulComNaoConforme.each(function () {

        // Se não existe nenhum checkbox checado       
        if ($(this).children().length > 0 && $(this).find("input[type=checkbox]:checked").length == 0) {
            naoConformeNaoEspecificado = true;
            $(this).children().addClass("has-error");
        }
    });

    if (subGruposNaoRespondidos || naoConformeNaoEspecificado) {
        alert("Existem itens a serem respondidos ainda");
        return false;
    }
    return true;
}

function inStruct(val, structure) {

    for (a in structure) {

        if (structure[a] == val && structure.hasOwnProperty(a)) {
            return true;
        }
    }
    return false;
}