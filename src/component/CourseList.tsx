import {Box, Content, Heading} from 'react-bulma-components';
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {CourseModel} from "../model/Models";
import {fetchJSON} from "../util/fetchData";

/**
 * Course List
 */
const CourseList = () => {

    const {t} = useTranslation();

    const [courses, setCourses] = useState<any>([])

    useEffect(() => {
        fetchJSON<CourseModel[]>('data/courses.json')
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
            .catch(console.error)
    }, [setCourses])

    return (
        <Box id="course">
            <Heading renderAs="h2" size={5}>
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
