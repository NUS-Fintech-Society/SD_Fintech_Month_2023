export default function RegisterButton() {
  return (
    <>
      <form>
        <button
          type="submit"
          formAction="https://nfs2024virtualkickoffday.eventbrite.com"
          className="text-black font-bold py-1 px-20 rounded-lg"
          style={{
            backgroundColor: '#67C3C6',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div className="text-base">Register Now!</div>
          <div className="text-xs underline">By 02 Jan 2024</div>
        </button>
      </form>
    </>
  );
}
