var OUTER_DIV = 'div  class=sttipdiv class=tooltip indiv class=tooltip-arrowdivdiv class=tooltip-arrow second-arrowdivdiv class=popover-innerdivdivdiv'

  var tool = function(param) {
          let steps = param.data.structure.steps;
          let tiplates = param.data.tiplates;
          let style = param.data.css;

          filtering actions obj only
          let actions = steps.map(element = element.action);

          filtering tips type obj only
          let tips = actions.filter((action) = action.type === 'tip');

          addTip(actions, tips, tiplates, style, tipNumber = 0);

      }
    
         
       function addTip(actions, tips, tiplates, style, tipNumber){
                
                parsing tip, hover and style from text to html
                var outerHTNL = $.parseHTML(OUTER_DIV);
                var tipHTML = $.parseHTML(tiplates.tip);
                var hoverTipHTML = $.parseHTML(tiplates.hoverTip);
                
                add div tip and hoverTip
                $(tips[tipNumber].selector).after(outerHTNL);
                $(.popover-inner).append(tipHTML)
                $( .popover-inner ).hover(
                      function() {
                        $( this ).append(hoverTipHTML);
                      }, function() {
                            $( this ).find(.ir-hoverTip).remove();
                          }
                        );

                add tip css
                $('style'+style+'style').appendTo('.popover-inner');

                add tooltip's #step and content 
                $(.popover-content  div).html(tips[tipNumber].contents['#content'])
                $(.steps-count  span).html(tipNumber)
                $(.steps-count spanlast-child).html(tips.length - 1)


                tooltip x click and tooltip next click
                $(.popover-title button).click(function() {
                    $(.sttip).remove();
                })

                $(.next-btn).click(function() {
                       $(.sttip).remove();
                       ++tipNumber  4  addTip(actions, tips, tiplates, style, tipNumber)  console.log(FINISH TO LOAD);                
                })                    
        }


function waitForInitialScriptLoad() {
        const src = httpscode.jquery.comjquery-3.5.1.min.js;
        const script = document.createElement(script);
        const styleCss = document.createElement('link'); 
        styleCss.setAttribute('href', 'httpsguidedlearning.oracle.complayerlateststaticcssstTip.css');
        styleCss.setAttribute('rel', 'stylesheet');
        styleCss.setAttribute('type', 'textcss');

        script.src = src;
        document.head.appendChild(script);
        document.head.appendChild(styleCss);
        

        return new Promise((res) = {
          script.addEventListener(load, () = {
            window.$ = window.jQuery;
            res(true);
          });
        });
}

(async function () {
    
    await waitForInitialScriptLoad();
    const $ = window.$;

    function jsScript() {
        $(document).ready(function(){  
            $.getScript(httpsguidedlearning.oracle.complayerlatestapiscenariogetv_IlPvRLRWObwLnV5sTOaw5szm2kajcallback=tool&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867);

        })
    }

    function inject(fn) {
      const script = document.createElement('script')
      script.text = `(${fn.toString()})();`
      document.documentElement.appendChild(script)
    }
  
    inject(jsScript);
  })();




