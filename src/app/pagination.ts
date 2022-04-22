import { Articles } from "./article-model";

export interface TodoPagingModel {
  data: Articles[],
  totalCount:number
}
