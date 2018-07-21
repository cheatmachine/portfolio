class Calendar {
    constructor(container) {
        this.container = container;
        this.today = new Date();

        this.render();
    }
    renderHeader() {
        let today = this.today;
        let container = this.container;

        let header = document.createElement("h1");
        container.appendChild(header);

        let prevBtn = document.createElement("button");
        prevBtn.innerText = "<";
        prevBtn.classList.add("changeBtn");
        header.appendChild(prevBtn);
        prevBtn.addEventListener('click', () => {
            today.setMonth(today.getMonth() - 1);
            this.render();
        });

        let title = document.createElement("div");
        title.innerText = today.getFullYear() +
                            " / " +
                            (today.getMonth() + 1);
        header.appendChild(title);

        let nextBtn = document.createElement("button");
        nextBtn.innerText = ">";
        nextBtn.classList.add("changeBtn");
        header.appendChild(nextBtn);
        nextBtn.addEventListener('click', () => {
            today.setMonth(today.getMonth() + 1);
            this.render();
        });
    }
    renderMonthlyView() {
        let today = this.today;
        let container = this.container;

        for(let i=0; i<DateUtils.getDayOfFirst(today); i++) {
            let day = document.createElement("div");
            day.classList.add("day");
            container.appendChild(day);
        }
        
        for (let i = 0; i < DateUtils.getDaysInMonth(today); i++) {
            let day = document.createElement("div");
            day.innerText = i + 1;
            day.classList.add("day");
            container.appendChild(day);
        }

        let numTrailingCells = 
            7 - (DateUtils.getDayOfFirst(today) + 
            DateUtils.getDaysInMonth(today)) % 7;
        for(let i=0; i<numTrailingCells % 7; i++) {
            let day = document.createElement("div");
            day.classList.add("day");
            container.appendChild(day);
        }


    }
    render() {
        let today = this.today;
        let container = this.container;
        container.innerHTML = '';

        this.renderHeader();

        this.renderMonthlyView();
    }
}