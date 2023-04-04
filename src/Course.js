import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';

function Course({ courseName }) {
    console.log(courseName);
    return <div>
        <img src={courseName} alt=''></img>
    </div>;
}
export default Course;