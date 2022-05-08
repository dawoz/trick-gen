export interface Club540 {
  statusCode: number;
  flash: Flash;
  data: Data;
}
export interface Flash {
  notice?: (null)[] | null;
  error?: (null)[] | null;
}
export interface Data {
  classes?: (ClassesEntity)[] | null;
  origins?: (TrickOrigin)[] | null;
  tricks?: (Trick)[] | null;
}
export interface ClassesEntity {
  id: number;
  name: string;
  description: string;
  abbreviation: string;
}
export interface TrickOrigin {
  id: number;
  name: string;
}
export interface Trick {
  id: number;
  name: string;
  description: string;
  aliases: string;
  classId: number;
  difficulty: number;
  basePoints: number;
  pointsComment: string;
  types?: (number)[] | null;
  prerequisites?: (number | null)[] | null;
  credit: string;
  abbreviation: string;
  history: string;
  origins?: (number | null)[] | null;
  exInArray?: (number | null)[] | null;
  exOutArray?: (number | null)[] | null;
  uri: string;
}
