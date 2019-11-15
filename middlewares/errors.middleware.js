const { ERRORS } = require('../constants');


module.exports = (err, req, res, next) => {
  if (String(process.env.NODE_ENV).indexOf('test') === -1) {
    console.error('============ERRORS_MIDDLEWARE==========');
    console.log(err);
  }

  switch (true) {
  //-------------------400 Bad requests Cases-----------------------
  case err.message === ERRORS.EMPTY_URL_FOR_SHORTING:
    return res.status(400).send({
      code: err.message,
      description: 'Please ensure that url was provided in request'
    });
  case err.message === ERRORS.INCORRECT_URL_PROVIDED:
    return res.status(400).send({
      code: err.message,
      description: 'Please ensure you provided exactly real URL.'
    });


    //-------------------404 Not Found Cases-----------------------
  case err.message === ERRORS.URL_NOT_FOUND:
    return res.status(404).send({
      code: err.message,
      description: 'Requested Url was not found.'
    });


  case err.message === ERRORS.SHORTED_URL_WAS_NOT_FOUND:
    return res.status(404).send({
      code: err.message,
      description: 'We have not this url in our DB. Are you sure about it?'
    });


    //-------------------409 Conflict Cases-----------------------






    //-------------------500 Default-----------------------
  default:
    return res.status(500).send('Oops, something went wrong...');
  }
};