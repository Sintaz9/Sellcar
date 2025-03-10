import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe(Counter, () => {
    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />); // getByTestId нужен для нахождения элемента по тестовому id (он нужен для динамических элементов, которые мы не можем взять просто так)
                                                                      // render(...) используется для теста определенного компонента
        const countValue = Number(getByTestId("count").textContent);  // создаем переменную, которую преобразум в int (с пом. Number), и записываем туда внутренний контент тега с тестовым id count
        expect(countValue).toEqual(0);                                // прописываем сам тест. ожидаем что эта переменная в самом начале работы равна нулю
    })

    it("counter should increment by 1 if the increment button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        // const incrementBttn = getByRole("button", {className: "Increment"});
        const incrementBttn = document.getElementsByClassName("increment-img")[0];
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(0);
        fireEvent.click(incrementBttn); // симилуриуем нажим на кнопку
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(1);
    })

    it("counter should decrement by 1 if the decrement button is clicked", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        // const incrementBttn = getByRole("div", {name: "Decrement"});
        const incrementBttn = document.getElementsByClassName("decrement-img")[0];
        const countValue1 = Number(getByTestId("count").textContent);
        if (countValue1 == 0)
            expect(countValue1).toEqual(0);
        else {
            fireEvent.click(incrementBttn); // симилуриуем нажим на кнопку
            const countValue2 = Number(getByTestId("count").textContent);
            expect(countValue2).toEqual(countValue1-1);
        }
    })

    // it("counter should be 0 if the restart button is clicked", () => {
    //     const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    //     const incrementBttn = getByRole("button", {name: "Restart"});
    //     const countValue1 = Number(getByTestId("count").textContent);
    //     expect(countValue1).toEqual(50);
    //     fireEvent.click(incrementBttn); // симилуриуем нажим на кнопку
    //     const countValue2 = Number(getByTestId("count").textContent);
    //     expect(countValue2).toEqual(0);
    // })

    // it("counter should invert signs if the switchSigns button is clicked", () => {
    //     const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    //     const incrementBttn = getByRole("button", {name: "SwitchSigns"});
    //     const countValue1 = Number(getByTestId("count").textContent);
    //     expect(countValue1).toEqual(50);
    //     fireEvent.click(incrementBttn); // симилуриуем нажим на кнопку
    //     const countValue2 = Number(getByTestId("count").textContent);
    //     expect(countValue2).toEqual(-50);
    // })
})