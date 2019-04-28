var belchmsubmit_ = (function(){
  return {
    init: function(){
      this.createListeners();
    },
    createListeners: function(){
      this.on("message", this.formLoaded.bind(this));
    },
    on: function(action, callback){
      window.addEventListener(action, callback);
    },
    formLoaded: function(event){
      if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
        this.form = window.$('form[data-form-id="' + event.data.id + '"]');
        this.classMe(this.form.find('.hs-submit').find('input'), "mdl-button mdl-js-button mdl-button--raised mdl-button--accent");
      }
    },
    classMe: function(elem, cssClass){
      elem.addClass(cssClass);
    }
  }
})();
belchmsubmit_.init();
