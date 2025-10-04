export interface Note {
    "_id":string,
    "title":string,
    "content":string,
    createdAt:Date
}
export interface NoteResponse {
    _id:       string;
    title:     string;
    content:   string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
}
