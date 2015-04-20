function renderGetList(item_template_id,not_empty_section_id,stores){
    var item_list = [];
    var count = 1;
    var item_template_html = $(item_template_id).html();
    Mustache.parse(item_template_html);
    $.each( stores , function( key, val ) {
        if (count % 2 == 0){
            val.textColor = "green";
        }
        count+=1;
        
        var str = (val.description).trim();

        if(str == "" || str == null){
            val.storeSlug = '';
        }else{
            val.storeSlug = '../vendors/' + val.slug;
        }
    
        
        var item_rendered = Mustache.render(item_template_html,val);
        item_list.push(item_rendered);
    });
    if(stores.length > 0){
        $(not_empty_section_id).show();
        $(not_empty_section_id).html(item_list.join(''));
    }
}