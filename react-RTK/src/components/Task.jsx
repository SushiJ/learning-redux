import { Card } from "@twilio-paste/card";
import { Flex } from "@twilio-paste/flex";
import { Label } from "@twilio-paste/label";
import { useDispatch, useSelector } from "react-redux";
import { taskSlice } from "../store/taskSlice";
import { SelectHuman } from "./SelectHuman";

export const Task = ({ taskId }) => {
  const dispatch = useDispatch();

  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  return (
    <Card>
      <Flex marginBottom="space40">
        <input
          type="checkbox"
          id={`task-${taskId}`}
          checked={task.complete}
          onChange={(event) =>
            dispatch(
              taskSlice.actions.toggle({
                taskId,
                completed: event.target.checked,
              })
            )
          }
        />
        <Label htmlFor={`task-${taskId}`}>{task.title}</Label>
      </Flex>
      <Flex>
        <SelectHuman task={task} />
      </Flex>
    </Card>
  );
};
