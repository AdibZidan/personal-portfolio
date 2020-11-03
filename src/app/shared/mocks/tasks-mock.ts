import { Task } from '../interfaces/task.interface';

export const tasksMock: Task[] = [
  {
    id: 1,
    title: 'This is a test!',
    description: 'I love testing!',
    percentage: 69,
    isComplete: false
  },
  {
    id: 2,
    title: 'Wake up at 6 A.M',
    description: 'Drink lots water and prepare coffee',
    percentage: 10,
    isComplete: false
  },
  {
    id: 3,
    title: 'This is a another test!',
    description: 'I love testing! --- This message was marked as spam!',
    percentage: 100,
    isComplete: true
  }
];

export const taskMock: Task = tasksMock[0];
