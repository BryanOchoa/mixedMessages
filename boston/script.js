

document.addEventListener("DOMContentLoaded", function() {

    var factParagraph = document.getElementById("fact");

    var storedFacts = JSON.parse(localStorage.getItem("facts" )) || [];

    storedFacts.forEach(function(fact){
        appendFact(fact);
    });

    function generateRandomFact(){
        var facts = [
            "The Boston Celtics were founded on June 6, 1946.",
            "The team's original name was the 'Boston Basketball Association.'",
            "The Celtics have won the most NBA championships in history, with 17 titles.",
            "They have the most retired jersey numbers in NBA history, with 23.",
            "The Celtics' colors are green, black, and white.",
            "The team's mascot is named 'Lucky the Leprechaun.'",
            "The Celtics' first-ever draft pick was Chuck Connors, who later became a famous actor.",
            "Bill Russell, who played for the Celtics from 1956 to 1969, won 11 NBA championships, the most by any player.",
            "Larry Bird, a Celtics legend, won three NBA championships and was a 12-time All-Star.",
            'Bob Cousy, known as "The Houdini of the Hardwood," played for the Celtics from 1950 to 1963.',
            'The Celtics have retired numbers for many of their legendary players, including Bill Russell (#6), Larry Bird (#33), and Paul Pierce (#34).',
            "The team's famous parquet floor at TD Garden was originally installed at the Boston Garden in 1946.",
            "The Celtics and the Los Angeles Lakers have one of the most storied rivalries in NBA history.",
            "The Celtics have won a total of 24 conference titles.",
            "Kevin Garnett, Paul Pierce, and Ray Allen led the Celtics to their 17th NBA championship in 2008.",
            "Red Auerbach was the head coach and general manager of the Celtics during their most successful years.",
            "The Celtics have had several iconic coaches, including Red Auerbach, Bill Fitch, and Doc Rivers.",
            "The Celtics have had notable players like Robert Parish, Kevin McHale, and John Havlicek throughout their history.",
            "The Celtics have the second-most NBA Finals appearances, with 21.",
            `The team's official fight song is "Celtic Pride."`,
            `TD Garden, the Celtics' home arena, opened in 1995.`,
            `The Celtics' mascot, "Lucky the Leprechaun," made his debut in 1968.`, 
            `The Celtics have had 17 different head coaches throughout their history.`,
            `The team has retired numbers for 22 different players and one head coach (Red Auerbach).`,
            `The Celtics have had the number one overall draft pick five times in franchise history.`,
            `The Celtics' all-time leading scorer is John Havlicek, with 26,395 points.`,
            `The team's longest playoff streak is 19 consecutive seasons, from 1951 to 1969.`,
            `The Celtics' official team colors are green, white, and gold.`,
            `The Celtics have retired numbers for notable players like Kevin Garnett (#5) and Ray Allen (#20).`,
            `The team's official mascot, "Lucky the Leprechaun," was introduced in 1968.`,
            `The Celtics' all-time winningest coach is Red Auerbach, with 795 regular-season wins.`,
            `The team's first championship came in 1957, led by Bill Russell.`,
            `The Celtics have the most NBA Finals appearances of any franchise.`,
            `The team's longest losing streak is 18 games, which occurred during the 2006-2007 season.`,
            `The Celtics have had several famous celebrity fans, including Mark Wahlberg and Matt Damon.`
            `Jayson Tatum, drafted by the Celtics in 2017, quickly became one of the team's key players and is known for his scoring ability.`,
            `Jaylen Brown, drafted by the Celtics in 2016, is known for his athleticism and has emerged as a leader on and off the court.`,
            `Marcus Smart, known for his defensive prowess, has been with the Celtics since being drafted in 2014.`,
            `Al Horford, a veteran center, rejoined the Celtics in 2021 after previously playing for the team from 2016 to 2019.`,
            `Robert Williams III, also known as "Time Lord," is a promising young center known for his shot-blocking ability.`,
            `Grant Williams, drafted by the Celtics in 2019, is a versatile forward known for his defensive versatility and high basketball IQ.`,
            `Jayson Tatum has a pet dog named "Bean," who often steals the spotlight on his social media.`,
            `Jaylen Brown is an avid chess player and has been known to challenge teammates to matches on road trips.`,
            `Marcus Smart is a skilled pianist and often entertains his teammates with impromptu performances.`,
            `Al Horford is fluent in three languages: English, Spanish, and his native tongue, Dominican Spanish.`,
            `Robert Williams III earned the nickname "Time Lord" due to his uncanny ability to block shots and alter opponents' attempts at the rim.`,
            `Grant Williams is a huge fan of comic books and often engages in debates with teammates about superhero lore.`
         ];

         var randomFact = facts[Math.floor(Math.random() * facts.length)];
         storedFacts.push(randomFact);
         localStorage.setItem("facts", JSON.stringify(storedFacts));
         appendFact(randomFact);
    };

    function appendFact(fact){
        var factContainer = document.createElement("div");
        var icon = document.createElement('img');
        var factText = document.createElement('p');

        icon.src = ''
    }
})