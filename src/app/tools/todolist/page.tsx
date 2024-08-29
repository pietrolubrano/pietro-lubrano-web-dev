import { Metadata } from "next";
import TodoList from "./TodoList";

export const metadata: Metadata = {
    title: "To Do List",
    description: "Lista di cose da fare",
};

export default function Page() {
  return (
    <main className="container mx-auto flex justify-center bg-black">
      <TodoList />
    </main>
  )
}
