document.addEventListener("DOMContentLoaded", function () {
    var factParagraph = document.getElementById("fact");
  
    localStorage.removeItem("facts");
  
    function generateRandomFact() {
      var facts = [
        `The Golden State Warriors were founded in 1946 as the Philadelphia Warriors before moving to California in 1962 and adopting their current name.`,
        `The Warriors have won a total of 6 NBA championships, with their most recent titles coming in 2015, 2017, and 2018.`,
        `The team's colors are royal blue and gold.`,
        `The Warriors' mascot is named "Thunder."`,
        `The Warriors have had several legendary players throughout their history, including Wilt Chamberlain, Rick Barry, Chris Mullin, and Stephen Curry.`,
        `Wilt Chamberlain famously scored 100 points in a single game while playing for the Warriors in 1962.`,
        `Rick Barry, known for his underhanded free throw shooting style, led the Warriors to their first NBA championship in 1975.`,
        `Chris Mullin, a five-time NBA All-Star, spent the majority of his career with the Warriors and is considered one of the greatest players in franchise history.`,
        `Stephen Curry, a two-time NBA MVP, revolutionized the game with his prolific three-point shooting and led the Warriors to three NBA championships.`,
        `The Warriors have retired numbers for several of their legendary players, including Wilt Chamberlain (#13), Rick Barry (#24), and Chris Mullin (#17).`,
        `The Warriors have the third-most NBA Finals appearances in NBA history, with 11.`,
        `The team's official fight song is "The Golden State Warriors."`,
        `The Warriors have had several iconic coaches, including Steve Kerr, Don Nelson, and Al Attles.`,
        `The team's current head coach is Steve Kerr, as of 2024.`,
        `The Warriors have had notable players like Kevin Durant, Klay Thompson, and Draymond Green throughout their history.`,
        `The Warriors have won a total of 9 conference titles.`,
        `The Warriors' longest winning streak in franchise history is 28 games, achieved during the 2015-2016 season.`,
        `The Warriors' mascot, "Thunder," made his debut in 1997.`,
        `The Warriors have retired numbers for 6 different players.`,
        `The Warriors have a devoted fan base known as the "Dub Nation."`,
        `Stephen Curry is notorious for his love of corny dad jokes and often shares them with his teammates.`,
        `Draymond Green is known for his animated reactions on the court and has been caught on camera making funny faces during games.`,
        `Klay Thompson has a beloved English bulldog named "Rocco," who often makes appearances on Thompson's social media.`,
        `Andrew Wiggins is a big fan of karaoke and has been known to belt out tunes during team gatherings.`
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
  