import classes from './ChoresList.module.css';
export default function ChoresList () {
   return <div> 
      <h5 className={classes.choresHeading}>This Weeks Chores</h5>
      <p className={classes.choresText}> <ol> •Complete Launch Code Assignments</ol>
      <ol> • Get Grocerys</ol>
      <ol> • Do Laundry</ol>
      </p>
         
         
     
   </div>
}