import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";

export function ToDoGroup({ Heading, items }) {

    return (
        <>
            <SubHeading>{Heading}</SubHeading>
            <ToDoList>
                {items.map(function (t) {
                    return <ToDoItem 
                        key={t.id}
                        item={t}
                    />
                })}
            </ToDoList>
        </>


    )
}