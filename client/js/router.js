Router.configure({
    layoutTemplate: 'kekLayout'
});
Router.route('/', {name: 'list'});
Router.route('/create', {name: 'inputForm'});
Router.route('/detail', {name: 'detail'});
