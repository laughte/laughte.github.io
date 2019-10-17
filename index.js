// es6模板字符串函数处理
// let title = "秋风辞";
// let name = "李白";
// function hightlight(strings, ...values) {
//   const hightlighted = values.map(value =>
//     `<span style="padding:2px 5px;background:#00abd5;color:white">${value}</span>`);

//   return strings.reduce((prev, cur, i) => `${prev}${cur}${hightlighted[i] ||''}`, "");


// };
// const sentence = hightlight `标题:${title}作者:${name}秋风清,秋月明,落叶聚还散,寒鸦栖复惊.`;
// console.log(hightlight)

// document.body.innerHTML = sentence


// const addCommentForm = document.querySelector('.add-comment');
// const textarea = document.querySelector('.comment-text');
// const commentDom = document.querySelector('.comment');
// const user = 'Mary';


// function sanitize(strings, ...values) {
//     const dirty = strings.reduce((prev, curr, i) =>
//         `${prev}${curr}${values[i] || ''}`,
//         ''
//     );
//     return DOMPurify.sanitize(dirty);
// }


// addCommentForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const newComment = textarea.value.trim();
//     console.log(newComment)
//     if (newComment) {
//         commentDom.innerHTML = sanitize`<div class="comment-header">${user}</div>
// <div class="comment-body">${textarea.value}</div>`;
//         textarea.value = '';
//     }
// })


window.onload = function () {

    let svgNS = 'http://www.w3.org/2000/svg';
    let oParent = document.getElementById('main');
    let oSvg = document.getElementById('svg1');
    let PolyLine = null;
    let pointsNum = '';

    function createTag(tag, attr) {
        let oTag = document.createElementNS(svgNS, tag);
        for (let a in attr) {
            oTag.setAttribute(a, attr[a]);
        }
        return oTag;
    };

    oSvg.onmousedown = function (ev) {
        var ev = ev || window.event;
        if (!PolyLine) {
            PolyLine = createTag('polyline', {
                'fill': 'none',
                'stroke': 'red',
                'stroke-width': '2'
            });
            oSvg.appendChild(PolyLine);
        };

        let x = ev.clientX - oParent.offsetLeft;
        let y = ev.clientY - oParent.offsetTop;
        if (pointsNum == '') {
            pointsNum = x + ',' + y;
        } else {
            pointsNum += ',' + x + ',' + y;
        }

        PolyLine.setAttribute('points', pointsNum)
        // PolyLine.setAttribute('points', '110, 60, 454, 25, 502, 93')

        let oCircle = createTag('circle', { 'r': 5, 'fill': 'white', 'cx': x, 'cy': y, 'stroke': 'red', 'storke-width': 3 });
        oSvg.appendChild(oCircle)

    };

    oSvg.onmousemove = function (ev) {
        var ev = ev || window.event;
        if (PolyLine) {
            let x = ev.clientX - oParent.offsetLeft;
            let y = ev.clientY - oParent.offsetTop;
            PolyLine.setAttribute('points', pointsNum + ',' + x + ',' + y)
        }
    };
    oSvg.oncontextmenu = function () {

        oSvg.onmousemove = null
        return false


    }

}
