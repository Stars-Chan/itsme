import { Badge } from "@/components/ui/badge";

import { BytemdViewer } from "@/components/bytemd";
import { IllustrationNoContent } from "@/components/illustrations";

import { toFromNow, toSlashDateString } from "@/lib/utils";

import { type Note } from "../types";

type NoteListProps = {
  notes: Note[];
  total?: number;
};

export const NoteList = ({ notes, total }: NoteListProps) => {
  if (!total) {
    return (
      <div className="grid place-content-center gap-8">
        <IllustrationNoContent className="size-[30vh]" />
        <h3 className="text-center text-2xl font-semibold tracking-tight">
          暂无片段
        </h3>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {notes.map((note) => (
        <div key={note.id} className="w-full">
          <div className="relative w-full rounded-lg border px-6 pb-6">
            <BytemdViewer body={note.body || ""} />
            <div className="flex flex-wrap justify-end gap-2 py-4">
              {note.tags?.map((tag) => <Badge key={tag.id}>{tag.name}</Badge>)}
            </div>
            <div className="flex items-center justify-end text-sm text-muted-foreground">
              <span className="hidden lg:inline-block">
                {toSlashDateString(note.createdAt)}
              </span>
              <span className="mx-2 hidden lg:inline-block">·</span>
              <span>{toFromNow(note.createdAt)}</span>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};
