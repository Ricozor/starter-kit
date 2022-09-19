const MainMenuScript = () => {

    const cssClass = 'MainMenu';
    const target = `.${cssClass}`;
    const targets = document.querySelectorAll(target);

    for (const elt of targets) {

        // test if element is init
        if (elt.dataset[`init${cssClass}`]) {
            continue; // already init go to next iteration
        }
        // init element
        elt.dataset[`init${cssClass}`] = true;
        const mainMenu = elt;
        const burger = mainMenu.querySelector('.ButtonBurgerMenu');
        const internalLinks = mainMenu.querySelectorAll('a[href*="#"]');

        burger.addEventListener('click',()=>{
            mainMenu.classList.toggle('isOpened');
        });

        const blocks = [];
        internalLinks.forEach((link) => {
            link.addEventListener('click',()=>{
                mainMenu.classList.remove('isOpened');
            });
            blocks.push(document.querySelector(link.getAttribute('href')));

            //TODO: add an animate ScrollToHash on all internalLinks of the page, not only the menu
        })

        let pos = blocks.length;
        blocks.reverse();

        // TODO optimize scroll performance => use requestAnimationFrame()
        function checkElementsPos(){

            // test position for each block (reversed)
            pos = -1;
            for(const block of blocks) {
                if (block && block.getBoundingClientRect().top <= 72) {
                    pos++;
                }
            }
            internalLinks.forEach((link) => {
                link.classList.remove('isActive');
            })
            internalLinks[pos].classList.add('isActive');
        };

        window.addEventListener('scroll', checkElementsPos, false);
        window.addEventListener('resize', checkElementsPos, false);
        checkElementsPos();
    }
}

export {
    MainMenuScript,
}

