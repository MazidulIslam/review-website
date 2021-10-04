import { useParams } from 'react-router';

const Course = () => {
    
    const { courseId } = useParams();
    return (
        <div>
            <h1>Course Id is { courseId}</h1>

        </div>
    );
};

export default Course;