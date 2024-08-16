function TextField({
  label,
  name,
  register,
  validationSchema = {},
  type = 'text',
  required,
  errors,
}) {
  return (
    <div>
      {console.log('shasan', required, name)}
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        className="textInputField"
        type={type}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default TextField;
