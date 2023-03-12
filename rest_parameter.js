function student_list(count) {
    var list = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        list[_i - 1] = arguments[_i];
    }
    console.log("LIST: 01");
    console.log("Count of student:" + count);
    console.log("Name of the student:\n", list);
}
var list1_count = 5;
student_list(list1_count, "MAHPRA", "AMMARAH", "SITARA", "AFSHAN", "AFSHAN");
