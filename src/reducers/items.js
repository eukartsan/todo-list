const initialState = {
  items: [
      'Наладить добавление новых задач в TODO List',
      'Предотвратить добавление пустых элементов',
      'Перенести фокус на поле ввода новой задачи при старте приложения. И переносить фокус туда же при добавлении каждой новой задачи в список'
  ]
}

export function itemsReducer(state = initialState) {
  return state
}
