import {Box, Content, Heading} from 'react-bulma-components';
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {CourseModel} from "../model/Models";

/**
 * Course List
 */
const CourseList = () => {

    const {t} = useTranslation();

    const [courses, setCourses] = useState<any>([])

    useEffect(() => {
        fetch('data/courses.json')
            .then(res => res.json())
            .then((data: CourseModel[]) => {
                const courses = data.map(d => {
                    return (
                        <li key={d.id}>
                            <strong>{d.name}</strong> ({d.years})
                        </li>
                    )
                })
                setCourses(courses)
            })
    }, [setCourses])

    return (
        <Box id="course">
            <Heading size={5}>
                {t("course")}
            </Heading>
            <Content>
                <ul>
                    {courses}
                </ul>
            </Content>

        </Box>
    )
};

export default CourseList;
