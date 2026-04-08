let candidates = [];
let candidateCount = Number(prompt("Enter number of candidates:"));

for (let i = 1; i <= candidateCount; i++) {
    let name = prompt(`Enter name for candidate ${i}:`);
    candidates.push({ name: name, votes: 0 });
}

let voterCount = Number(prompt("Enter number of voters:"));

for (let i = 1; i <= voterCount; i++) {
    let vote = prompt(`Voter ${i}, enter candidate name:`);
    if (vote) {
        let candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
        if (candidate) {
            candidate.votes++;
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes);

if (candidates.length > 0) {
    console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
}

console.log("Results:");
candidates.forEach(c => {
    console.log(`${c.name}: ${c.votes} votes`);
});