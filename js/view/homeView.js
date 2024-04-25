export let home = {
    show: () => {
        console.log("Estás na homeView");

        // Usando jQuery para selecionar o elemento e esvaziá-lo
        var content = $("#contentBody");
        content.empty();

        // Usando jQuery para definir o conteúdo HTML
        content.html(`
        <main id="homepage">
        <div id="story-intro" style="margin-top: 150px; background-image: url(./assets/images/wood.jpg); object-fit: cover; z-index: 4;border: solid black 3px; border-radius: 15px; text-align: center; padding-left: 10px; padding-right: 10px;">
        Lina, a talented pirate-programmer, has long disagreed with her father's ideals, a renowned tech pirate who created the controlling AI. Determined to end the tyranny of the machine, she sets sail in search of allies.
        </div>
        <div id="main-content">
            <a id="adventuretext" style="margin-top: 80px; margin-bottom: 200px; animation: customAni 2s ease 0s infinite normal none">Your adventure starts here</a>
            <div>
            </div>
        </div>
    </main>
        `);
        
        $('#adventuretext').on('click', () => {
            window.location.hash = "firststep";
            
            console.log("ok");  
        })
    }
}
