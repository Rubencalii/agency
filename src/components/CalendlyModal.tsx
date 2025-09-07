export default function CalendlyModal() {
  return (
    <div className="mt-10 max-w-xl mx-auto text-center">
      <iframe
        src="https://calendly.com/dor-agency/20min"
        width="100%"
        height="600"
        className="rounded-xl border border-border shadow-gold"
        title="Agenda una llamada con D OR Agency"
        style={{ minWidth: 320 }}
        allowTransparency={true}
      ></iframe>
    </div>
  );
}
