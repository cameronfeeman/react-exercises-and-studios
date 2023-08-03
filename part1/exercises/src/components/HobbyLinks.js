export default function HobbyLinks() {
const hobbyLinks = ["https://www.racketman.com/", "https://www.goodreads.com/"];
return (
<div>
    <h5>Hobbies</h5>
<a href = {hobbyLinks[0]}>Racketman</a>
<br></br>
<a href = {hobbyLinks[1]}>Good Reads</a>
</div>
);
    }

