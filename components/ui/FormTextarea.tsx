interface FormTextareaProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  ariaDescribedBy?: string;
  rows?: number;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function FormTextarea({ 
  id, 
  label, 
  placeholder, 
  required = false,
  ariaDescribedBy,
  rows = 4,
  className = '',
  value,
  onChange
}: FormTextareaProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        aria-describedby={ariaDescribedBy}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
      />
    </div>
  );
}