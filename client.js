window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: '➕ Criar Conta CA',
      callback: function(t) {
        return t.board('id')
          .then(function(board) {
            const webhookUrl = `https://n8n.api-blogfeelgood.fun/webhook/duplicar-conta`;
            return fetch(webhookUrl, {
              method: 'GET'
            })
            .then(() => t.alert({ message: '✅ Nova conta criada!' }))
            .catch(() => t.alert({ message: '❌ Erro ao criar conta.' }));
          });
      }
    }];
  }
});
