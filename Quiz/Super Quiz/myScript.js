function showTitle() {
    let elt = document.querySelector('select');
        let newOption;
        for (const iterator of quizzes) {
            newOption = new Option(iterator.title);
            elt[elt.length] = newOption;
        }
}
