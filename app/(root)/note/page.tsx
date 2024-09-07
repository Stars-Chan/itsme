import { Wrapper } from "@/components/wrapper";

import { NoteList, getAllNotes } from "@/features/note";

export const revalidate = 60;

export default async function Page() {
  const { notes, total } = await getAllNotes();

  return (
    <Wrapper className="flex min-h-screen flex-col gap-6 px-6 pb-24 pt-8">
      <h2 className="pb-8 text-3xl font-bold md:text-4xl">最新笔记</h2>

      <NoteList notes={notes} total={total} />
    </Wrapper>
  );
}
