// Define the categories and subcategories with their outcomes
const categories = [
  {
    name: '🥩 Carne',
    subcategories: [
      {
        name: 'Carni bianche',
        subcategories: [
          { name: 'Anatra', result: '✅ È Gianmaria-friendly!' },
          { name: 'Coniglio', result: '✅ È Gianmaria-friendly!' },
          { name: 'Pollo', result: '✅ È Gianmaria-friendly!' },
          { name: 'Tacchino', result: '✅ È Gianmaria-friendly!' },
        ],
      },
      {
        name: 'Carni da selvaggina',
        subcategories: [
          { name: 'Capriolo', result: '✅ È Gianmaria-friendly!' },
          { name: 'Cinghiale', result: '✅ È Gianmaria-friendly!' },
          { name: 'Fagiano', result: '✅ È Gianmaria-friendly!' },
        ],
      },
      {
        name: 'Carnì rosse',
        subcategories: [
          { name: 'Agnello', result: '✅ È Gianmaria-friendly!' },
          { name: 'Buffalo', result: '✅ È Gianmaria-friendly!' },
          { name: 'Cavallo', result: '✅ È Gianmaria-friendly!' },
          { name: 'Cinghiale', result: '✅ È Gianmaria-friendly!' },
          { name: 'Manzo', result: '✅ È Gianmaria-friendly!' },
          { name: 'Struzzo', result: '✅ È Gianmaria-friendly!' },
          { name: 'Toro', result: '✅ È Gianmaria-friendly!' },
          { name: 'Vitello', result: '✅ È Gianmaria-friendly!' },
        ],
      },
      {
        name: 'Salumi',
        subcategories: [
          { name: 'Bacon', result: '✅ È Gianmaria-friendly!' },
          { name: 'Bresaola', result: '❌ Non è Gianmaria-friendly.' },
          { name: 'Capicola', result: '❌ Non è Gianmaria-friendly.' },
          { name: 'Ciccìolo', result: '😐 Non impazzisco.' },
          { name: 'Coppa', result: '✅ È Gianmaria-friendly!' },
          { name: 'Culatello', result: '✅ È Gianmaria-friendly!' },
          { name: 'Guanciale', result: '✅ È Gianmaria-friendly!' },
          { name: 'Lardo', result: '✅ È Gianmaria-friendly!' },
          { name: 'Lonza', result: '😐 Non impazzisco.' },
          { name: 'Mortadella', result: '😐 Non impazzisco.' },
          { name: 'Pancetta', result: '✅ È Gianmaria-friendly!' },
          { name: 'Prosciutto crudo', result: '😐 Non impazzisco.' },
          { name: 'Prosciutto cotto', result: '✅ È Gianmaria-friendly!' },
          { name: 'Salame', result: '✅ È Gianmaria-friendly!' },
          { name: 'Salsiccia', result: '✅ È Gianmaria-friendly!' },
          { name: 'Soppressata', result: '😐 Non impazzisco.' },
          { name: 'Speck', result: '😐 Non impazzisco.' },
          { name: 'Felino', result: '✅ È Gianmaria-friendly!' },
          { name: 'Finocchiona', result: '❌ Non è Gianmaria-friendly.' },
        ],
      },
    ],
  },
 {
  name: '🍰 Dolci',
  subcategories: [
    {
      name: 'Ha il pan di Spagna?',
      subcategories: [
        {
          name: 'Sì',
          result: '❌ Non è Gianmaria-friendly.',
        },
        {
          name: 'No',
          subcategories: [
            { name: 'Amaretti', result: '❌ Non è Gianmaria-friendly.' },
            { name: 'Babà al rhum', result: '❌ Non è Gianmaria-friendly. Odio tutti i dolci con alcol dentro.' },
            { name: 'Cannoli', result: '❌ Non è Gianmaria-friendly.' },
            { name: 'Cassata Siciliana', result: '❌ Non è Gianmaria-friendly.' },
            { name: 'Gelato', result: '✅ È Gianmaria-friendly!' },
            { name: 'Panna cotta', result: '✅ È Gianmaria-friendly!' },
            { name: 'Sbrisolona', result: '✅ È Gianmaria-friendly!' },
            { name: 'Tiramisù', result: '✅ È Gianmaria-friendly!' },
            { name: 'Torta Caprese', result: '❌ Non è Gianmaria-friendly.' },
            { name: 'Torta della Nonna', result: '❌ Non è Gianmaria-friendly.' },
            { name: 'Zuppa Inglese', result: '✅ È Gianmaria-friendly!' },
          ],
        },
      ],
    },
  ],
},
  {
    name: '🍎 Frutta',
    subcategories: [
      { name: 'Albicocca', result: '✅ È Gianmaria-friendly!' },
      { name: 'Anguria', result: '✅ È Gianmaria-friendly!' },
      { name: 'Ananas', result: '❌ Non è Gianmaria-friendly.' },
      { name: 'Avocado', result: '✅ È Gianmaria-friendly!' },
      { name: 'Banana', result: '✅ È Gianmaria-friendly!' },
      { name: 'Bergamotto', result: '❌ Non è Gianmaria-friendly.' },
      { name: 'Cachi', result: '❌ Non è Gianmaria-friendly.' },
      { name: 'Ciliegia', question: 'È insieme ad altri alimenti?', subcategories: [{ name: 'Sì', result: '✅ È Gianmaria-friendly!' }, { name: 'No', result: '❌ Non è Gianmaria-friendly.' }] },
      { name: 'Cocco', result: '✅ È Gianmaria-friendly!' },
      { name: 'Fico', result: '❌ Non è Gianmaria-friendly.' },
      { name: 'Fragola', result: '✅ È Gianmaria-friendly!' },
      { name: 'Lime', result: '✅ È Gianmaria-friendly!' },
      { name: 'Limone', result: '😐 Non impazzisco.' },
      { name: 'Mandarino', result: '✅ È Gianmaria-friendly!' },
      { name: 'Melone', result: '❌ Non è Gianmaria-friendly. Lo odio.' },
      { name: 'Mela', result: '✅ È Gianmaria-friendly!' },
      { name: 'Mango', result: '😐 Non impazzisco.' },
      { name: 'Melograno', result: '✅ È Gianmaria-friendly!' },
      { name: 'Papaya', result: '❌ Non è Gianmaria-friendly.' },
      { name: 'Pesca', result: '✅ È Gianmaria-friendly!' },
      { name: 'Prugna', result: '❌ Non è Gianmaria-friendly.' },
      { name: 'Uva', result: '✅ È Gianmaria-friendly!' },
    ],
  },
  {
    name: '🐟 Pesce',
    subcategories: [
      {
        name: 'Pesce di mare',
        subcategories: [
          { name: 'Acciughe', result: '❌ Non è Gianmaria-friendly.' },
          { name: 'Baccalà', result: '✅ È Gianmaria-friendly! Lo adoro mantecato.' },
          { name: 'Branzino', result: '✅ È Gianmaria-friendly!' },
          { name: 'Merluzzo', result: '✅ È Gianmaria-friendly!' },
          { name: 'Salmone', result: '✅ È Gianmaria-friendly!' },
          { name: 'Sardine', result: '❌ Non è Gianmaria-friendly.' },
          { name: 'Tonno', question: 'È in scatola?', subcategories: [{ name: 'Sì', result: '❌ Non è Gianmaria-friendly.' }, { name: 'No', result: '✅ È Gianmaria-friendly!' }] },
          { name: 'Sgombro', result: '✅ È Gianmaria-friendly!' },
        ],
      },
      {
        name: 'Pesce di fiume',
        subcategories: [
          { name: 'Anguilla', result: '❌ Non è Gianmaria-friendly.' },
          { name: 'Carpa', result: '✅ È Gianmaria-friendly!' },
          { name: 'Luccio', result: '✅ È Gianmaria-friendly!' },
          { name: 'Persico', result: '✅ È Gianmaria-friendly!' },
          { name: 'Trota', result: '✅ È Gianmaria-friendly!' },
        ],
      },
      {
        name: 'Frutti di mare',
        subcategories: [
          { name: 'Aragosta', result: '✅ È Gianmaria-friendly!' },
          { name: 'Cicala', result: '❌ Non è Gianmaria-friendly.' },
          { name: 'Calamari', result: '✅ È Gianmaria-friendly!' },
          { name: 'Cozze', result: '✅ È Gianmaria-friendly!' },
          { name: 'Granchio', result: '✅ È Gianmaria-friendly!' },
          { name: 'Ostriche', result: '✅ È Gianmaria-friendly!' },
          { name: 'Polpo', result: '✅ È Gianmaria-friendly!' },
          { name: 'Scampi', result: '✅ È Gianmaria-friendly!' },
          { name: 'Seppie', result: '✅ È Gianmaria-friendly!' },
          { name: 'Vongole', result: '✅ È Gianmaria-friendly!' },
        ],
      },
    ],
  },
  {
    name: '🥦 Verdura',
    subcategories: [
      {
        name: 'Cotta',
        subcategories: [
          { name: 'Patate', result: '✅ È Gianmaria-friendly!' },
          { name: 'Zucca', question: 'È con altri alimenti?', subcategories: [{ name: 'Sì', result: '✅ È Gianmaria-friendly!' }, { name: 'No', result: '❌ Non è Gianmaria-friendly.' }] },
          { name: 'Altro', result: '❌ Non è Gianmaria-friendly.' },
        ],
      },
      {
        name: 'Cruda',
        subcategories: [
          { name: 'Carote', result: '✅ È Gianmaria-friendly!' },
          { name: 'Spinaci', question: 'Sono in un frullato?', subcategories: [{ name: 'Sì', result: '✅ È Gianmaria-friendly!' }, { name: 'No', result: '❌ Non è Gianmaria-friendly.' }] },
          { name: 'Altro', result: '❌ Non è Gianmaria-friendly.' },
        ],
      },
    ],
  },
  {
    name: '🥤 Bevande',
    subcategories: [
    { name: 'Acqua', result: '✅ È Gianmaria-friendly! Meglio naturale.' },
    { name: 'Alcolici', result: '✅ È Gianmaria-friendly! LOL' },
    { name: 'Birra', result: '✅ È molto Gianmaria-friendly!' },
    { name: 'Caffè', result: '✅ È Gianmaria-friendly!' },
    { name: 'Cocktail', result: '✅ È SUPER Gianmaria-friendly!' },
    { name: 'Frozen drinks', result: '✅ È Gianmaria-friendly!' },
    { name: 'Energy drinks', result: '❌ Non è Gianmaria-friendly.' },
    { name: 'Infusi', result: '✅ È Gianmaria-friendly! Evita però finocchio, non mi piace per nulla.' },
    { name: 'Limonata', result: '✅ È Gianmaria-friendly se non è aspra!' },
    { name: 'Milkshake', result: '✅ È Gianmaria-friendly!' },
    { name: 'Soda', result: '❌ Non è Gianmaria-friendly.' },
    { name: 'Succhi di frutta', result: '✅ È Gianmaria-friendly! La pesca è il mio preferito.' },
    { name: 'Tè freddo', result: '✅ È Gianmaria-friendly! Meglio se senza zucchero.' },
    { name: 'Tè', result: '✅ È Gianmaria-friendly! Rigorosamente senza zucchero.' },
    { name: 'Bevande sportive', result: '❌ Non è Gianmaria-friendly.' },
    { name: 'Kombucha', result: '❌ Non è Gianmaria-friendly.' }
    ],
  },
];


