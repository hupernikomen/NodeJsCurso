module.exports = (app) => {

   app.get('/', (req, res) => {
      res.send(
         `
            <html>
               <head>
                  <title>Teste</title>
               </head>
      
               <body>
                  <h1>Casa do Codigo</h1>
               </body>
            </html>
         `
      );
   });

   app.get("/livros", (req, res) => {
      res.marko(
         require('../views/livros/lista/lista.marko')
      );
   })

}
