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
            Jens Kathe<br />
            Hansastraße 6<br />
            34119 Kassel<br />
            Deutschland
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            Kontakt
          </h2>
          <p>
            E-Mail: <a href="mailto:jens-kathe@web.de" className="text-slate-900 font-medium underline hover:text-amber-700">jens-kathe@web.de</a><br />
            Telefon: <a href="tel:+491748192809" className="text-slate-900 font-medium underline hover:text-amber-700">+49 174 8192809</a>
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p>
            Jens Kathe<br />
            Hansastraße 6<br />
            34119 Kassel<br />
            Deutschland
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            Haftung für Inhalte
          </h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          </p>
        </div>

        <div>
          <h2 className="font-mono font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            Urheberrecht
          </h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>

      </div>

    </div>
  );
};
