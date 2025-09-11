import './PrivacyPolicy.css'

import {privacyPolicyData} from "../../data/privacyPolicyData";
import React from "react";

function PrivacyPolicy() {
    return (
        <div className="privacy-policy">
            <div className="container">
                <h1>Privacy Policy</h1>
                <p><strong>Ultimo aggiornamento:</strong> {privacyPolicyData.lastUpdate}</p>

                <h2>1. Titolare del trattamento</h2>
                <p>
                    Dott.ssa <strong>{privacyPolicyData.name}</strong><br/>
                    Psicologa, iscritta all’Albo degli Psicologi della Campania n. {privacyPolicyData.albo}<br/>
                    {privacyPolicyData?.iva && privacyPolicyData?.iva.trim() !== "" && (
                        <>
                            <br/>
                            P.IVA: {privacyPolicyData.iva}
                        </>
                    )}
                    Email: <a href={"mailto:" + privacyPolicyData.email}>{privacyPolicyData.email}</a>
                </p>

                <h2>2. Tipologie di dati raccolti</h2>
                <p>
                    Attraverso il form di contatto, l’utente può fornire: nome, cognome,
                    indirizzo email e contenuto del messaggio inviato.
                </p>

                <h2>3. Finalità del trattamento</h2>
                <p>
                    I dati vengono trattati esclusivamente per rispondere alle richieste inviate tramite il form di
                    contatto
                    e per fornire informazioni sui servizi professionali.
                </p>

                <h2>4. Base giuridica del trattamento</h2>
                <p>
                    Il trattamento si fonda sull’art. 6, par. 1, lett. b) GDPR:
                    esecuzione di misure precontrattuali richieste dall’interessato.
                </p>

                <h2>5. Modalità di trattamento e conservazione dei dati</h2>
                <p>
                    I dati vengono inviati tramite email e conservati nella casella di posta elettronica del Titolare.
                    Non sono utilizzati per finalità di marketing.
                    I dati saranno conservati per il tempo necessario a gestire la richiesta e successivamente
                    cancellati,
                    salvo obblighi di legge.
                </p>

                <h2>6. Comunicazione dei dati</h2>
                <p>
                    I dati non saranno comunicati a terzi né diffusi.
                </p>

                <h2>7. Diritti dell’interessato</h2>
                <p>
                    L’utente ha diritto, in qualunque momento, di: accedere ai propri dati personali,
                    chiederne la rettifica o la cancellazione, limitarne o opporsi al trattamento,
                    presentare reclamo all’Autorità Garante per la Protezione dei Dati Personali.
                    Le richieste possono essere inviate via email al Titolare.
                </p>

                <h2>8. Cookie</h2>
                <p>
                    Questo sito utilizza <strong>solo cookie tecnici</strong> indispensabili al funzionamento e
                    non utilizza cookie di profilazione o analitici.
                </p>

                <h2>9. Aggiornamenti</h2>
                <p>
                    La presente Privacy Policy potrà essere aggiornata nel tempo.
                </p>
            </div>
        </div>
    );
}

export default PrivacyPolicy