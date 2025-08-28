let difficulty = 4;
let currentReward = 50;
let wallet = 0;
let currentTransaction = "Alice pays Bob 5 coins";
let currentPrevHash = "0000abcdef123456";

let miningInterval = null;
let blockMined = false;

function updateDifficulty(val) {
    difficulty = parseInt(val);
    document.getElementById("difficultyValue").textContent = difficulty;
}

function updateWallet(amount) {
    wallet += amount;
    document.getElementById("walletBalance").textContent = wallet;
}

function mine() {
    if (blockMined || miningInterval !== null) return; // prevent multiple mining loops

    const prefix = "0".repeat(difficulty);
    let nonce = 0;
    let hash = "";
    const transaction = currentTransaction;
    const prevHash = currentPrevHash;

    const result = document.getElementById("result");
    result.textContent = "⏳ Mining in progress...";
    result.className = "";
    blockMined = false;

    document.getElementById("addBlockBtn").disabled = true;

    miningInterval = setInterval(() => {
    const data = transaction + prevHash + nonce;
    hash = sha256(data);

    document.getElementById("nonce").textContent = nonce;
    document.getElementById("hash").textContent = hash;

    if (hash.startsWith(prefix)) {
        clearInterval(miningInterval);
        miningInterval = null;
        blockMined = true;

        updateWallet(currentReward);

        result.textContent = `Block mined successfully! Reward: ${currentReward} coins`;
        result.className = "highlight";
        document.getElementById("addBlockBtn").disabled = false;
    }

    nonce++;
    }, 10);
}

function stopMining() {
    if (miningInterval !== null) {
    clearInterval(miningInterval);
    miningInterval = null;
    document.getElementById("result").textContent = "🛑 Mining stopped.";
    document.getElementById("result").className = "";
    }
}

function addNextBlock() {
    if (!blockMined) return;

    const minedHash = document.getElementById("hash").textContent;
    const newTransaction = prompt("Enter new transaction:", "Bob pays Charlie 3 coins");
    if (!newTransaction) return;

    // Update state for the next block
    currentPrevHash = minedHash;
    currentTransaction = newTransaction;
    blockMined = false;

    // Update UI
    document.getElementById("transaction").textContent = currentTransaction;
    document.getElementById("prevHash").textContent = currentPrevHash;
    document.getElementById("nonce").textContent = "0";
    document.getElementById("hash").textContent = "---";
    document.getElementById("result").textContent = "";
    document.getElementById("result").className = "";
    document.getElementById("addBlockBtn").disabled = true;
}

