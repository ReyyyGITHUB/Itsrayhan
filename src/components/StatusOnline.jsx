export default function StatusOnline() {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="img">
        <img src="/assets/online.png" alt="Online status indicator" className="w-4 h-4" />
      </div>
      <span className="font-figtree text-[14px] text-[#B0B0B0]">
        itsrayhan.my.id | Status:
      </span>
      <span className="font-figtree text-[14px] text-[#10B981] font-medium">
        Online
      </span>
    </div>
  );
}