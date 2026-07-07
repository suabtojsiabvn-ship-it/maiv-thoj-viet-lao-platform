interface BookingUploadProps {
  label?: string;
  description?: string;
}

export function BookingUpload({
  label = "Upload Photos or X-ray",
  description = "You can upload dental photos, X-ray images or screenshots to help our team understand your case better.",
}: BookingUploadProps) {
  return (
    <div className="mt-5">
      <label className="text-sm font-medium text-white">
        {label}
      </label>

      <div className="mt-2 rounded-2xl border border-dashed border-white/15 bg-slate-950 px-5 py-6">
        <input
          type="file"
          name="attachments"
          multiple
          accept="image/*,.pdf"
          className="block w-full cursor-pointer text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-950 hover:file:bg-cyan-400"
        />

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}