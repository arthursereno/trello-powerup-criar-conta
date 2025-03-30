let cooldown = false;

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: '➕ Criar Conta CA',
      callback: function(t) {
        if (cooldown) {
          return t.alert({ message: '⏳ Processando...' });
        }

        cooldown = true; // ativa o "bloqueio"
        setTimeout(() => { cooldown = false; }, 3000); // libera após 3 segundos

        return t.board('id')
          .then(function(board) {
            const webhookUrl = `https://n8n.api-blogfeelgood.fun/webhook/duplicar-conta`;
            return fetch(webhookUrl, {
              method: 'GET'
            })
            .then(() => t.alert({ message: '✅ Nova conta criada com sucesso!' }))
            .catch(() => t.alert({ message: '❌ Erro ao criar conta.' }));
          });
      }
    }];
  }
});
