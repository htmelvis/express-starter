var metaData = {
  title: 'Thank you for contacting us!',
  description: 'Thanks for contacting US Netting. We will reply as soon as possible!',
  canonical: 'https://custom.usnetting.com/quote/',
  ogImg: 'https://static.usnetting.com/img/sub-cats/buildanet-6.jpg',
};

export default function (app) {

   app.get('/', (req, res) => {
    res.render('index.ejs');
  });

}
