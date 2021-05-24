// console.log("This is working fine");
const weightinput = document.getElementById("weightInput");
const weightoutput = document.getElementById("weightOutput");
const parityoutput = document.getElementById("parityOutput");
const binaryoutput = document.getElementById("binaryOutput");
const hexaoutput = document.getElementById("hexaOutput");
const pnum = document.getElementById("pnumInput");
const kvalue = document.getElementById("kInput");
const prevpermtn = document.getElementById("pperm");
const nextpermtn = document.getElementById("nperm");
const poutput = document.getElementById("pOutput");
const arrayinput = document.getElementById("arrayInput");
const profitoutput = document.getElementById("profitOutput");
const firstprofit = document.getElementById("firstProfit");
const secondprofit = document.getElementById("SecondProfit");
let p = [];
const bitinput = document.getElementById("bitInput");
const chooseshift = document.getElementById("chooseShift");
const shift = document.getElementById("shift");
const bitsshift = document.getElementById("bitsShift");
const shiftdecimaloutput = document.getElementById("dOutput");
const shiftbinaryoutput = document.getElementById("bOutput");

weightinput.addEventListener("input", () => {
    let value = weightinput.value;
    let count = 0;
    binaryoutput.value = parseInt(value.toString(), 10).toString([2]);
    hexaoutput.value = parseInt(value.toString(), 10).toString([16]);
    while (value != 0) {
        if (value & 1 == 1) {
            count++;
        }

        value = value >>> 1;
    }
    if (count % 2 == 0) {
        parityoutput.value = 0;
    } else {
        parityoutput.value = 1;
    }
    weightoutput.value = count;
});

prevpermtn.addEventListener("click", () => {

    let nums = String(pnum.value).split("").map(num => {
        return parseInt(num);
    });

    let totalLoopRuns = kvalue.value;
    if (totalLoopRuns == "") {
        totalLoopRuns = 1;
    }

    for (let i = 0; i < totalLoopRuns; i++) {
        prevPermutation(nums);
    }
    poutput.value = nums.toString().replaceAll(",", "");
});

function prevPermutation(nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] > nums[i]) {
            list = nums.slice(i, nums.length);
            let max = -1;
            let j = 0;
            while (j < list.length) {
                if (list[j] < nums[i - 1]) {
                    max = Math.max(max, list[j]);
                }
                j++;
            }

            [nums[i - 1], nums[i + list.indexOf(max)]] = [nums[i + list.indexOf(max)], nums[i - 1]];
            console.log(nums.toString());

            list = nums.splice(i, nums.length);
            list.sort().reverse();

            j = 0; let m = i;
            while (j < list.length) {
                nums[m] = list[j];
                j++; m++;
            }
            console.log(nums.toString());
            break;
        }
    }
    return nums;
}

nextpermtn.addEventListener("click", () => {

    let nums = String(pnum.value).split("").map(num => {
        return parseInt(num);
    });

    let totalLoopRuns = kvalue.value;
    if (totalLoopRuns == "") {
        totalLoopRuns = 1;
    }

    for (let i = 0; i < totalLoopRuns; i++) {
        nextPermutation(nums);
    }
    poutput.value = nums.toString().replaceAll(",", "");
});

function nextPermutation(nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            list = nums.slice(i, nums.length);
            let min = 10;
            let j = 0;
            while (j < list.length) {
                if (list[j] > nums[i - 1]) {
                    min = Math.min(min, list[j]);
                }
                j++;
            }

            [nums[i - 1], nums[i + list.indexOf(min)]] = [nums[i + list.indexOf(min)], nums[i - 1]];

            list = nums.splice(i, nums.length);
            list.sort();
            j = 0; let m = i;

            while (j < list.length) {
                nums[m] = list[j];
                j++; m++;
            }
            break;
        }
    }
    return nums;
};

profitoutput.addEventListener("click", () => {

    let array = String(arrayinput.value).replaceAll(" ", "").split(",").map(num => {
        return Number(num);
    });

    firstprofit.value = buyandsellstockonce(array);
    secondprofit.value = buyandsellstocktwice(array);
});

function buyandsellstockonce(array) {

    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;

    for (let i = 0; i < array.length; i++) {
        maxProfit = Math.max(maxProfit, array[i] - minPrice);
        minPrice = Math.min(minPrice, array[i]);
        p[i] = maxProfit;
    }

    return maxProfit;
}

function buyandsellstocktwice(array) {

    let maxPrice = 0;
    let totalProfit = 0;

    for (let i = array.length - 1; i > 0; i--) {
        maxPrice = Math.max(maxPrice, array[i]);
        totalProfit = Math.max(totalProfit, maxPrice - array[i] + p[i - 1]);
    }

    return totalProfit;
}

