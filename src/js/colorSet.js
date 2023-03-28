class colorSet {
    constructor(color) {
        this.color = color;
    }

    _convert() {
        let convert_color = "";
        if (isNaN(this.color) == false) {
            if (this.color.includes('x') == true) {
                convert_color = this.color.split('x')[1].toString(16)
            } else {
                convert_color = this.color.toString(16)
            }
        } else if (this.color.includes(',')) {
            let sprit_color = this.color.split(',');
            let r = ("0" + sprit_color[0].toString(16)).slice(-2)
            let g = ("0" + sprit_color[2].toString(16)).slice(-2)
            let b = ("0" + sprit_color[4].toString(16)).slice(-2)

            convert_color = r + g + b
        } else if (this.color.includes('#') == true) {
            convert_color = this.color.split('#')[1].toString(16)
        }

        return convert_color
    }

    toHash() {
        const color_hash = "#" + this._convert()

        return color_hash
    }

    toNoHash() {
        const color_no_hash = parseInt(this._convert(), 16)

        return color_no_hash
    }

    toNoHash0x() {
        const color_no_hash_0x = "0x" + this._convert()

        return color_no_hash_0x
    }


    toRgb() {
        const convert_color = this._convert()

        let red = parseInt(convert_color.substring(0, 2), 16);
        let green = parseInt(convert_color.substring(2, 4), 16);
        let blue = parseInt(convert_color.substring(4, 6), 16);

        let color_rgb = red + ',' + green + ',' + blue;

        return color_rgb
    }


}
