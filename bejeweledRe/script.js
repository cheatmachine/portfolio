class Bejeweled {
    constructor() {
        this.SIZEX = 6;
        this.SIZEY = 7;
        this.jewels = ['🍌', '🍉', '🍇', '🍓', '🍎', '🍒'];
        this.board = [];
        this.locked = false;
        this.point = 0;
        this.container = document.querySelector(".game");
        this.scoreboard = document.querySelector(".points");


        for (let i = 0; i < this.SIZEY; i++) {

            this.board[i] = []

            for (let j = 0; j < this.SIZEX; j++) {
                this.board[i][j] = this.jewels[Math.floor(Math.random() * this.jewels.length)];
            }
        }
    }

    render() {
        this.container.innerHTML = '';
        this.scoreboard.innerHTML = '';
        if(this.locked) {
            this.container.style.background = "#eee";
        } else {
            this.container.style.background = "white";
        }
        this.board.forEach((row, r) => {
            row.forEach((col, c) => {
                this.createBtn(col, r, c);
            })
        })
        this.displayScoreboard();
        if(!this.locked)
        this.updateScore(this.point);
        
    }

    displayScoreboard() {
        let display = document.createElement("div");
        display.innerHTML = "Points:";
        this.scoreboard.appendChild(display);
    }

    updateScore(scoreIn) {
        let score = document.createElement("div");
        score.innerHTML = scoreIn;
        this.scoreboard.appendChild(score);
    }

    createBtn(content, r, c) {
        let btn = document.createElement("button");
        btn.innerText = content;
        btn.addEventListener('click', () => {
            this.clickBtn(r, c);
        });
        this.container.appendChild(btn);
    }
    clickBtn(r, c) {
        if(this.locked) return;
        this.locked = true;
        this.remove(this.board[r][c], r, c);
        this.render();
        setTimeout(this.fall.bind(this), 1000);
        
    }
    fall() {
        //makes the fruits fall
        for(let i = this.SIZEY-1; i >= 1; i--) {
            for(let j = 0; j < this.SIZEX; j++) {
                if(this.board[i][j] === '') {
                    this.board[i][j] = this.board[i-1][j];
                    this.board[i-1][j] = '';
                } 
            }
        }
        //fills any empty cells in first row
        for(let c = 0 ; c < this.SIZEX; c++) {
            if(this.board[0][c] === '') {
                this.board[0][c] = this.jewels[Math.floor(Math.random() * this.jewels.length)];
                this.point++;
            }
        }

        if(this.doesZeroExist()) {
            setTimeout(this.fall.bind(this), 1000);
        } else {
            this.locked = false;
        }
        this.render();
    }
    doesZeroExist() {
        for(let i = this.SIZEY-1; i >= 1; i--) {
            for(let j = 0; j < this.SIZEX; j++) {
                if(this.board[i][j] === '') {
                    return true;
                }
            }
        }
        return false;
    }

    remove(type, r, c) {
        if(r < 0 || r >= this.SIZEY) return;
        if(c < 0 || c >= this.SIZEX) return;

        if(this.board[r][c] !== type) return;
        
        this.board[r][c] = '';

        this.remove(type, r-1, c);
        this.remove(type, r+1, c);
        this.remove(type, r, c-1);
        this.remove(type, r, c+1);

//diagonals

        // this.remove(type, r-1, c-1);
        // this.remove(type, r+1, c-1);
        // this.remove(type, r-1, c+1);
        // this.remove(type, r+1, c+1);

    }
    pointAdd() {

    }
}

new Bejeweled().render();