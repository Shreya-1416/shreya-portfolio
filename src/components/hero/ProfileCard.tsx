import Image from "next/image";

export default function ProfileCard() {
  return (
    
    <div className="relative">
      <div className="overflow-hidden rounded-[32px] border-4 border-white shadow-2xl">
        <div className="absolute inset-0 -z-10">
  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-3xl" />
  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/20 blur-3xl" />
</div>
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={320}
          height={400}
          className="h-[400px] w-[320px] object-cover"
          priority
        />
      </div>
    </div>
  );
}