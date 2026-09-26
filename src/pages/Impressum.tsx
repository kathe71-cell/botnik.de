import React from 'react';

export const Impressum: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      <div className="space-y-2">
        <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
          Gesetzliche Anbieterkennzeichnung (§ 5 DDG)
        </span>
        <h1 className="text-3xl font-extrabold text-slate-950">
          Impressum
        </h1>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 text-sm text-stone-700 leading-relaxed shadow-sm">
        
        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
          </h2>
          <p>
            <strong>Projekt / Domain:</strong> botnik.de<br />
            <strong>Betreiber:</strong> Marcel Thomas<br />
            <strong>Kontakt:</strong> info@botnik.de
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            Projektcharakter & Wesen
          </h2>
          <p>
            botnik.de ist ein unabhängiges, nicht-kommerzielles digitales Kunst- und Forschungsexperiment zur Erforschung autonomer kybernetischer Systeme und Pfadabhängigkeit im Web. Es verfolgt zum aktuellen Zeitpunkt keinerlei gewerbliche Absichten, bietet keine Waren oder entgeltlichen Dienstleistungen an und generiert keine Werbeeinnahmen.
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            Haftung für Inhalte
          </h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Die Inhalte auf botnik.de entstehen in Teilen durch automatisierte kybernetische Rechenzyklen. Sollten Inhalte dennoch gegen geltendes Recht verstoßen, bitten wir um unmittelbare Mitteilung zur unverzüglichen Beseitigung.
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            Urheberrecht
          </h2>
          <p>
            Die durch die Seitenbetreiber und autonome Prozesse erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.
          </p>
        </div>

      </div>

    </div>
  );
};
