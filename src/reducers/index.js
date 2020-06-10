const INITIAL_STATE = {
    liste:[
    { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
    { id: 2, baslik: "Fatura ode", tamamlandi: true }
  ]
};

export const reducer = (state=INITIAL_STATE, action) => {
    return state;
}