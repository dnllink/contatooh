var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function(){
    
    var Usuario = mongoose.model('Usuario');
    
    passport.use(new GitHubStrategy({
        clientID: '1d7b9c72cb89ff5c4111',
        clientSecret: '2c2c70d68b8938e56ac56ad8d846e40aba6fb6f3',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function (accessToken, refreshToken, profile, done) {
        
        Usuario.findOrCreate(
            { "login" : profile.username },
            { "nome" : profile.username },
            function (erro, usuario) {
                
                if(erro){
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        );
        
    }));
    
    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });
    
    passport.deserializeUser(function (id, done) {
        
        Usuario.findById(id).exec().then(function (usuario) {
           done(null, usuario); 
        });
        
    });
    
};