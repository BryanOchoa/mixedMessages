document.addEventListener("DOMContentLoaded", function () {
    var factParagraph = document.getElementById("fact");
  
    localStorage.removeItem("facts");
  
    function generateRandomFact() {
      var facts = [
        `The Los Angeles Lakers were founded in 1947 as the Minneapolis Lakers before relocating to Los Angeles in 1960.`,
        `The Lakers have won a total of 17 NBA championships, tied with the Boston Celtics for the most in NBA history.`,
        `The team's colors are purple, gold, and white.`,
        `The Lakers' mascot is named "Jack the Laker."`,
        `The Lakers have had several legendary players throughout their history, including Magic Johnson, Kareem Abdul-Jabbar, Shaquille O'Neal, Kobe Bryant, and LeBron James.`,
        `Magic Johnson, known for his flashy style of play, won five NBA championships with the Lakers during the 1980s.`,
        `Kareem Abdul-Jabbar, the NBA's all-time leading scorer, won five NBA championships with the Lakers and is known for his unstoppable skyhook shot.`,
        `Shaquille O'Neal, one of the most dominant centers in NBA history, won three NBA championships with the Lakers alongside Kobe Bryant.`,
        `Kobe Bryant, often regarded as one of the greatest basketball players of all time, spent his entire 20-year NBA career with the Lakers, winning five championships.`,
        `LeBron James, a four-time NBA champion and one of the most accomplished players in NBA history, joined the Lakers in 2018.`,
        `Jerry West, also known as "The Logo," spent his entire playing career with the Lakers and later served as the team's general manager.`,
        `The Lakers have retired numbers for many of their legendary players, including Magic Johnson (#32), Kareem Abdul-Jabbar (#33), Shaquille O'Neal (#34), and Kobe Bryant (#8 and #24).`,
        `The Lakers have the second-most NBA Finals appearances in NBA history, with 32.`,
        `The Lakers' longest winning streak in franchise history is 33 games, achieved during the 1971-1972 season.`,
        `The team's official fight song is "I Love L.A." by Randy Newman.`,
        `The Lakers have had several iconic coaches, including Phil Jackson, Pat Riley, and Phil Jackson.`,
        `The team's current head coach is Frank Vogel, as of 2024.`,
        `The Lakers have had notable players like James Worthy, Wilt Chamberlain, and Elgin Baylor throughout their history.`,
        `The Lakers have won a total of 31 conference titles.`,
        `The Lakers have retired numbers for 10 different players and one announcer (Chick Hearn).`,
        'Austin Reaves is a talented artist and often shares his artwork on social media.',
        `LeBron James owns a production company called SpringHill Entertainment, which has produced several films and TV shows, including "Space Jam: A New Legacy" and the HBO series "The Shop."`,
        `Anthony Davis is a huge fan of video games and has been known to stream his gaming sessions on Twitch.`
      ];
  
      var randomFact = facts[Math.floor(Math.random() * facts.length)];
      appendFact(randomFact);
    }
  
    function appendFact(fact) {
      var factContainer = document.createElement("div");
      var icon = document.createElement("img");
      var factText = document.createElement("p");
  
      icon.src = "";
      icon.alt = "";
  
      factText.textContent = fact;
  
      factContainer.classList.add("fact-container");
      icon.classList.add("icon");
      factText.classList.add('fact-text');
  
      factContainer.appendChild(icon);
      factContainer.appendChild(factText);
  
      factParagraph.appendChild(factContainer);
    }
  
    var button = document.querySelector(".neonButton");
    button.addEventListener("click", function(event){
      event.preventDefault();
      generateRandomFact()
    });
  });
  