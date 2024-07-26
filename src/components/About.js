import React from 'react'

export default function About(props) {
  let toggleStyle={
    color: props.mode === "dark" ? "white":"black",
    backgroundColor: props.mode === "dark" ? "black":"white"
  }
    
  return (
   <>
   <div className="container-md my-3" style={toggleStyle}>
       <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={toggleStyle}>
        <strong>What can this app do?</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={toggleStyle}>
      Certainly! TextUtils is a lightweight web application that provides a suite of text manipulation tools in a clean and <br/>user-friendly interface. Let me break down its features for you:<br/>

1.Word Counter: Need to know how many words are in your text? TextUtils has you covered. Paste your text, and it’ll give you an accurate <br/>word count.<br/>
2.Character Counter: Sometimes you want to know the total number of characters in your text. Whether it’s for a tweet or an essay, <br/>TextUtils can count those characters for you.<br/>
3.Remove Extra Spaces: Ever copy-pasted something and ended up with unnecessary spaces? TextUtils helps you clean up your text by <br/>removing those pesky extra spaces.<br/>
4.Capitalize Text: Want to SHOUT or just make your text title-case? Convert your text to uppercase with a click.<br/>
5.Lowercase Text: Maybe you prefer a more understated approach. Convert your text to lowercase effortlessly.<br/>
6.Uppercase Text: If you need to capitalize the first letter of each word (like in titles), TextUtils can do that too.<br/>
7.Copy Text: Easily copy your manipulated text to the clipboard. No more Ctrl+C gymnastics!<br/>
8.Clear Text Box: Start fresh by wiping the text box clean. It’s like hitting the reset button for your creativity.<br/>
9.Preview: See a live preview of your manipulated text. It’s like trying on different outfits before a big event—except with words!<br/>
10.Dark Mode: TextUtils even offers a sleek dark mode for a more comfortable and stylish experience. Because who says text manipulation <br/>can’t be chic? 😎

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={toggleStyle}>
      <strong> How to use it?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={toggleStyle}>
      Certainly! TextUtils is a handy utility in the Android development world. Let’s dive into what it does and how you can use it.<br/>

What is TextUtils?<br/>
TextUtils is part of the Android SDK (Software Development Kit). It’s not an app you install on your phone; rather, it’s a set of <br/>utility functions specifically designed to work with strings (text) in your Android applications.<br/>
Think of it as a toolbox for text manipulation—it provides various methods to perform common operations on strings.<br/>
What Can You Do with TextUtils?<br/>
Word Counting: You can count the number of words in a given string using TextUtils.getWordCount().<br/>
Character Counting: If you need to know how many characters are in a string, TextUtils.getChars() is your friend.<br/>
Case Conversion: Convert text between uppercase and lowercase using TextUtils.toUpperCase() and TextUtils.toLowerCase().<br/>
Trimming: Remove extra spaces (leading or trailing) from a string with TextUtils.trim().<br/>
Joining Strings: Combine multiple strings into one using TextUtils.join(delimiter, array).<br/>
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={toggleStyle} >
       <strong>Why Use TextUtils?</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={toggleStyle}>
      Efficiency: By using TextUtils, you’re leveraging well-tested and optimized code. No need to reinvent the wheel!<br/>
Consistency: These utility methods ensure consistent behavior across different devices and Android versions.<br/>
Readability: Using TextUtils makes your code more readable and self-explanatory.<br/>
      </div>
    </div>
  </div>
</div>  
</div>
   </>
  )
}
