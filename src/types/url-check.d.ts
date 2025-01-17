interface IUrlCheck {
  id: string;
  name: string;
  url: string;
  protocol: string;
  path: string;
  port: number;
  webhook: number;
  timeout: number;
  interval: number;
  threshold: number;
  authentication: { username: string; password: string };
  assert: { statusCode: number };
  ignoreSsl: boolean;
  httpHeaders: { key: string; value: string }[];
  tags: string[];
  reports: IReport[];
  user: IUser;
}

interface ICreateUrlCheckBody {
  name: string;
  url: string;
  protocol: string;
  path: string;
  port: number;
  webhook: number;
  timeout: number;
  interval: number;
  threshold: number;
  authentication: { username: string; password: string };
  assert: { statusCode: number };
  ignoreSsl: boolean;
  httpHeaders: { key: string; value: string }[];
  tags: string[];
}

interface IUpdateUrlCheckBody {
  name: string;
  url: string;
  protocol: string;
  path: string;
  port: number;
  webhook: number;
  timeout: number;
  interval: number;
  threshold: number;
  authentication: { username: string; password: string };
  assert: { statusCode: number };
  ignoreSsl: boolean;
  httpHeaders: { key: string; value: string }[];
  tags: string[];
}

interface IListUrlCheckOptions {
  pageNumber: number;
  pageSize: number;
  tags: string[];
}
