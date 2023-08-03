export default function BookList() {
   let pageTitle = "Books I'd Recomend";
   let book1 = "https://npr.brightspotcdn.com/b8/8a/fb7d49664d86b7eabe3f145aefb7/lessons-in-chemistry.jpg";
   let book2 = "https://media.glamour.com/photos/623cc0e991b16e67a87b156e/4:3/w_2400,h_1800,c_limit/seven-husbands-of-evelyn-hugo.jpg";
   let book3 = "https://media.washtimes.com/media/image/2019/04/11/4_112019_405978108201.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt='Cover of Lessons in Chemistry' style = {{width: "200px", height: "auto" }} /> 
         <img src={book2} alt='Cover of The Seven Wives of Evelyn Hugo' style = {{width: "200px", height: "auto" }}/>
         <img src={book3} alt='Cover of Daisy Jones and The Six' style = {{width: "200px", height: "auto" }} />
      </div>      
   );
}