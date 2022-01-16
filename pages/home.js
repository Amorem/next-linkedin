import Image from "next/image";

function home() {
  return (
    <div>
      <header>
        <div>
          <Image
            src="https://rb.gy/vtbzlp"
            layout="fill"
            objectFit="contain"
            alt="LinkedIn Logo"
          />
        </div>
      </header>
    </div>
  );
}

export default home;
