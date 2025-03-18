export default function Home() {
  const someValueFromRender = "someValueFromRender";
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form
        action={async function submit() {
          "use server";
          console.log(someValueFromRender);

          // without the follow statement, the submit button won't throw an error
          [1, 2, 3].map((x) => x + 1);
        }}
      >
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