// Utility functions for navigation and rendering
const historyStack = [];

function setBreadcrumbTitle(title) {
  document.getElementById('breadcrumb-title').textContent = title;
}

function updateGoBackVisibility() {
  const ricominciaButton = document.getElementById('ricomincia-button');
  ricominciaButton.style.display = historyStack.length > 1 ? 'inline-block' : 'none';
}

// Function to render the landing page
function showLandingPage() {
  historyStack.splice(0, historyStack.length); // Clear the navigation history
  document.getElementById('breadcrumb-title').textContent = 'Home';
  updateGoBackVisibility();

  // Make the snowflakes visible
  document.querySelector('.snowflakes').style.display = 'block';

  document.getElementById('content').innerHTML = `
    <div class="logo">
      <img src="https://github.com/flixonasee/gfriendly/blob/a24c81f9ccf4d4fa2336e50d78c4f6d6abeae3fd/logo.svg?raw=true" alt="Gianmaria-Friendly Logo">
    </div>
    <div class="cover-img">
      <img src="https://github.com/flixonasee/gfriendly/blob/052e2db5076ce2a1a0c44093f07fc908e1f3d5fb/lol.gif?raw=true" alt="Cover Image">
    </div>
    <button id="start-button" class="category-button">Inizia</button>
  `;

  // Add event listener to the "Inizia" button
  document.getElementById('start-button').addEventListener('click', () => showCategories(categories));
}

