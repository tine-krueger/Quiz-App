document
    .querySelector('question-card__button');
    const text = "Show Answer";
    addEventListener('click', () => {
        ('question-card__button--selected').target.children[0].toggle("Close Answer");
      });
