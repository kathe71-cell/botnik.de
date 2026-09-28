import React from 'react';

export const Datenschutz: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      <div className="space-y-2">
        <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
          Datenschutzinformation nach DSGVO
        </span>
        <h1 className="text-3xl font-extrabold text-slate-950">
          Datenschutzerklärung
        </h1>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 text-sm text-stone-700 leading-relaxed shadow-sm">
        
        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            1. Verantwortlicher
          </h2>
          <p>
            Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br />
            <strong>Jens Kathe</strong><br />
            Hansastraße 6<br />
            34119 Kassel<br />
            Deutschland<br />
            E-Mail: <a href="mailto:jens-kathe@web.de" className="text-slate-900 font-medium underline hover:text-amber-700">jens-kathe@web.de</a><br />
            Telefon: <a href="tel:+491748192809" className="text-slate-900 font-medium underline hover:text-amber-700">+49 174 8192809</a>
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            2. Grundsatz: Maximale Datenvermeidung & Privatsphäre
          </h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist integraler Bestandteil von botnik.de. Wir erheben grundsätzlich keine personenbezogenen Nutzerdaten zu Werbe-, Tracking-, Profiling- oder Monetarisierungszwecken.
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            3. Keine Cookies & kein Tracking
          </h2>
          <p>
            Diese Website setzt <strong>keine Tracking-Cookies, keine Marketing-Pixel und keine externen Webanalyse-Tools</strong> (wie Google Analytics, Meta Pixel etc.) ein. Ein Cookie-Banner ist daher technisch und rechtlich nicht erforderlich.
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            4. Lokale System-Schriftarten (Keine Google Fonts CDNs)
          </h2>
          <p>
            Zur Gewährleistung vollständiger digitaler Souveränität bindet diese Website keinerlei externe Schriftarten von Drittservern ein. Es werden ausschließlich die lokal auf Ihrem Betriebssystem vorinstallierten Schriftarten (System Font Stack) verwendet. Es erfolgt keine Übertragung Ihrer IP-Adresse an externe Font-Provider.
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            5. Resonanz-Transducer (Interaktionsdaten)
          </h2>
          <p>
            Wenn Sie im Resonanz-Transducer freiwillig Schieberegler justieren oder ein kurzes Resonanzwort einspeisen, wird diese Information als rein abstrakter Zahlenvektor aggregiert. Es werden dabei weder IP-Adressen, noch Browser-Fingerprints, noch persönliche Identifikatoren gespeichert. Die Speicherung der Eingabehistorie erfolgt ausschließlich lokal in Ihrem eigenen Browser (<code>localStorage</code>).
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            6. Server-Log-Dateien & Hosting
          </h2>
          <p>
            Diese Website wird über Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Vercel erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an den Server übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage). Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Funktionsfähigkeit und Sicherheit des Servers). Die Datenübertragung in die USA ist durch die Zertifizierung von Vercel unter dem EU-U.S. Data Privacy Framework (DPF) abgesichert.
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            7. Ihre Rechte (Auskunft, Berichtigung, Löschung)
          </h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten (Art. 15 DSGVO) sowie ein Recht auf Berichtigung (Art. 16 DSGVO), Sperrung oder Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie das Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO). Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an den Verantwortlichen wenden: Jens Kathe, E-Mail: <a href="mailto:jens-kathe@web.de" className="text-slate-900 font-medium underline hover:text-amber-700">jens-kathe@web.de</a>, Telefon: <a href="tel:+491748192809" className="text-slate-900 font-medium underline hover:text-amber-700">+49 174 8192809</a>. Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO).
          </p>
        </div>

      </div>

    </div>
  );
};
