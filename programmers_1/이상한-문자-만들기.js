function solution(s) {
    return s.split(" ")
            .map(el => el.split("").map((k, v) => v % 2 === 0 ? k.toUpperCase() : k.toLowerCase()).join("")).join(" ");
}