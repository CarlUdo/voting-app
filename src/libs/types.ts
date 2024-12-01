export type RepresentativeType = {
  id: string;
  name: string;
  email: string;
};

export type IssueType = {
  name: string;
  id: string;
  choices: {
    issueId: string;
    name: string;
    id: string;
  }[];
  active: boolean;
  dateCreated: Date;
};
