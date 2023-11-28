function showTitle() {
    let choix = [];
    for (let i = 0; i < questions.length; i++) {
        choix.push(questions.marque);
    }
    choix = [...new Set(choix)];
}

