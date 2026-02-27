export default function ContactMap() {
  return (
    <section className="h-[400px] bg-muted">
      <iframe
        title="The Caterers location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d106.73!3d10.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAwLjAiTiAxMDbCsDQzJzQ4LjAiRQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
