export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-bold text-white shadow-md">
        SG
      </div>

      <div>
        <p className="text-lg font-bold tracking-tight">
          Shreya Gupta
        </p>

        <p className="text-xs text-neutral-500">
          Software Engineer
        </p>
      </div>
    </div>
  );
}