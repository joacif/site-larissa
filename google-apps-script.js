/**
 * Código para integrar o formulário do site ao Google Sheets
 * 
 * INSTRUÇÕES:
 * 1. Abra a sua Planilha no Google Sheets (a que recebe as respostas ou uma nova)
 * 2. No menu superior, clique em "Extensões" > "Apps Script"
 * 3. Apague todo o conteúdo que estiver no editor e cole o código abaixo
 * 4. Clique no ícone de disquete (Salvar) ou pressione Ctrl + S
 * 5. Clique no botão azul "Implantar" (Deploy) no canto superior direito > "Nova implantação"
 * 6. Na engrenagem ao lado de "Selecione o tipo", escolha "App da Web" (Web App)
 * 7. Configure:
 *    - Descrição: "API Form Site"
 *    - Executar como: "Eu (seu e-mail)"
 *    - Quem pode acessar: "Qualquer pessoa" (Anyone)
 * 8. Clique em "Implantar", autorize o acesso com sua conta Google
 * 9. Copie a "URL do app da Web" gerada
 * 10. Cole essa URL no arquivo `.env.local` na variável NEXT_PUBLIC_GOOGLE_SHEETS_URL
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Se a primeira linha estiver vazia, cria os cabeçalhos
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Data/Hora de Envio",
        "Nome",
        "WhatsApp",
        "E-mail",
        "Serviço",
        "Data Nascimento",
        "Horário Nascimento",
        "Cidade Nascimento",
        "Mensagem"
      ]);
      // Formata a linha de cabeçalho
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#f3f3f3");
    }

    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }

    sheet.appendRow([
      data.data_envio || new Date().toLocaleString("pt-BR"),
      data.nome || "",
      data.whatsapp || "",
      data.email || "",
      data.servico || "",
      data.data_nascimento || "",
      data.horario_nascimento || "",
      data.cidade_nascimento || "",
      data.mensagem || ""
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Dados registrados com sucesso" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("API de agendamento ativa e funcionando.");
}
