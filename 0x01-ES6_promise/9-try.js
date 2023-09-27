export default function guardrail(mathFunction) {
  const message = "Guardrail was processed";
  try {
    return [mathFunction(), message];
  } catch (error) {
    return [`Error: ${error.message}`, message];
  }
}
