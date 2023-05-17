const soldat = {
    isname: 'Lobzik',
    hp: 10,
    guns: {
        gunsName: 'tt',
        patron: 30
    },
    supplies: 3,
    shot: function () {
        if (this.guns.patron === 0) {
            return 'обойма пуста. Перезаредитесь'
        } else {
            this.guns.patron--
        }
        {
            console.log('бах-бах')
        }
    },
    recharge: function () {
        if (this.supplies === 0) {
            return 'не осталось припасов'
        } else {
            this.guns.patron = 30,
                this.supplies--
        }
    },
    wound: function () {
        if (this.hp === 0) {
            return 'game over'
        } else {
            this.hp--
        }
    },
};
