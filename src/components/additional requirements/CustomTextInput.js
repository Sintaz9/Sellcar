import React from "react";


class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // создадим реф в поле `textInput` для хранения DOM-элемента
      this.textInput1 = React.createRef();
      this.textInput2 = React.createRef();
      // определение ф-ии для задания события focus на наш input (textInput)
      this.focusTextInput1 = this.focusTextInput.bind(this);
    }
  
    // ф-ия для задания события focus на наш input (textInput)
    focusTextInput() {
      // Установим фокус на текстовое поле с помощью чистого DOM API (Application Programming Interface -  программный интерфейс приложения)
      // Примечание: обращаемся к "current", чтобы получить DOM-узел
      
      this.textInput1.current.value="Владислав"
      this.textInput2.current.value="vladislav@mail.ru"
    }
  
    render() {
      // описываем, что мы хотим связать реф <input>
      // с `textInput` созданным в конструкторе
      return (
        <div className="name-email-container">
          <input 
          data-aos="fade-right" 
          data-aos-duration="400" 
          type="text" 
          placeholder="Фамилия" 
          required
          ref={this.textInput1}
          />
        <input 
        data-aos="fade-right" 
        data-aos-duration="450" 
        type="text" 
        placeholder="Почта" 
        required 
        ref={this.textInput2}
        />
          {/* <input
            type="text"
            ref={this.textInput} /> */}
          <input
            type="button"
            value="Автозаполнение полей"
            onClick={this.focusTextInput1}
            className="auto-fill-input"
          />
        </div>
      );
    }
  }

  export default CustomTextInput