// ΠΡΟΪΟΝΤΑ ΜΕΝΟΥ
// Για να ΒΑΛΕΙΣ προϊόν: αντίγραψε μια γραμμή { name: ... } μέσα στο items της κατηγορίας.
// Για να ΒΓΑΛΕΙΣ προϊόν: σβήσε τη γραμμή του.
// dine = τιμή στο μαγαζί, take = τιμή take away. desc είναι προαιρετικό.
// Οι τιμές είναι δείγματα – βάλε τις πραγματικές.

var MENU = {
  coffee: [
    { section: "Ζεστοί", items: [
      { name: "Espresso",        dine: 2.5, take: 2.0 },
      { name: "Espresso διπλός", dine: 2.8, take: 2.6 },
      { name: "Cappuccino",      dine: 3.2, take: 3.0 },
      { name: "Cappuccino διπλός", dine: 3.6, take: 3.4 },
      { name: "Latte",           dine: 3.4, take: 3.2 },
      { name: "Nescafé",         dine: 3.8, take: 3.6 }
    ]},
    { section: "Κρύοι", items: [
      { name: "Freddo Espresso",   dine: 3.0, take: 2.8 },
      { name: "Freddo Cappuccino", dine: 3.4, take: 3.2 },
      { name: "Ice Latte",         dine: 3.6, take: 3.4 },
      { name: "Φραπές",            dine: 3.0, take: 2.8 }
    ]},
    { section: "Παραδοσιακοί", items: [
      { name: "Ελληνικός",      dine: 2.5, take: 2.3 },
      { name: "Φίλτρου",        dine: 3.0, take: 2.8 },
      { name: "Σοκολάτα ζεστή", dine: 3.8, take: 3.6 }
    ]}
  ],

  drinks: [
    { section: "", items: [
      { name: "Ουίσκι",        dine: 6.0, take: 6.0 },
      { name: "Βότκα",         dine: 6.0, take: 6.0 },
      { name: "Τζιν",          dine: 6.0, take: 6.0 },
      { name: "Ρούμι",         dine: 6.0, take: 6.0 },
      { name: "Τεκίλα",        dine: 5.0, take: 5.0 },
      { name: "Ούζο",          dine: 4.0, take: 4.0 },
      { name: "Τσίπουρο",      dine: 4.0, take: 4.0 },
      { name: "Aperol Spritz", dine: 8.0, take: 8.0 }
    ]}
  ],

  beers: [
    { section: "", items: [
      { name: "Mythos 330ml",    dine: 3.5, take: 3.5 },
      { name: "Fix 330ml",       dine: 3.5, take: 3.5 },
      { name: "Heineken 330ml",  dine: 4.0, take: 4.0 },
      { name: "Amstel 330ml",    dine: 3.8, take: 3.8 },
      { name: "Corona 330ml",    dine: 4.5, take: 4.5 },
      { name: "Βαρελίσια 500ml", dine: 4.5, take: 4.5 }
    ]}
  ],

  soft: [
    { section: "", items: [
      { name: "Coca-Cola",     dine: 2.8, take: 2.6 },
      { name: "Fanta",         dine: 2.8, take: 2.6 },
      { name: "Sprite",        dine: 2.8, take: 2.6 },
      { name: "Σόδα",          dine: 2.5, take: 2.3 },
      { name: "Τόνικ",         dine: 2.8, take: 2.6 },
      { name: "Ice Tea",       dine: 2.8, take: 2.6 },
      { name: "Χυμός φυσικός", dine: 3.5, take: 3.3 },
      { name: "Νερό 500ml",    dine: 0.6, take: 0.5 }
    ]}
  ]
};
