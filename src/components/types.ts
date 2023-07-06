export interface Comment {
  id: string;
  name: string;
  replies: Reply[];
}

export interface Reply {
  id: string;
  text: string;
}