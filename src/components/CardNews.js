class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){
        // ==========================================
        // div card 
        // ==========================================
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
            // ==========================================
            // div card__left
            // ==========================================
            const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class", "card__left");
                // span autor
                const autor = document.createElement("span");
                autor.textContent = "by " + (this.getAttribute("autor") || "Anonymous");
                // a title
                const linkTitle = document.createElement("a");
                linkTitle.textContent = this.getAttribute("title");
                linkTitle.href = this.getAttribute('link-url');
                // p text 
                const newsContent = document.createElement("p");
                newsContent.textContent = this.getAttribute("content");
            // encapsula os elementos dentro da div card__left
            cardLeft.appendChild(autor);
            cardLeft.appendChild(linkTitle);
            cardLeft.appendChild(newsContent);
            // ==========================================
            // div card right
            // ==========================================
            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card__right");
                // img foto da notícia
                const newsImage = document.createElement("img");
                newsImage.src = this.getAttribute("photo") || "assets/img/foto-default.jpg";
                newsImage.alt = "Foto da notícia";
            // encapsula os elementos dentro da div card__right
            cardRight.appendChild(newsImage);
        // ==========================================
        // encapsula as divs card__left e card_right dentro da div card
        // ==========================================
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        // retorna o build dos elementos no Shadow DOM
        return componentRoot;
    }

    styles(){
        // ==========================================
        const style =  document.createElement("style");
        style.textContent = `
            .card {
                width: 80%;
                margin: 20px auto;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-shadow: 9px 9px 25px 0px rgba(0,0,0,.2);
            }
            
            .card__right > img{
                max-height: 200px;
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .card__left > span {
                font-weight: 300;
            }
            
            .card__left > a {
                margin-top: 15px;
                font-size: 25px;
                font-weight: bold;
                color: brown;
                text-decoration: none;
            }
            
            .card__left > p {
                color: gray;
            }
        `

        return style
    }
}

customElements.define('card-news', CardNews)