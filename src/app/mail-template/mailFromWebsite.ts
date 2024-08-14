export default function mailFromWebsite(from: string, text: string) {

  return `
    <!DOCTYPE html>
    <html lang="it">
      <head>
        <title>Home</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <!-- <link rel="stylesheet" href="styles.css" /> -->
        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: system-ui, sans-serif;
          }

          main {
            padding: 1rem;
          }

          h1 {
            font-weight: bold;
            font-size: 1.5rem;
          }
        </style>
      </head>
      <body>
        <main>
          <h3>Da: <strong>${from}</strong></h3>
          <h3>Corpo del messaggio:</h3>
          <p>${text}</p>
        </main>
      </body>
    </html>
  `
}
