export default function Page() {
  return (
    <main>
      <div>"Insert talk to bot here"</div>
      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </main>
  );
}
