const textElement = document.getElementById('text');
const text = `
*** DOCUMENT CONFIDENTIEL ***

Date: 04-07-2024
De: Conne-sœur Compagnonne
À: Initié(e)

Sous l'éclat ténu de la lune décroissante, alors que les ombres dansent et murmurent leurs secrets, je t'écris cette missive avec une urgence que seuls les cœurs initiés peuvent comprendre. Les murmures des anciens se sont intensifiés, et les <b>Frères Noirs</b> préparent une cérémonie dont l'ampleur menace notre fragile équilibre.

Nous devons nous retrouver, loin des regards curieux, dans le sanctuaire oublié de la <b>Crypte Étoilée</b>, au premier soupir du crépuscule, lorsque l'astre du jour cède sa place aux étoiles bienveillantes. Apporte avec toi les outils sacrés et les symboles de notre ordre, car ils seront nos guides à travers les ténèbres.

Le silence et la discrétion sont de mise, car des forces obscures guettent et nous devons demeurer invisibles. L'avenir de notre fraternité repose sur notre capacité à déjouer les plans sinistres des <b>Frères Noirs</b>. Viens sans hésitation, car le temps presse et chaque seconde qui s'écoule rapproche le monde de l'ombre éternelle.

Que la lumière de notre savoir éclaire ton chemin et te guide vers notre réunion secrète.

Avec espoir et détermination,
Ta conne-sœur compagnonne
`;

let index = 0;

function typeText() {
    if (index < text.length) {
        const currentChar = text.charAt(index);
        if (currentChar === '\n') {
            textElement.innerHTML += '<br>';
        } else {
            textElement.innerHTML += currentChar;
        }
        index++;
        setTimeout(typeText, 50);
    }
}

window.onload = typeText;
