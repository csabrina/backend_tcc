
module.exports = (rota, app, controller, middleware) => {

app.use(rota, middleware);

  app.post(rota, controller.create);

  app.get(rota, controller.all);

  app.get(rota+'/:id', controller.get);

  app.put(rota, controller.update);

  app.delete(rota='/:id', controller.delete);
};

/*module.exports = (rota, app, service, middleware) => {

app.use(rota, middleware);

  app.post(rota, service.creat);

  app.get(rota, service.all);

  app.get(rota+'/:id', service.get);

  app.put(rota, service.update);

  app.delete(rota='/:id', service.delete);
};*/