// Function to show categories or subcategories
function showCategories(categories, title = 'Categorie') {
  historyStack.push({ screen: title, categories });
  setBreadcrumbTitle(title);
  updateGoBackVisibility();

  // Hide the snowflakes
  document.querySelector('.snowflakes').style.display = 'none';

  let categoriesHTML = '<h2 class="subtitle">Scegli una categoria:</h2>';
  categories.forEach((category, index) => {
    categoriesHTML += `
      <button class="category-button" onclick="handleCategoryClick(${index})">${category.name}</button>
    `;
  });
  document.getElementById('content').innerHTML = categoriesHTML;
}

// Handle category click
function handleCategoryClick(index) {
  const currentCategory = historyStack[historyStack.length - 1].categories[index];
  if (currentCategory.result) {
    showResult(currentCategory.result);
  } else if (currentCategory.question) {
    showQuestion(currentCategory.question, currentCategory.subcategories);
  } else if (currentCategory.subcategories) {
    showCategories(currentCategory.subcategories, currentCategory.name);
  }
}

// Show a question with options
function showQuestion(question, options) {
  historyStack.push({ screen: question, categories: options });
  setBreadcrumbTitle(question);
  updateGoBackVisibility();

  let questionHTML = `<h2 class="subtitle">${question}</h2>`;
  options.forEach((option, index) => {
    questionHTML += `
      <button class="category-button" onclick="handleCategoryClick(${index})">${option.name}</button>
    `;
  });
  document.getElementById('content').innerHTML = questionHTML;
}

