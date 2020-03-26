import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'de',
  messages: {
    en:{
      register: 'Register your IOTA node and be part of the Community. We support IRI and Hornet nodes.',
      register2: 'Register your node',
      nav_register: 'Register',
      join: 'Join the Pool!',
      nodedock: 'IOTA Nodes of the community - for the community!',
      points: 'Points',
      rank: 'Rank',
      imprint: 'Legal Notice',
      privacy: 'Privacy Policy',
      register_title: 'Be part of the Community Pool',
      register_desc: 'To make your node available to the community via Tangle Bay, it is necessary to add it to the load balancer. It is not necessary to install any special software or run any other applications.',
      node_add: {
        title: 'Add node',
        howto1: 'To add a node, please fill out the form and run it on your node. A CURL request is sent to the load balancers of Tangle Bay and it is verified that the request actually comes from the desired node and you are not trying to add a foreign node.',
        howto2: 'Please execute this in your terminal:',
        attention: 'Please note that after successfully adding a new node, you must carefully save the password which you receive. With the password you can remove your node at any time, if you are no longer interested.',
      },
      node_delete: {
        title: 'Remove node',
        description: 'To remove a node, please fill out the form and run it on your node. A CURL request is sent to the load balancers of Tangle Bay and it is verified that the request actually comes with the correct password.',
      },
      node_update: {
        title: 'Update node',
        description: 'To update a node, please fill out the form and run it on your node. If you do not use the same PASSWORD when adding a new node, the node will lose its points in the pool.',
      },
      footer: require('./translations/footer').en(),
      donate: {
        title: 'Donations (BETA)',
        subtitle: 'Made by the community to support the communty',
        description: 'To Donate some MIOTAs, please press the button below!',
        button_text: 'Donate IOTA',
      },
      faq: {
        q1: 'What is the pool?',
        a1: 'The pool offers node operators the opportunity to participate in a public access point for Trinity without having to make their own address public. The pool also offers the possibility to receive donations from users.',
        q2: 'How can I donate?',
        a2: 'To make a donation to the nodes, simply go to "Donate" in the main menu and then press the appropriate Donate button. After that a QR Code will be generated or the receiving address for copying or directly as deeplink for Trinity. In Trinity itself you only have to select the desired number of IOTA and you can optionally add a message which will be displayed on the overview page. If everyone would donate just as an example one Euro per month to the nodes, many node operators could be supported and therefore the whole IOTA network.',
        q3: 'What happens to my donation?',
        a3: 'After your donation has been confirmed at the receiving address, it will be distributed to the different nodes. The amount of each donation is based on a percentage of the Nodes score to the total score of all Nodes. The distribution will take place immediately after the confirmation.',
        q4: 'What can I do if I have forgotten my node password?',
        a4: 'If you have forgotten your node password, it is unfortunately not possible to change/delete the node. In this case you have to wait for the reset of the season, so that a new addition is possible again.',
        q5: 'Which node versions are supported?',
        a5: 'The pool only supports the latest Hornet and IRI releases.',
        q6: 'Can I tax-deduct the donation?',
        a6: 'A tax deduction of the donation is not possible, because einfachIOTA does not receive any donation itself, but only acts as an agent without commission or other remuneration. The donations are always directly addressed to the respective node operators and we have no direct influence on them.',
        q7: 'What can I do if my donation was not paid out?',
        a7: 'We assume no liability for lost IOTA. However, we do our best to operate the service smoothly and are anxious to ensure a smooth process. If errors are detected, please report the error.',
        no_question: 'Your question is not there?',
        ask_discord: 'No prob! Join our',
        ask_discord2: 'in the community #pool channel.',
        h2: 'All questions at once',
      }
    },
    de: {
      register: 'Registriere deine IOTA-Node und werde Teil der Community. Wir unterstützen IRI- und Hornet-Nodes.',
      register2: 'Registriere deine Node',
      nav_register: 'Registrieren',
      join: 'Mach mit!',
      nodedock: 'IOTA Nodes von der Community - für die Community!',
      points: 'Punkte',
      rank: 'Rang',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      register_title: 'Sei ein Teil des Community Pools',
      register_desc: 'Um deine Node der Community über den Pool zur Verfügung zu stellen, ist es notwendig, ihn den Load Balancern hinzuzufügen. Es ist nicht notwendig, eine spezielle Software zu installieren oder andere Anwendungen auszuführen.',
      node_add: {
        title: 'Node hinzufügen',
        howto1: 'Um eine Node hinzuzufügen, fülle bitte das Formular aus und führe ihn auf deiner Node aus. Eine CURL-Request wird an die Load Balancer von Tangle Bay gesendet und es wird überprüft, ob die Anforderung tatsächlich von der gewünschten Node stammt und du nicht versuchst, eine fremde Node hinzuzufügen.',
        howto2: 'Bitte führe den Befehl in deiner Konsole aus: ',
        attention: 'Bitte beachte, dass nach dem erfolgreichen Hinzufügen einer neuen Node das erhaltene Passwort sorgfältig gespeichert werden muss. Mit dem Passwort kannst du jederzeit deine Node wieder entfernen.' 
      },
      node_delete: {
        title: 'Node entfernen',
        description: 'Um eine Node zu entfernen, fülle bitte das Formular aus und führe anschließend den Befehl auf deiner Node aus. Ein CURL-Request wird an die Load Balancer von Tangle Bay gesendet und es wird überprüft, ob die Anforderung tatsächlich mit dem richtigen Passwort kommt.'
      },
      node_update: {
        title: 'Node updaten',
        description: 'Um eine Node zu updaten, fülle bitte das Formular aus und führe anschließend den Befehl auf deiner Node aus. Sollte beim wieder hinzufügen nicht das gleiche PASSWORD verwendet werden, verliert die Node ihre Punkte im Pool.'
      },
      footer: require('./translations/footer').de(),
      donate: {
        title: 'Spenden (BETA)',
        subtitle: 'Einer für alle, alle für einen!',
        description: 'Wenn du ein paar MIOTA an die Nodebetreiber spenden willst, drücke bitte den Button!',
        button_text: 'Spende IOTA',
      },
      faq: {
        q1: 'Was ist der Pool?',
        a1: 'Der Pool bietet den Nodebetreiben die Möglichkeit an einem öffentlichen Zugangspunkt für Trinity teilzunehmen, ohne dass selbst die eigene Adresse öffentlich gemacht werden muss. Dabei bietet der Pool eine Möglichkeit eine Donation von Nutzern zu erhalten.',
        q2: 'Wie kann ich spenden?',
        a2: 'Um eine Spende an die Nodes zu machen, gehst du einfach im Hauptmenü auf „Donate“ und drückst anschließend den entsprechenden Donate-Button. Danach wird ein QR-Code generiert bzw. die Empfangsadresse zum kopieren oder direkt als Deeplink für Trinity. In Trinity selbst wählst du nur noch die gewünschte Anzahl der IOTA und du kannst Optional eine Nachricht mitgeben, welche auf der Übersichtsseite angezeigt wird. Wenn jeder nur als Beispiel einen Euro im Monat spenden würde an die Nodes, könnten viele Nodebetreiber unterstützt werden und somit das gesamte IOTA Netzwerk.',
        q3: 'Was passiert mit meiner Spende?',
        a3: 'Nachdem deine Spende an der Empfangsaddresse bestätigt worden ist, wird diese auf die verschiedenen Nodes verteilt. Die Höhe der jeweiligen Spende richtet sich prozentual an der Punktzahl der Node zu der Gesamtpunktzahl aller Nodes. Die Aufteilung geschieht sofort nach der Bestätigung.',
        q4: 'Was kann ich tun, wenn ich mein Node-Passwort vergessen habe?',
        a4: 'Solltest du dein Node-Passwort vergessen haben, ist eine Änderung/Löschung der Node leider nicht möglich. In diesem Fall muss auf den Reset der Season gewartet werden, sodass ein erneutes Hinzufügen wieder möglich ist.',
        q5: 'Welche Node-Versionen werden unterstützt?',
        a5: 'Der Pool unterstützt nur die aktuellen und offiziellen Veröffentlichungen von Hornet und IRI.',
        q6: 'Kann ich die Spende steuerlich absetzen?',
        a6: 'Eine steuerliche Absetzung der Spende ist nicht möglich, da einfachIOTA keine Spende selbst erhält, sondern nur Vermittler ohne Provision oder andere Vergütung agiert. Die Spenden richten sich immer direkt an die jeweiligen Nodebetreiber und wir haben keinen direkten Einfluss auf diese.',
        q7: 'Was kann ich tun, wenn meine Spende nicht ausgezahlt wurde?',
        a7: 'Wir übernehmen keine Haftung für verlorengegangene IOTA. Wir bemühen uns aber den Service reibunglos zu betreiben und sind bestrebt einen reibungslosen Ablauf zu gewährleisten. Sollten Fehler erkannt werden, so bitten wir um eine entsprechende Meldung des Fehlers.',
        no_question: 'Deine Frage ist nicht dabei?',
        ask_discord: 'Kein problem! Melde dich in unserem',
        ask_discord2: 'im Community #pool Channel.',
        h2: 'Alle Fragen auf einen Blick',
      }
    }
  }
})

console.log("footer", require('./translations/footer'))