shift.addEventListener("click", () => {
    let svalue = Number(bitinput.value);
    let toshift = Number(bitsshift.value);

    if (chooseshift.value == 1) {
        let lval = svalue << toshift;
        shiftdecimaloutput.value = lval;
        if (lval < 0) {
            shiftbinaryoutput.value = (lval >>> 0).toString([2]);
        } else {
            shiftbinaryoutput.value = lval.toString([2]);
        }

    } else {
        let rval = svalue >> toshift;
        shiftdecimaloutput.value = rval;
        if (rval < 0) {
            shiftbinaryoutput.value = (rval >>> 0).toString([2]);
        } else {
            shiftbinaryoutput.value = rval.toString([2]);
        }
    }
});

const revinput = document.getElementById("revInput");
const revbinary = document.getElementById("revBinary");
const revoutputd = document.getElementById("revOutputd");
const revoutputb = document.getElementById("revOutputb");
const rows = document.getElementById("rowsOutput");
const pascaltriangle = document.getElementById("ptriangle");
const datainput = document.getElementById("dataInput");
const randominput = document.getElementById("randomInput");
const randomoutput = document.getElementById("randomOutput");
const sample = document.getElementById("sample");
const choosebits = document.getElementById("chooseBits");
const closestweightinputd = document.getElementById("closestWeightInputd");
const closestweightinputb = document.getElementById("closestWeightInputb");
const cwoutputd = document.getElementById("cwOutputd");
const cwoutputb = document.getElementById("cwOutputb");

revinput.addEventListener("input", () => {
    let num = Number(revinput.value);
    if (num < 0) {
        revbinary.value = (num >>> 0).toString(2);
    } else {
        revbinary.value = num.toString(2);
    }
    let flag = false;
    let setmask = 1;
    let rev = 0;
    let j = 0;

    for (let i = 31; i >= 0; i--) {
        let bitmask = 1 << i;
        if (flag) {
            if ((num & bitmask) != 0) {
                setmask = 1 << j;
                rev = rev | setmask;
                j++;
            } else {
                j++;
            }
        } else {
            if ((num & bitmask) != 0) {
                flag = true;
                setmask = 1 << j;
                rev = rev | setmask;
                j++;
            }
        }
    }

    revoutputd.value = rev;
    if (rev < 0) {
        revoutputb.value = (rev >>> 0).toString(2);
    } else {
        revoutputb.value = rev.toString(2);
    }

});


rows.addEventListener("input", () => {
    let n = rows.value;
    let list = [];

    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            row.push((i == j || j == 0) ? 1 : list[i - 1][j - 1] + list[i - 1][j]);
        }
        list.push(row);
    }

    let output = "";
    list.forEach(element => {
        output = output + element + "\n";
    });

    pascaltriangle.value = output;
});

sample.addEventListener("click", () => {

    let data = String(datainput.value).replaceAll(" ", "").split(",").map(num => {
        return num;
    });

    let random = String(randominput.value).replaceAll(" ", "").split(",").map(num => {
        return Number(num);
    });

    for (let i = 0; i < random.length; i++) {
        [data[i], data[random[i]]] = [data[random[i]], data[i]];
    }

    randomoutput.value = data;
});

closestweightinputd.addEventListener("input", () => {

    let value = parseInt(closestweightinputd.value);
    let output = findinteger(value);
    cwoutputd.value = output;
    cwoutputb.value = output.toString(2);
});

closestweightinputb.addEventListener("input", () => {

    let value = parseInt(String(closestweightinputb.value), 2);
    let output = findinteger(value);
    cwoutputd.value = output;
    cwoutputb.value = output.toString(2);
});

function findinteger(value) {

    for (let i = 0; i < 32; i++) {
        if (((value >> i) & 1) != ((value >> (i + 1)) & 1)) {
            value = value ^ ((1 << i) | (1 << (i + 1)));
            break;
        }
    }

    return value;
}

const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");
const octal = document.getElementById("octal");
const hexadecimal = document.getElementById("hexadecimal");
const reset = document.getElementById("reset");

binary.addEventListener("input", () => {

    let value = parseInt(String(binary.value), 2);

    decimal.value = value;
    octal.value = value.toString(8);
    hexadecimal.value = value.toString(16).toUpperCase();
});

decimal.addEventListener("input", () => {

    let value = parseInt(String(decimal.value));

    binary.value = value.toString(2);
    octal.value = value.toString(8);
    hexadecimal.value = value.toString(16).toUpperCase();
});

octal.addEventListener("input", () => {

    let value = parseInt(String(octal.value), 8);

    binary.value = value.toString(2);
    decimal.value = value;
    hexadecimal.value = value.toString(16).toUpperCase();
});

hexadecimal.addEventListener("input", () => {

    let value = parseInt(String(hexadecimal.value), 16);

    binary.value = value.toString(2);
    decimal.value = value.toString(10);
    octal.value = value.toString(8);
});

