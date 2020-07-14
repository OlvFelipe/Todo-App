import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { Container, TaskCard, Description, Title, TaskDate, Hour } from './styles';
import { FiCalendar } from 'react-icons/fi';

function Task({ type, title, date }) {

    const dateFormat = useMemo(() => format(new Date(date), 'dd/MM/yyyy'));
    const hourFormat = useMemo(() => format(new Date(date), 'HH:mm'));

    return (
        <Container>
            <TaskCard>
                <Description>
                    <FiCalendar size={50} color="#dcdcdc"/>
                <Title>{title}</Title>
                </Description>
                <TaskDate>
                    {dateFormat}
                    <Hour>{hourFormat}</Hour>
                </TaskDate>
            </TaskCard>
        </Container>
    );
}

export default Task;