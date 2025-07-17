const board = document.getElementById("game-board");
    const scoreDisplay = document.getElementById("score");
    const winMessage = document.getElementById("win-message");

    let emojis = ["🐱", "🐶", "🦊", "🐵", "🦁", "🐸", "🐱", "🐶", "🦊", "🐵", "🦁", "🐸"];
    let firstCard, secondCard;
    let lock = false;
    let moves = 0;
    let matchedCount = 0;

    function startGame() {
      board.innerHTML = "";
      moves = 0;
      matchedCount = 0;
      scoreDisplay.textContent = "Moves: 0";
      winMessage.style.display = "none";
      firstCard = secondCard = null;
      lock = false;

      let shuffled = emojis.sort(() => 0.5 - Math.random());

      shuffled.forEach(emoji => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <div class="front">${emoji}</div>
          <div class="back">?</div>
        `;
        card.dataset.emoji = emoji;
        board.appendChild(card);

        card.addEventListener("click", () => handleCardClick(card));
      });
    }

    function handleCardClick(card) {
      if (lock || card.classList.contains("flipped")) return;

      card.classList.add("flipped");

      if (!firstCard) {
        firstCard = card;
        return;
      }

      secondCard = card;
      lock = true;
      moves++;
      scoreDisplay.textContent = `Moves: ${moves}`;

      if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
        matchedCount++;
        resetTurn();
        if (matchedCount === emojis.length / 2) {
          winMessage.style.display = "block";
        }
      } else {
        setTimeout(() => {
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");
          resetTurn();
        }, 1000);
      }
    }

    function resetTurn() {
      [firstCard, secondCard] = [null, null];
      lock = false;
    }

    // Start the game on page load
    startGame();
