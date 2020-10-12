class ContentItems extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/ `    
        <header class="container-fluid d-flex mt-2">
            <h3 class="back-btn">&lt;</h3>
            <img src="img/logo.png" alt="" class="logo">
            <h3 class="game-title text-uppercase">rock paper scissors</h3>
        </header>
        <main class="container mar-cus">
            <article class="row mar-cus">
                <div class="col">
                    <h2 class="text-uppercase text-center">player</h2>
                </div>
                <div class="col"></div>
                <div class="col">
                    <h2 class="text-uppercase text-center">com</h2>
                </div>
            </article>
            <article class="row mar-cus">
                <div class="col">
                    <p class="text-center"><img class='player rock' src="img/rock.png" alt="rock"></p>
                </div>
                <div class="col"></div>
                <div class="col">
                    <p class="rock text-center"><img class="computer compRock" src="img/rock.png" alt="rock"></p>
                </div>
            </article>
            <article class="row mar-cus">
                <div class="col">
                    <p class="text-center"><img class='player paper ' src="img/paper.png" alt="paper"></p>
                </div>
                <div class="col">
                    <h1 id='gameResult' class="text-center game-result displaySize">vs</h1>
                </div>
                <div class="col">
                    <p class="paper text-center"><img class="computer compPaper" src="img/paper.png" alt="paper"></p>
                </div>
            </article>
            <article class="row mar-cus">
                <div class="col">
                    <p class="text-center"><img class='player scissor ' src="img/scissor.png" alt="scissor"></p>
                </div>
                <div class="col"></div>
                <div class="col">
                    <p class="scissor text-center"><img class="computer compScissor" src="img/scissor.png" alt="scissor">
                    </p>
                </div>
            </article>
            <article class="row mar-cus ">
                <p class="text-center mar-aut"><img class="refresh" src="img/refresh.png" alt="refresh"></p>
            </article>
        </main>`;
    }
}

customElements.define("content-items", ContentItems);