function checkParams(schema) {
  return (req, res, next) => {
    const validatorResult = schema.validate(req.params);
    if (validatorResult.error) {
      res.status(404).send(validatorResult.arror.details);
    }
    next();
  };
}

function checkBody(schema) {
  return (req, res, next) => {
    const validatorResult = schema.validate(req.body);
    if (validatorResult.error) {
      res.status(404).send(validatorResult.arror.details);
    }
    next();
  };
}

module.exports = { checkParams, checkBody };