reset.addEventListener("click", () => {
    binary.value = "";
    octal.value = "";
    decimal.value = "";
    hexadecimal.value = "";
});

const dividend = document.getElementById("dividend");
const divisor = document.getElementById("divisor");
const quotient = document.getElementById("quotient");
const remainder = document.getElementById("remainder");
const valuesk = document.getElementById("valuesk");
const findDivide = document.getElementById("findDivide");

findDivide.addEventListener("click", () => {
    let x = Number(String(dividend.value));
    let y = Number(String(divisor.value));
    let q = 0;
    let kvalue = "";

    if (y != 0) {

        while (x >= y) {
            let k = 0;
            while (Math.pow(2, k) * y <= x) {
                k++;
            }

            k--;
            kvalue = kvalue + k + ",";
            x = x - Math.pow(2, k) * y;
            q = q + Math.pow(2, k);
        }

        quotient.value = q;
        remainder.value = x;
        valuesk.value = kvalue.slice(0, kvalue.length - 1);

    } else {
        alert("Invalid Input");
        dividend.value = "";
        divisor.value = "";
    }

});

const swapdeci = document.getElementById("swapdi");
const swapbini = document.getElementById("swapbi");
const p1 = document.getElementById("ith");
const p2 = document.getElementById("jth");
const swapdeco = document.getElementById("swapdo");
const swapbino = document.getElementById("swapbo");
const swapout = document.getElementById("swapout");
const swapreset = document.getElementById("resetswap");

swapdeci.addEventListener("input", () => {

    let val = Number(swapdeci.value);
    swapbini.disabled = true;
    swapbini.value = val.toString(2);
});

swapbini.addEventListener("input", () => {

    let val = parseInt(String(swapbini.value), 2);
    swapdeci.disabled = true;
    swapdeci.value = val;
});

swapout.addEventListener("click", () => {

    let i = p1.value;
    let j = p2.value;
    if (swapbini.disabled == true) {
        let outputdec = afterSwapping(Number(swapdeci.value), i, j);
        swapdeco.value = outputdec;
        swapbino.value = outputdec.toString(2);
    } else if (swapdeci.disabled == true) {
        let output1 = afterSwapping(parseInt(String(swapbini.value), 2), i, j);
        swapdeco.value = output1;
        swapbino.value = output1.toString(2);
    }
});

swapreset.addEventListener("click", () => {

    swapbini.value = "";
    swapdeci.value = "";
    swapdeco.value = "";
    swapbino.value = "";
    p1.value = "";
    p2.value = "";

    swapdeci.disabled = false;
    swapbini.disabled = false;
});

function afterSwapping(n, i, j) {

    let b1 = (n >> i) & 1;
    let b2 = (n >> j) & 1;

    if (b1 != b2) {
        let x = b1 ^ b2;
        x = (x << i) | (x << j);
        n = n ^ x;
        return n;
    } else {
        return n;
    }
}

//Reset Section
document.getElementById("resetweight").addEventListener("click",()=>{
    Array.from(document.getElementById("weightandparitycard").getElementsByTagName("input")).forEach(element =>{
        element.value = "";
    });
});

document.getElementById("resetpermutation").addEventListener("click",()=>{
    Array.from(document.getElementById("permutationcard").getElementsByTagName("input")).forEach(element =>{
        element.value = "";
    });
});

document.getElementById("resetprofit").addEventListener("click",()=>{
    Array.from(document.getElementById("buyandsellstockcard").getElementsByTagName("input")).forEach(element =>{
        element.value = "";
    });
});

document.getElementById("resetshift").addEventListener("click",()=>{
    Array.from(document.getElementById("bitshiftingcard").getElementsByTagName("input")).forEach(element =>{
        element.value = "";
    });

    chooseshift.selectedIndex = "0";
});

document.getElementById("resetreverse").addEventListener("click",()=>{
    Array.from(document.getElementById("bitreversalcard").getElementsByTagName("input")).forEach(element =>{
        element.value = "";
    });
});

document.getElementById("resetoffline").addEventListener("click",()=>{
    Array.from(document.getElementById("sampleofflinedatacard").getElementsByTagName("input")).forEach(element =>{
        element.value = "";
    });
});

document.getElementById("resetclosestweight").addEventListener("click",()=>{
    Array.from(document.getElementById("closestintegercard").getElementsByTagName("input")).forEach(element =>{
        element.value = "";
    });
});

document.getElementById("resetdivision").addEventListener("click",()=>{
    Array.from(document.getElementById("division").getElementsByTagName("input")).forEach(element =>{
        element.value = "";
    });
});


document.getElementById("helpprofit").addEventListener("click",()=>{
    document.getElementById("helpinfoprofit").style.visibility = 'visible'; 
});
