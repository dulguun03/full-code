onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};


// Button interactions
document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  
  const messages = [
      "Are you sure?",
      "Really sure??",
      "Are you positive?",
      "Pookie please...",
      "Just think about it!",
      "If you say no, I will be really sad...",
      "I will be very sad...",
      "I will be very very very sad...",
      "Ok fine, I will stop asking...",
      "Just kidding, say yes please! ❤️"
  ];
  let messageIndex = 0;
  
  yesButton.addEventListener("click", () => {
      window.location.href = "yes_page.html";
  });
  
  noButton.addEventListener("click", () => {
      if (messageIndex < messages.length) {
          alert(messages[messageIndex]);
          messageIndex++;
      }
  });
  
  noButton.addEventListener("mouseover", () => {
      const x = Math.random() * window.innerWidth * 0.8;
      const y = Math.random() * window.innerHeight * 0.8;
      noButton.style.position = "absolute";
      noButton.style.left = `${x}px`;
      noButton.style.top = `${y}px`;
  });
});
