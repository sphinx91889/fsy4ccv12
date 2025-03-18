import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="h-[676px]">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/Pu4mwBV8aYMUfGkcFShW"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '0px'
          }}
          id="inline-Pu4mwBV8aYMUfGkcFShW"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="FSY4CC Contact"
          data-height="676"
          data-layout-iframe-id="inline-Pu4mwBV8aYMUfGkcFShW"
          data-form-id="Pu4mwBV8aYMUfGkcFShW"
          title="FSY4CC Contact"
        />
      </div>
    </div>
  );
}