// Show result
function showResult(resultMessage) {
  console.log("Result message:", resultMessage); // Debugging: Log the result message
  historyStack.push({ screen: 'Risultato' });
  setBreadcrumbTitle('Risultato');
  updateGoBackVisibility();

  // Check if the result is successful or negative
  const isSuccess = resultMessage.includes('✅');
  const animationHTML = isSuccess
    ? `<dotlottie-player src="https://lottie.host/ffcea859-3e7b-4626-b70a-8083a3e8170f/qIng6jeg9Z.lottie" background="transparent" speed="1" style="width: 300px; height: 300px" autoplay></dotlottie-player>`
    : `<dotlottie-player src="https://lottie.host/20e303c4-3ac6-4e3a-bc72-d25c4c06f576/oq4qT8MmH3.lottie" background="transparent" speed="1" style="width: 300px; height: 300px" autoplay></dotlottie-player>`;

  document.getElementById('content').innerHTML = `
    ${animationHTML}
    <h2 class="result">${resultMessage}</h2>
    <button class="category-button" onclick="showLandingPage()">🔄 Ricomincia</button>
  `;
}

// Go back to the previous screen
function goBack() {
  historyStack.pop();
  const previousScreen = historyStack[historyStack.length - 1];
  if (!previousScreen) {
    showLandingPage(); // If no previous screen, go to the landing page
    return;
  }

  if (previousScreen.categories) {
    showCategories(previousScreen.categories, previousScreen.screen);
  } else if (previousScreen.screen) {
    showQuestion(previousScreen.screen, previousScreen.categories);
  }
}

// Initialize the app
document.getElementById('start-button')?.addEventListener('click', () => showCategories(categories));
showLandingPage(); // Show the landing page on app load


