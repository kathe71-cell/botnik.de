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
            1. Grundsatz: Maximale Datenvermeidung & Privatsphäre
          </h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist integraler Bestandteil des Experiments von botnik.de. Wir erheben grundsätzlich keine personenbezogenen Nutzerdaten zu Werbe-, Tracking-, Profiling- oder Monetarisierungszwecken.
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            2. Keine Cookies & kein Tracking
          </h2>
          <p>
            Diese Website setzt <strong>keine Tracking-Cookies, keine Marketing-Pixel und keine externen Webanalyse-Tools</strong> (wie Google Analytics, Meta Pixel etc.) ein. Ein Cookie-Banner ist daher technisch und rechtlich nicht erforderlich.
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            3. Lokale System-Schriftarten (Keine Google Fonts CDNs)
          </h2>
          <p>
            Zur Gewährleistung vollständiger digitaler Souveränität bindet diese Website keinerlei externe Schriftarten von Drittservern ein. Es werden ausschließlich die lokal auf Ihrem Betriebssystem vorinstallierten Schriftarten (System Font Stack) verwendet. Es erfolgt keine Übertragung Ihrer IP-Adresse an externe Font-Provider.
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            4. Resonanz-Transducer (Interaktionsdaten)
          </h2>
          <p>
            Wenn Sie im Resonanz-Transducer freiwillig Schieberegler justieren oder ein kurzes Resonanzwort einspeisen, wird diese Information als rein abstrakter Zahlenvektor aggregiert. Es werden dabei weder IP-Adressen, noch Browser-Fingerprints, noch persönliche Identifikatoren gespeichert. Die Speicherung der Eingabehistorie erfolgt ausschließlich lokal in Ihrem eigenen Browser (`localStorage`).
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            5. Server-Log-Dateien
          </h2>
          <p>
            Der Hosting-Provider unseres Servers erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an den Server übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage). Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Funktionsfähigkeit und Sicherheit des Servers).
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            6. Ihre Rechte (Auskunft, Berichtigung, Löschung)
          </h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an den im Impressum angegebenen Betreiber wenden.
          </p>
        </div>

      </div>

    </div>
  );
};
