const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],

    printAll: function () {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.print(i))
        }
    },

    add: function (text) {
        this.items.unshift({ completed: false, text: text })
    },

    remove: function (index) {
        this.items.slice(index, 1)
    },

    print: function (index) {
        if (this.items[index].completed === true) {
            console.log(`[x] ${this.items[index].text}`)
        } else {
            console.log(`[ ] ${this.items[index].text}`)
        }
    },

    complete: function (index) {
        if (this.items[index].completed === true) {
            this.items[index].completed = false
        } else {
            this.items[index].completed = true
        }
    },
};


