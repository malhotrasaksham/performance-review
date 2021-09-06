import { Feedback, Status } from '../models/feedback.model';

export const feedbacks: Feedback[] = [
  {
    id: '84ea5401-a6a8-40a9-9694-0f71d06b1ac3',
    userId: 'e8dbf31d-9b1d-4f86-b323-07f562f433fa',
    userForId: '9b12ecba-cc5f-45f5-881a-f6e340729fca',
    userForName: 'John Norris',
    status: Status.pending,
    description: '',
  },
  {
    id: 'a5e29f8b-fd73-47fa-914f-a4810154ff95',
    userId: 'e8dbf31d-9b1d-4f86-b323-07f562f433fa',
    userForId: '0ee59ac5-fc42-4d12-adb8-83c584a940be',
    userForName: 'Tim Clooney',
    status: Status.draft,
    description:
      'A long feedback in draft for the user to show multiline text in the box',
  },
  {
    id: 'a75c5e53-d6ac-44ce-b939-85335e077419',
    userId: 'e8dbf31d-9b1d-4f86-b323-07f562f433fa',
    userForId: '74a145da-b2ff-45f2-9790-ae84d7e34d39',
    userForName: 'Josh Pasto',
    status: Status.submitted,
    description:
      'A long submitted feedback for the user to show multiline text in the box',
  },
];
