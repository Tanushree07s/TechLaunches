 // Initial wallets with stake
    const wallets = {
      "Alice": 10,
      "Bob": 30,
      "Carol": 60
    };

    let chain = [];
    let previousHash = "0000GENESIS";
    const reward = 10;

    function weightedRandomSelection(wallets) {
      let total = Object.values(wallets).reduce((a, b) => a + b, 0);
      let rand = Math.random() * total;
      let cumulative = 0;
      for (let name in wallets) {
        cumulative += wallets[name];
        if (rand < cumulative) return name;
      }
    }

    function forgeBlock() {
      const validator = weightedRandomSelection(wallets);
      wallets[validator] += reward;

      const block = {
        index: chain.length + 1,
        validator,
        reward,
        previousHash,
        hash: generateFakeHash()
      };

      chain.push(block);
      previousHash = block.hash;
      updateWalletDisplay();
      logBlock(block);
    }

    function generateFakeHash() {
      return Math.random().toString(36).substring(2, 10) + "...";
    }

    function updateWalletDisplay() {
      const container = document.getElementById("walletDisplay");
      container.innerHTML = "";
      for (let name in wallets) {
        container.innerHTML += `<div class="wallet"><strong>${name}</strong><br/>💰 ${wallets[name]}</div>`;
      }
    }

    function logBlock(block) {
      const log = document.getElementById("log");
      log.innerHTML = `<div class='block'>
        <strong>Block #${block.index}</strong><br>
        Validator: ${block.validator}<br>
        Reward: ${block.reward}<br>
        Prev Hash: ${block.previousHash}<br>
        Hash: ${block.hash}
      </div>` + log.innerHTML;
    }

    // Initial load
    updateWalletDisplay();