fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('recipes');
        for (const recipe of data.recipes) {
            const div = document.createElement('div');
            div.classList.add('recipe');

            const title = document.createElement('h2');
            title.innerText = `#${recipe.id} ${recipe.name}`;

            const img = document.createElement('img');
            img.src = recipe.image;

            const cuisine = document.createElement('p');
            cuisine.innerHTML = `<span class="label">Cuisine:</span> ${recipe.cuisine}`;

            const difficulty = document.createElement('p');
            difficulty.innerHTML = `<span class="label">Difficulty:</span> ${recipe.difficulty}`;

            const servings = document.createElement('p');
            servings.innerHTML = `<span class="label">Servings:</span> ${recipe.servings}`;

            const calories = document.createElement('p');
            calories.innerHTML = `<span class="label">Calories per serving:</span> ${recipe.caloriesPerServing}`;

            const prepTime = document.createElement('p');
            prepTime.innerHTML = `<span class="label">Prep time:</span> ${recipe.prepTimeMinutes} min`;

            const cookTime = document.createElement('p');
            cookTime.innerHTML = `<span class="label">Cook time:</span> ${recipe.cookTimeMinutes} min`;

            const ingredientsTitle = document.createElement('h3');
            ingredientsTitle.innerText = 'Ingredients:';

            const ingredientsList = document.createElement('ul');
            ingredientsList.classList.add('ingredients');
            for (const item of recipe.ingredients) {
                const li = document.createElement('li');
                li.innerText = item;
                ingredientsList.appendChild(li);
            }

            const instructionsTitle = document.createElement('h3');
            instructionsTitle.innerText = 'Instructions:';

            const instructionsList = document.createElement('ol');
            instructionsList.classList.add('instructions');
            for (const step of recipe.instructions) {
                const li = document.createElement('li');
                li.innerText = step;
                instructionsList.appendChild(li);
            }

            const rating = document.createElement('p');
            rating.innerHTML = `<span class="label">Rating:</span> ${recipe.rating} (${recipe.reviewCount} reviews)`;

            const tagsDiv = document.createElement('div');
            tagsDiv.classList.add('tags');
            for (const tag of recipe.tags) {
                const span = document.createElement('span');
                span.classList.add('tag');
                span.innerText = tag;
                tagsDiv.appendChild(span);
            }

            div.append(title, img, cuisine, difficulty, servings, calories, prepTime, cookTime, ingredientsTitle, ingredientsList, instructionsTitle, instructionsList, rating, tagsDiv);

            container.appendChild(div);
        }
    });