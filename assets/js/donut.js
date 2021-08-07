// donut-----------------------------
(function () {
    var $, MyMorris;

    MyMorris = window.MyMorris = {};
    $ = jQuery;

    MyMorris = Object.create(Morris);

    MyMorris.Donut.prototype.select = function (idx) {
        var row, s, segment, _i, _len, _ref, _fill_color; // ADDED _fill_color
        _ref = this.segments;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            s = _ref[_i];
            s.deselect();
        }
        segment = this.segments[idx];
        segment.select();
        row = this.data[idx];
        _fill_color = row.labelColor || this.options.labelColor || '#000000'; // ADDED
        return this.setLabels(row.label, this.options.formatter(row.value, row), _fill_color); // ADDED parameter _fill_color
    };


    MyMorris.Donut.prototype.setLabels = function (label1, label2, fill_color) {
        var inner, maxHeightBottom, maxHeightTop, maxWidth, text1bbox, text1scale, text2bbox, text2scale;
        _default_fill = fill_color || '#000000'; // ADDED
        inner = (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) * 2 / 3;
        maxWidth = 1.8 * inner;
        maxHeightTop = inner / 2;
        maxHeightBottom = inner / 3;
        this.text1.attr({
            text: label1,
            transform: '',
            fill: fill_color // ADDED
        });
        text1bbox = this.text1.getBBox();
        text1scale = Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height);
        this.text1.attr({
            transform: "S" + text1scale + "," + text1scale + "," + (text1bbox.x + text1bbox.width / 2) + "," + (text1bbox.y + text1bbox.height)
        });
        this.text2.attr({
            text: label2,
            transform: '',
            fill: fill_color // ADDED
        });
        text2bbox = this.text2.getBBox();
        text2scale = Math.min(maxWidth / text2bbox.width, maxHeightBottom / text2bbox.height);
        return this.text2.attr({
            transform: "S" + text2scale + "," + text2scale + "," + (text2bbox.x + text2bbox.width / 2) + "," + text2bbox.y
        });
    };
}).call(this);


getMorris('donut', 'donutChart');

function getMorris(type, element) {
    if (type === 'donut') {
        var morris = Morris.Donut({
            element: element,
            data: [
                {
                    label: '60%',
                    value: 6,
                    labelColor: '#000'
                }, {
                label: '40%',
                    value: 4,
                    labelColor: '#000'
                }
            ],
            labelColor: "#000",
            colors: ['#39B54A','#D1D3D4' ]
        });
    }
}