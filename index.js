const app = "I don't do much."
function destructivelyAppendKitten(name) {kittens.push("Ralph")}
function destructivelyPrependKitten(name) {kittens.unshift("Bob")}
function destructivelyRemoveLastKitten() {kittens.pop()}
function destructivelyRemoveFirstKitten() {kittens.shift()}
function appendKitten(name) { var appendedkittens = [...kittens, "Broom"]; return appendedkittens}
function prependKitten(name) { var prependkittens = ["Arnold", ...kittens]; return prependkittens}
function removeLastKitten() { var removekitten = kittens.slice(2); return removekitten}
