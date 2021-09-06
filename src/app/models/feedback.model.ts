export enum Status {
  pending,
  draft,
  submitted,
}

export type Feedback = {
  id: string;
  userId: string;
  userForId: string;
  userForName: string;
  status: Status;
  description: string;
};
