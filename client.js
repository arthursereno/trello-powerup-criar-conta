// Variável global que persiste entre cliques
window.cooldown = false;

window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: '➕ Criar Conta CA',
      callback: function(t) {
        if (window.cooldown) {
          return t.alert({ message: '⏳ Processando...' });
        }

        // Ativa cooldown
        window.cooldown = true;
        setTimeout(() => {
          window.cooldown = false;
        }, 3000);

        return t.board('id')
          .then(function(board) {
            const webhookUrl = `https://n8n.api-blogfeelgood.fun/webhook/duplicar-conta`;
            return fetch(webhookUrl, {
              method: 'GET'
            })
            .then(() => t.alert({ message: '✅ Nova conta criada!' }))
            .catch(() => t.alert({ message: '❌ Erro ao criar a conta.' }));
          });
      }
    }];
  }
});
